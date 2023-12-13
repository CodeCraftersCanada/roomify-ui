import React from "react";
import "./UserCard.scss";
import UserProps from "../../models/UserProps";
import avatar from "../../assets/avatar.png";

const UserCard: React.FC<UserProps> = ({image_path, fullname, phone, email, enabled, about, onHandleEvent}) => {
    return (                       
        <div className="card card-one" onClick={onHandleEvent}>
            <header>
                <div className="avatar">
                    { image_path === "http://example12345.com" && <img src={avatar} alt="Avatar placeholder" />} 
                    { image_path !== "http://example12345.com" && <img src={image_path} alt="Jhon Doe" />}                
                </div>
            </header>

            <h3>{fullname}</h3>
            <div className="desc">
                {about}
            </div>
            <div className="contacts">
                <a href=""><i className="fa fa-phone"></i></a>
                <a href=""><i className="fa fa-whatsapps"></i></a>
                <a href=""><i className="fa fa-envelope"></i></a>
                <div className="clear"></div>
            </div>

            <footer>
                <a href=""><i className="fa-brands fa-facebook"></i></a>
                <a href=""><i className="fa-brands fa-linkedin"></i></a>
                <a href=""><i className="fa-brands fa-twitter"></i></a>
                <a href=""><i className="fa-brands fa-instagram"></i></a>
            </footer>
        </div>
    )
}

export default UserCard;
