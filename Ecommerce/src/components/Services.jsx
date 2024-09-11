import React from "react";
import './Services.css'
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import TimerIcon from "@mui/icons-material/Timer";
import SafetyCheckIcon from '@mui/icons-material/SafetyCheck';
const Services = () => {
  return (
    <div>
      <div className="container">
        <div className="services">
          <LocalShippingIcon className="delivery-icon" />
          <h3>Super Fast and Free Delivery</h3>
        </div>
        <div className="services2">
          <div className="box1">
            <ContactSupportIcon />
            <h3>Contact Support</h3>
          </div>
          <div className="box2">
            <TimerIcon />
            <h3>On Time Delivery</h3>
          </div>
        </div>
        <div className="services3">
        <SafetyCheckIcon />
        <h3>Safe and Secure</h3>
        </div>
      </div>
    </div>
  );
};

export default Services;
