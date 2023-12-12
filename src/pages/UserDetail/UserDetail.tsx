import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./UserDetail.scss";
import UserProps from "../../models/UserProps";
import loasample from "../../assets/LOA-SAMPLE.jpg";
import { MdOutlineCheck, MdOutlineClose } from "react-icons/md";
import { getUserByUID } from "../../services/userService";
import avatar from "../../assets/avatar.png";

const UserDetail = () => {
    const { uid } = useParams();
    const [user, setUser] = useState<UserProps>({
                "image_path": "https://randomuser.me/api/portraits/men/3.jpg",
                "fullname": "Jhon Doe",
                "phone": "437-123-4567",
                "email": "jhondoe@gmail.com",
                "enabled": 1,
                "about": "Lorem ipsum dolor sit amet, consectetur adipisicing elit et cupiditate deleniti."
            });

    useEffect(() => {
        if (uid) {
            getUserByUID(uid)
            .then((response) => {
            if (response.data && response.data.status) {
                try {
                    setUser(response.data.user);
                } catch (error) {
                    console.log("Dispatch error: ", error);
                }

            }
            })
            .catch((error) => {
                console.log("Error: Invalid credentials!");
            });            
        }
    }, []); 

    return (
        <div className="user-detail-container">
            <div className="user-detail-header">
                <div className="user-detail-left">
                    {/* <div className="avatar">
                        <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Jhon Doe" />
                    </div> */}
                    <div className="avatar">
                        { user.image_path === "http://example1.com" && <img src={avatar} alt="Avatar placeholder" />} 
                        { user.image_path !== "http://example1.com" && <img src={user.image_path} alt="Jhon Doe" />}                
                    </div>                    
                    <h3>{user.fullname}</h3>
                    <div className="divider-black"></div>
                </div>
            </div>
            <div className="user-detail-content-wrapper">
                <div className="user-detail-left">
                    <div>
                        <div className="address-contact">
                            <div className="property-address flex">
                                <img src="https://assets-global.website-files.com/61d398976d9d0f46c06d0222/61d398976d9d0f33c36d0279_icon-address-property-realtor-template.svg" loading="eager" alt="" className="image card-property-address-icon" />
                                <div className="text-100">{user.address}</div>
                            </div>
                            <div className="contacts">
                                <a href=""><i className="fa fa-phone"></i></a>
                                <a href=""><i className="fa fa-envelope"></i></a>
                            </div>
                        </div>
                        <div className="about-me">
                            <h4 className="about-property">About Me</h4>
                            <footer>
                                <a href=""><i className="fa-brands fa-facebook"></i></a>
                                <a href=""><i className="fa-brands fa-linkedin"></i></a>
                                <a href=""><i className="fa-brands fa-twitter"></i></a>
                                <a href=""><i className="fa-brands fa-instagram"></i></a>
                            </footer>
                            <p className="property-about color-neutral-600">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit etiam cras tellus sit tempor amet, nascetur quam ornare proin platea diam amet sed fringilla eget pretium id sagittis in porttitor pharetra dui. A venenatis molestie vitae rutrum eu leo gravida odio arcu neque nulla etiam adipiscing amet. Diam sit tempor ut quis sodales tellus aliquam aliquam quis a nisl sapien nunc id etiam penatibus.
                            </p>
                            <p className="property-about color-neutral-600">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit etiam cras tellus sit tempor amet, nascetur quam ornare proin platea diam amet sed fringilla eget pretium id sagittis in porttitor pharetra dui. A venenatis molestie vitae rutrum eu leo gravida odio arcu neque nulla etiam adipiscing amet. Diam sit tempor ut quis sodales tellus aliquam aliquam quis a nisl sapien nunc id etiam penatibus.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="user-detail-right">
                    <img src={loasample} alt="" />
                </div>
            </div>
        </div>
    )
}

export default UserDetail;