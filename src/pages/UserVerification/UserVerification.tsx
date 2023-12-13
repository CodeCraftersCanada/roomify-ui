import React, { useState, useEffect } from "react";
import "./UserVerification.scss";
import { useNavigate } from 'react-router-dom';
import UserCard from "../../components/UserCard/UserCard";
import UserProps from "../../models/UserProps";
import { getUsers } from "../../services/userService";

const UserVerification = () => {
    const [users, setUsers] = useState<UserProps[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        getUsers()
              .then((response) => {
                if (response.data && response.data.status) {
                  try {
                    let users: any[] = response.data.user;

                    setUsers(users.filter( (user) => user.user_type_id._id !== 1 && user.verified === 0));
                  } catch (error) {
                    console.log("Dispatch error: ", error);
                  }

                }
              })
              .catch((error) => {
                console.log("Error: Invalid credentials!");
              });
    }, []);    

    const handleUserDetail = (uid?: string) => {
        navigate(`/user/${uid}`);
    };

    const renderItem = (user: UserProps, index: number) => {
        return (
            <UserCard 
                image_path={user.image_path}
                fullname={user.fullname}
                phone={user.phone}
                email={user.email}
                enabled={user.enabled}
                about={user.about}
                onHandleEvent={() => handleUserDetail(user?.uid)}
                key={user.fullname + index}
            />
        );
    };    

    return (
        <div>
            <div className="search-container">
                <input type="text" placeholder="Search..." className="search-input"/>
                <button className="search-button">
                    <i className="fa fa-search"></i>
                </button>
            </div>

            <div className="user-container">
              {users.map((user, index) => renderItem(user, index))}
            </div>
        </div>
    )
}

export default UserVerification;