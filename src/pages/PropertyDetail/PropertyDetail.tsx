import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./PropertyDetail.scss";
import propertyHolderBig from "../../assets/property-holder-big.png"
import { MdOutlineCameraAlt } from "react-icons/md";
import PropertyProps from "../../models/PropertyProps";
import { getPropertiesByID } from "../../services/propertyService";
import { updateProperties } from "../../services/propertyService";

const PropertyDetail = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const emptyProperty: PropertyProps = {
        "_id": "",
        "property_status_id": {name: ""},
        "price": { $numberDecimal: 2000},
        "title": "Home in Downtown, Los Angeles",
        "address1": "",
        "city": "",
        "area": 1230,
        "bedroom_number": 3, 
        "baths": 2,
        "imageUrl": "https://assets-global.website-files.com/61d398976d9d0f46c06d0222/61d398976d9d0f31046d027b_icon-4-features-property-posts-realtor-template.svg"
    };
    const [property, setProperty] = useState<PropertyProps>(emptyProperty);

    useEffect(() => {
        setIsLoading(true);
        if (id) {
            getPropertiesByID(id)
            .then((response) => {
            if (response.data && response.data.status) {
                try {
                    setProperty(response.data.property);
                    setIsLoading(false);
                    console.log(" test ", isLoading);
                } catch (error) {
                    console.log("Dispatch error: ", error);
                }
            }
            })
            .catch((error) => {
                console.log("Error: Invalid credentials!");
            });            
        }

        
    }, [id]);

    const handleVerify = (status: number) => {
        let data = {
            uid: id,
            verified: status
        }

        updateProperties(id, data)
              .then((response) => {
                if (response.data && response.data.status) {
                  try {
                    console.log("test ", response.data)
                  } catch (error) {
                    console.log("Dispatch error: ", error);
                  }

                }
              })
              .catch((error) => {
                console.log("Error: Invalid credentials!");
              });  
    };     

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="property-detail-container">
            <div className="verify-button">
                <button className="violet" onClick={() => handleVerify(2)}>REJECT</button>
                <button onClick={() => handleVerify(1)}>APPROVED</button>
            </div>            
            <section id="property-image" className="section property-image">
                <div className="image-wrapper property">
                    <img src={propertyHolderBig} alt="property" className="image cover" /></div>
                    <div className="browse-gallery">
                        <MdOutlineCameraAlt size={24}/>
                    <div>Browse Gallery</div>
                </div>
            </section>
            <div className="flex property-detail-content">
                <div>
                    <div className="property-address">{property.address1}, {property.city}</div>
                    <div className="property-name">{property && property.name}</div>
                    <div className="property-details property-detail-badge">
                        <div className="badge spacing-12px">
                            <img src="https://assets-global.website-files.com/61d398976d9d0f46c06d0222/61d398976d9d0f31046d027b_icon-4-features-property-posts-realtor-template.svg" loading="eager" alt="" className="image badge-icon" />
                            <div>1800</div>
                            <div>&nbsp;sqft</div>
                        </div>
                        <div className="badge spacing-12px">
                            <img src="https://assets-global.website-files.com/61d398976d9d0f46c06d0222/61d398976d9d0f23046d027d_icon-3-features-property-posts-realtor-template.svg" loading="eager" alt="" className="image badge-icon" />
                            <div>{property.bedroom_number}</div>
                        </div>  

                        <div className="badge spacing-12px">
                            <img src="https://assets-global.website-files.com/61d398976d9d0f46c06d0222/61d398976d9d0fc0bc6d027a_icon-2-features-property-posts-realtor-template.svg" loading="eager" alt="" className="image badge-icon" />
                            <div>1</div>
                        </div>
                        <div className="badge spacing-12px">
                            <img src="https://assets-global.website-files.com/61d398976d9d0f46c06d0222/61d398976d9d0f47866d027c_icon-1-features-property-posts-realtor-template.svg" loading="eager" alt="" className="image badge-icon" />
                            <div>2</div>
                        </div>                        
                    </div>
                    <div>
                        <h4 className="about-property">About the property</h4>
                        <p className="property-about color-neutral-600">
                            {property && property.description}
                        </p>
                    </div>
                    <div>
                        <h4 className="about-property">Property amenities</h4>
                        <div className="w-layout-grid grid-3-columns style-4">
                            <div className="flex amenities-item">
                                <img src="https://assets-global.website-files.com/61d398976d9d0f46c06d0222/61d398976d9d0f88886d02db_icon-1-property-amenities-realtor-template.svg" loading="eager" alt="" className="image amenities-icon" />
                                <div className="text-200 text-neutral-800 amenities-text">Garden</div>
                            </div>
                            <div className="flex amenities-item">
                                <img src="https://assets-global.website-files.com/61d398976d9d0f46c06d0222/61d398976d9d0f93b46d02dc_icon-2-property-amenities-realtor-template.svg" loading="eager" alt="" className="image amenities-icon" />
                                <div className="text-200 text-neutral-800 amenities-text">Security cameras</div>
                            </div>
                            <div className="flex amenities-item">
                                <img src="https://assets-global.website-files.com/61d398976d9d0f46c06d0222/61d398976d9d0fab606d02e2_icon-3-property-amenities-realtor-template.svg" loading="eager" alt="" className="image amenities-icon" />
                                <div className="text-200 text-neutral-800 amenities-text">Laundry</div>
                            </div>
                            <div className="flex amenities-item">
                                <img src="https://assets-global.website-files.com/61d398976d9d0f46c06d0222/61d398976d9d0f15446d02e4_icon-4-property-amenities-realtor-template.svg" loading="eager" alt="" className="image amenities-icon" />
                                <div className="text-200 text-neutral-800 amenities-text">Internet</div>
                            </div>
                            <div className="flex amenities-item">
                                <img src="https://assets-global.website-files.com/61d398976d9d0f46c06d0222/61d398976d9d0ff36e6d02e3_icon-5-property-amenities-realtor-template.svg" loading="eager" alt="" className="image amenities-icon" />
                                <div className="text-200 text-neutral-800 amenities-text">Pool</div>
                            </div>
                            <div className="flex amenities-item">
                                <img src="https://assets-global.website-files.com/61d398976d9d0f46c06d0222/61d398976d9d0f23b26d02e5_icon-6-property-amenities-realtor-template.svg" loading="eager" alt="" className="image amenities-icon" />
                                <div className="text-200 text-neutral-800 amenities-text">Garage</div>
                            </div>
                            <div className="flex amenities-item">
                                <img src="https://assets-global.website-files.com/61d398976d9d0f46c06d0222/61d398976d9d0fd4c56d02e6_icon-7-property-amenities-realtor-template.svg" loading="eager" alt="" className="image amenities-icon" />
                                <div className="text-200 text-neutral-800 amenities-text">Jacuzzi</div>
                            </div>
                            <div className="flex w-condition-invisible amenities-item">
                                <img src="https://assets-global.website-files.com/61d398976d9d0f46c06d0222/61d398976d9d0f24976d02e7_icon-8-property-amenities-realtor-template.svg" loading="eager" alt="" className="image amenities-icon" />
                                <div className="text-200 text-neutral-800 amenities-text">Elevator</div>
                            </div>
                            <div className="flex amenities-item">
                                <img src="https://assets-global.website-files.com/61d398976d9d0f46c06d0222/61d398976d9d0f81ea6d02e8_icon-9-property-amenities-realtor-template.svg" loading="eager" alt="" className="image amenities-icon" />
                                <div className="text-200 text-neutral-800 amenities-text">Dish washer</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-w-id="fca98ef0-2c30-425e-20b5-b98bb2206a57" className="split-content property-right">
                    <div className="card style-6 card-property-request-info">
                        <div className="text-200 margin-bottom-10px">Property for rent</div>
                        <div className="flex children-wrap">
                            <div className="h2-size">${property.price.$numberDecimal}</div>
                            <div className="h2-size">&nbsp;USD</div>
                        </div>
                        <div className="horizontal-divider margin-small"></div>
                        <h3>Get in touch to receive <span className="text-breaking-no-wrap">more info</span></h3>
                        <div className="property-request-form-block w-form">
                            <form id="email-form" name="email-form" data-name="Email Form" method="get" className="property-request-form" data-wf-page-id="61d398976d9d0f40176d023a" data-wf-element-id="d18dc9b1-6785-f7ef-05cc-30da53d27ab3" aria-label="Email Form">
                                <input type="text" className="input w-input" name="name" data-name="Name" placeholder="Full name" id="name"  />
                                <input type="email" className="input w-input" name="Email" data-name="Email" placeholder="Email address" id="email"  />
                                <input type="tel" className="input w-input" name="Phone" data-name="Phone" placeholder="Phone number" id="phone"  />
                                <div className="flex direction-vertical margin-top-8px">
                                <input type="submit" value="Request info" data-wait="Please wait..." className="button-primary bg-primary-1 full-width w-button" />
                                </div>
                            </form>
                        </div>
                        <div>
                            <div className="horizontal-divider margin-top-large-v2"></div>
                            <h3>Reach the agent</h3>
                            <div data-w-id="055e86b3-07ea-cbe9-fa54-17dde8c6d34e" className="flex children-wrap margin-bottom--15px">
                                <a href="/agent/andy-smith" className="image-wrapper property-agent w-inline-block">
                                    <img src={property.user_id?.image_path} alt="Jhon Doe" />    
                                </a>
                                <div className="property-agent-content">
                                <div className="margin-bottom-12px"><a href="/agent/andy-smith" className="text-300 bold property-agent-name">{property.user_id?.fullname}</a></div>
                                <div className="w-layout-grid grid-1-column gap-12px justify-items-start">
                                    <a href="tel:(414)846-712" className="text-200 text-link w-inline-block">
                                        <div className="flex">
                                            <img src="https://assets-global.website-files.com/61d398976d9d0f46c06d0222/61d398976d9d0f050e6d02d0_icon-2-agents-realtor-template.svg" loading="eager" alt="" className="text-link-icon" />
                                            <div>{property.user_id?.phone}</div>
                                        </div>
                                    </a>
                                    <a href="mailto:andy@realtorx.com" className="text-200 text-link w-inline-block">
                                        <div className="flex">
                                            <img src="https://assets-global.website-files.com/61d398976d9d0f46c06d0222/61d398976d9d0f14d26d02cf_icon-1-agents-realtor-template.svg" loading="eager" alt="" className="text-link-icon" />
                                            <div>{property.user_id?.email}</div>
                                        </div>
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="photo-gallery-container">
                <div className="horizontal-divider margin-small"></div>
                <h4 className="about-property">Property gallery</h4>
                <div className="photo-gallery-items">
                    <img className="photo-gallery-item" src="https://assets-global.website-files.com/61d398976d9d0f491b6d0250/61d398976d9d0fea306d03c3_image-gallery-3-property-posts-realtor-template.jpg" alt="" />
                    <img className="photo-gallery-item" src="https://assets-global.website-files.com/61d398976d9d0f491b6d0250/61d398976d9d0f49f26d03c4_image-gallery-2-property-posts-realtor-template.jpg" alt="" />
                    <img className="photo-gallery-item" src="https://assets-global.website-files.com/61d398976d9d0f491b6d0250/61d398976d9d0ffe946d03c0_image-gallery-1-property-posts-realtor-template.jpg" alt="" />
                </div>
            </div>            
        </div>
    )
}

export default PropertyDetail;
