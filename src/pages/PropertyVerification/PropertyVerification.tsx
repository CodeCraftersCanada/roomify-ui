import React, { useState, useEffect } from "react";
import "./PropertyVerification.scss";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import PropertyProps from "../../models/PropertyProps";
import { useNavigate } from 'react-router-dom';
import { getProperties } from "../../services/propertyService";

const PropertyVerification = () => {
    const [properties, setProperties] = useState<PropertyProps[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        getProperties()
              .then((response) => {
                if (response.data && response.data.status) {
                  try {
                    let properties: any[] = response.data.properties;
                    setProperties(properties.filter(property => property.verified === 0));
                  } catch (error) {
                    console.log("Dispatch error: ", error);
                  }

                }
              })
              .catch((error) => {
                console.log("Error: Invalid credentials!");
              });
    }, []);

    const handlePropertyDetail = (id?: string) => {
        if (id) {
            navigate(`/property/${id}`);
        }
    };

    const renderItem = (property: PropertyProps, index: number) => {
        return (
            <PropertyCard 
                property_status_id={property.property_status_id}
                price={property.price.$numberDecimal}
                title={property.title}
                address1={property.address1}
                city={property.city}
                area={1800}
                bedroom_number={property.bedroom_number}
                baths={1}
                imageUrl={property.imageUrl}
                onHandleEvent={() => handlePropertyDetail(property?._id)}
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
