import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PieChart, Pie, Tooltip, Legend } from "recharts";
import "./LandlordDetail.scss";
import { MdCheckCircle } from "react-icons/md";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import PropertyProps from "../../models/PropertyProps";
import UserProps from "../../models/UserProps";
import { useNavigate } from 'react-router-dom';
import { getUserByUID } from "../../services/userService";

const LandlordDetail = () => {
    const [propertyCount, setPropertyCount] = useState(0);
    const [propertyBookingCount, setPropertyBookingCount] = useState(0);
    const [properties, setProperties] = useState<PropertyProps[]>([]);
    const navigate = useNavigate();

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
                    setProperties(response.data.user.properties);
                    setPropertyCount(response.data.propertyCount);
                    setPropertyBookingCount(response.data.propertyBookingCount);
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


    const data = [
        { name: "Group A", value: 30, fill: "#0088FE" },
        { name: "Group B", value: 70, fill: "#00C49F" }
    ]; 

    const renderColorfulLegendText = (value: string, entry: any) => {

        return (
            <span style={{ color: "#596579", fontWeight: 500, padding: "10px" }}>
            {value}
            </span>
        );
    };

    const renderItem = (property: PropertyProps, index: number) => {
        return (
            <PropertyCard 
                price={property.price.$numberDecimal}
                title={property.title}
                address1={property.address1}
                city={property.city}
                area={1800}
                bedroom_number={property.bedroom_number}
                baths={1}
                imageUrl={property.imageUrl}
                key={property.title + index}
            />
        );
    };    

    return (
        <div className="landlord-detail-container">
            <div className="container-layout">
                <div className="left">
                    <div className="landlord-about">
                        <div className="landlord-contact">
                            <div className="avatar">
                                <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Jhon Doe" />
                            </div>                            
                            <span className="landlord-name">{user.fullname}</span>
                            <div className="horizontal-divider"></div>
                            <div className="landlord-address">
                                <div className="landlord-address-label">
                                    <div>City: </div>
                                    <div>State: </div>
                                    <div>Country: </div>
                                    <div>Post code: </div>
                                    <div>Phone: </div>
                                    <div>Email: </div>
                                </div>
                                <div className="landlord-address-item">
                                    <div>Toronto </div>
                                    <div>Ontario </div>
                                    <div>Canada </div>
                                    <div>M2H 2Y3 </div>
                                    <div>{user.phone}</div>
                                    <div>{user.email}</div>
                                </div>                              
                            </div>
                        </div>
                        <div className="landlord-detail">
                            <h3>Landlord Details</h3>
                            <div className="horizontal-divider"></div>
                            <div className="agent-detail-content">
                                <div className="agent-detail-label">
                                    <div> <MdCheckCircle color="#2196f3"/> Business License: </div>
                                    <div> <MdCheckCircle color="#2196f3"/> Tax Number: </div>
                                </div>
                                <div className="agent-detail-value">
                                    <div> 1342 7946 0097 324</div>
                                    <div> TN 34C0 675R PQ34</div>
                                </div>                                                                
                            </div>
                            <div className="horizontal-divider"></div>
                            <h3>Property Status</h3>
                            <div className="landlord-listing">
                                <div className="card-listing">
                                    <span>Total Listings</span>
                                    <span>{propertyCount}</span>
                                    <PieChart width={200} height={200}>
                                        <Pie
                                        data={data}
                                        cx={100}
                                        cy={50}
                                        innerRadius={30}
                                        outerRadius={40}
                                        fill="#8884d8"
                                        paddingAngle={0}
                                        dataKey="value"
                                        >
                                        </Pie>      
                                        {/* <Legend
                                        height={5}
                                        iconType="circle"
                                        layout="vertical"
                                        verticalAlign="middle"
                                        iconSize={5}
                                        formatter={renderColorfulLegendText}
                                        />                                         */}
                                    </PieChart>                                   
                                </div>

                                <div className="card-listing">
                                    <span>Properties rent</span>
                                    <span>{propertyBookingCount}</span>
                                    <PieChart width={200} height={200}>
                                        <Pie
                                        data={data}
                                        cx={100}
                                        cy={50}
                                        innerRadius={30}
                                        outerRadius={40}
                                        fill="#8884d8"
                                        paddingAngle={0}
                                        dataKey="value"
                                        >
                                        </Pie>      
                                        {/* <Legend
                                        height={5}
                                        iconType="circle"
                                        layout="vertical"
                                        verticalAlign="middle"
                                        iconSize={5}
                                        formatter={renderColorfulLegendText}
                                        />                                         */}
                                    </PieChart>                                   
                                </div>                                
                            </div>
                        </div>                      
                    </div>
                    <div className="landlord-active-listing">
                        <h3>Active Listings</h3>

                        <div className="active-listing">
                            {properties.map((property, index) => renderItem(property, index))}
                        </div>
                    </div>
                </div>
                <div className="right">
                    <h3>Files</h3>
                    <div className="horizontal-divider"></div>
                </div>
            </div>
        </div>
    )
}

export default LandlordDetail;