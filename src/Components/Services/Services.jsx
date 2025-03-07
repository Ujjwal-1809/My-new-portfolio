import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="title-box">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="services-container">
        {Services_Data.map((service, index) => (
          <motion.div
            key={index}
            className="services-format"
            initial={{ opacity: 0, y: 50 }} // Start hidden and move up
            whileInView={{ opacity: 1, y: 0 }} // Fade in & move up when in view
            transition={{ duration: 0.6, delay: index * 0.1 }} // Stagger effect
            viewport={{ once: true }} // Trigger when 30% of the element is visible
          >
            {/* <h3>{service.s_no}</h3> */}
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
