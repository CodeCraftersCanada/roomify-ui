import React from 'react';
import './PropertyCard.scss';
import PropertyProps from '../../models/PropertyProps';
import propertyHolder from "../../assets/property-holder.png"

const PropertyCard: React.FC<PropertyProps> = ({imageUrl, status, price, title, address, area, beds, baths}) => {
  return (
    <div className="property-card">
      <img src={propertyHolder} alt="Property" className="property-image" />
      <div className="card-property-content">
        <div className={`badge-v2 card-property ${status === "Approved" ? 'approved' : ''} ${status === "Pending" ? 'pending' : ''} ${status === "Rejected" ? 'rejected' : ''}`}>{status}</div>
        <div className="property-price">${price.toLocaleString()}</div>
        <div className="property-title">{title}</div>
        <div className="property-address flex">
            <img src="https://assets-global.website-files.com/61d398976d9d0f46c06d0222/61d398976d9d0f33c36d0279_icon-address-property-realtor-template.svg" loading="eager" alt="" className="image card-property-address-icon" />
            <div className="text-100">3335 21 St, San Francisco</div>
        </div>        
        <div className="property-details">
            <div className="badge spacing-12px">
                <img src="https://assets-global.website-files.com/61d398976d9d0f46c06d0222/61d398976d9d0f31046d027b_icon-4-features-property-posts-realtor-template.svg" loading="eager" alt="" className="image badge-icon" />
                <div>{area}</div>
                <div>&nbsp;sqft</div>
            </div>
            <div className="badge spacing-12px">
                <img src="https://assets-global.website-files.com/61d398976d9d0f46c06d0222/61d398976d9d0f23046d027d_icon-3-features-property-posts-realtor-template.svg" loading="eager" alt="" className="image badge-icon" />
                <div>{beds}</div>
            </div>  

            <div className="badge spacing-12px">
                <img src="https://assets-global.website-files.com/61d398976d9d0f46c06d0222/61d398976d9d0fc0bc6d027a_icon-2-features-property-posts-realtor-template.svg" loading="eager" alt="" className="image badge-icon" />
                <div>{baths}</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
