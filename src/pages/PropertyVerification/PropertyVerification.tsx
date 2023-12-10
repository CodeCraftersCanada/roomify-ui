import React, { useState, useEffect } from "react";
import "./PropertyVerification.scss";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import PropertyProps from "../../models/PropertyProps";
import { useNavigate } from 'react-router-dom';

const PropertyVerification = () => {
    const [properties, setProperties] = useState<PropertyProps[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        setProperties([
            {
                "status": "Approved",
                "price": 8000,
                "title": "Home in Downtown, Los Angeles",
                "address": "8706 Herrick Ave, Los Angeles",
                "area": 2508,
                "beds": 3,
                "baths": 2,
                "imageUrl": "test"
            },
            {
                "status": "Pending",
                "price": 2050,
                "title": "Cozy House, Los Angeles",
                "address": "8706 Herrick Ave, Los Angeles",
                "area": 2508,
                "beds": 3,
                "baths": 2,
                "imageUrl": "test"
            },
            {
                "status": "Rejected",
                "price": 8000,
                "title": "Home in Downtown, Los Angeles",
                "address": "8706 Herrick Ave, Los Angeles",
                "area": 2508,
                "beds": 3,
                "baths": 2,
                "imageUrl": "test"
            }                        
        ]);
    }, []);

    const handlePropertyDetail = () => {
        console.log('PRINTING');
        navigate('/property/1');
    };

    const renderItem = (property: PropertyProps, index: number) => {
        return (
            <PropertyCard 
                status={property.status}
                price={property.price}
                title={property.title}
                address={property.address}
                area={property.area}
                beds={property.beds}
                baths={property.baths}
                imageUrl={property.imageUrl}
                onHandleEvent={handlePropertyDetail}
                key={property.title + index}
            />
        );
    };

    return (
        <div className="property-verification-container">
            <div className="search-container">
                <input type="text" placeholder="Search..." className="search-input"/>
                <button className="search-button">
                    <i className="fa fa-search"></i>
                </button>
            </div>

            <div className="property-items-container">
                {properties.map((property, index) => renderItem(property, index))}
            </div>
        </div>
    );
}

export default PropertyVerification;
