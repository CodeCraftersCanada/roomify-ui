import React from "react";
import "./UserVerification.scss";

const UserVerification = () => {
    return (
        <div>
            <div className="search-container">
                <input type="text" placeholder="Search..." className="search-input"/>
                <button className="search-button">
                    <i className="fa fa-search"></i>
                </button>
            </div>
                        
            <div className="card card-one">
            <header>
                <div className="avatar">
                <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Jhon Doe" />
                </div>
            </header>

            <h3>Jhon Doe</h3>
            <div className="desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit et cupiditate deleniti.
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
        </div>
    )
}

export default UserVerification;