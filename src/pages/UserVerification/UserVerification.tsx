import React, { useState, useEffect } from "react";
import "./UserVerification.scss";
import { useNavigate } from 'react-router-dom';
import UserCard from "../../components/UserCard/UserCard";
import UserProps from "../../models/UserProps";

const UserVerification = () => {
    const [users, setUsers] = useState<UserProps[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        setUsers([
            {
                "image": "https://randomuser.me/api/portraits/men/3.jpg",
                "fullName": "Jhon Doe",
                "phone": "437-123-4567",
                "email": "jhondoe@gmail.com",
                "enabled": 1,
                "about": "Lorem ipsum dolor sit amet, consectetur adipisicing elit et cupiditate deleniti."
            }                      
        ]);
    }, []);    

    const handleUserDetail = () => {
        navigate('/user/1');
    };

    const renderItem = (user: UserProps, index: number) => {
        return (
            <UserCard 
                image={user.image}
                fullName={user.fullName}
                phone={user.phone}
                email={user.email}
                enabled={user.enabled}
                about={user.about}
                onHandleEvent={handleUserDetail}
                key={user.fullName + index}
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

            {users.map((user, index) => renderItem(user, index))}
        </div>
    )
}

export default UserVerification;