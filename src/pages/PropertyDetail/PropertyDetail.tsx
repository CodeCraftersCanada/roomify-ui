import React from "react";
import "./PropertyDetail.scss";
import propertyHolderBig from "../../assets/property-holder-big.png"
import { MdOutlineCameraAlt } from "react-icons/md";

const PropertyDetail = () => {
    return (
        <div className="property-detail-container">
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
                    <div className="property-address">8706 Herrick Ave, Los Angeles</div>
                    <div className="property-name">Home in Downtown, Los Angeles</div>
                    <div className="property-details property-detail-badge">
                        <div className="badge spacing-12px">
                            <img src="https://assets-global.website-files.com/61d398976d9d0f46c06d0222/61d398976d9d0f31046d027b_icon-4-features-property-posts-realtor-template.svg" loading="eager" alt="" className="image badge-icon" />
                            <div>2000</div>
                            <div>&nbsp;sqft</div>
                        </div>
                        <div className="badge spacing-12px">
                            <img src="https://assets-global.website-files.com/61d398976d9d0f46c06d0222/61d398976d9d0f23046d027d_icon-3-features-property-posts-realtor-template.svg" loading="eager" alt="" className="image badge-icon" />
                            <div>3</div>
                        </div>  

                        <div className="badge spacing-12px">
                            <img src="https://assets-global.website-files.com/61d398976d9d0f46c06d0222/61d398976d9d0fc0bc6d027a_icon-2-features-property-posts-realtor-template.svg" loading="eager" alt="" className="image badge-icon" />
                            <div>2</div>
                        </div>
                        <div className="badge spacing-12px">
                            <img src="https://assets-global.website-files.com/61d398976d9d0f46c06d0222/61d398976d9d0f47866d027c_icon-1-features-property-posts-realtor-template.svg" loading="eager" alt="" className="image badge-icon" />
                            <div>2</div>
                        </div>                        
                    </div>
                    <div>
                        <h4 className="about-property">About the property</h4>
                        <p className="property-about color-neutral-600">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit etiam cras tellus sit tempor amet, nascetur quam ornare proin platea diam amet sed fringilla eget pretium id sagittis in porttitor pharetra dui. A venenatis molestie vitae rutrum eu leo gravida odio arcu neque nulla etiam adipiscing amet. Diam sit tempor ut quis sodales tellus aliquam aliquam quis a nisl sapien nunc id etiam penatibus.
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
                            <div className="h2-size">$8,000</div>
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
                            {/* <div className="success-message no-box w-form-done" role="region" aria-label="Email Form success">
                                <div className="flex center mobile-vertical-direction">
                                <img src="https://assets-global.website-files.com/61d398976d9d0f46c06d0222/61d398976d9d0fcc656d0283_icon-success-message-realtor-template.svg" loading="eager" alt="" className="image success-message-icon" />
                                <div className="success-message-text">Your message has been submitted. <br />I will get back to you within <span className="text-breaking-no-wrap">24-48 hours.</span></div>
                                </div>
                            </div>
                            <div className="error-message w-form-fail" role="region" aria-label="Email Form failure">
                                <div>Oops! Something went wrong.</div>
                            </div> */}
                        </div>
                        <div>
                            <div className="horizontal-divider margin-top-large-v2"></div>
                            <h3>Reach the agent</h3>
                            <div data-w-id="055e86b3-07ea-cbe9-fa54-17dde8c6d34e" className="flex children-wrap margin-bottom--15px">
                                <a href="/agent/andy-smith" className="image-wrapper property-agent w-inline-block"><img src="https://assets-global.website-files.com/61d398976d9d0f491b6d0250/61d398976d9d0f3a976d039f_image-avatar-2-agents-realtor-template.jpg" loading="eager" alt="" className="image cover" /></a>
                                <div className="property-agent-content">
                                <div className="margin-bottom-12px"><a href="/agent/andy-smith" className="text-300 bold property-agent-name">Andy Smith</a></div>
                                <div className="w-layout-grid grid-1-column gap-12px justify-items-start">
                                    <a href="tel:(414)846-712" className="text-200 text-link w-inline-block">
                                        <div className="flex">
                                            <img src="https://assets-global.website-files.com/61d398976d9d0f46c06d0222/61d398976d9d0f050e6d02d0_icon-2-agents-realtor-template.svg" loading="eager" alt="" className="text-link-icon" />
                                            <div>(414) 846-712</div>
                                        </div>
                                    </a>
                                    <a href="mailto:andy@realtorx.com" className="text-200 text-link w-inline-block">
                                        <div className="flex">
                                            <img src="https://assets-global.website-files.com/61d398976d9d0f46c06d0222/61d398976d9d0f14d26d02cf_icon-1-agents-realtor-template.svg" loading="eager" alt="" className="text-link-icon" />
                                            <div>andy@realtorx.com</div>
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
