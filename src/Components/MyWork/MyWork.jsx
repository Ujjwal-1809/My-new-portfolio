import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="title-box">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <motion.div
            key={index}
            className="project-container"
            initial={{ opacity: 0, y: 50 }} // Start hidden and move up
            whileInView={{ opacity: 1, y: 0 }} // Fade in & move up when in view
            transition={{ duration: 0.6, delay: index * 0.1 }} // Stagger effect
            viewport={{ once: true }} // Repeats when scrolling
          >
            <h3 style={{ textAlign: "center" }}>{work.w_name}</h3>
            <img src={work.w_img} alt="" />
            <a target="blank" href={work.link}>
              Live Demo <i className="fa-solid fa-link" style={{ cursor: "pointer", color: "blue" }}></i>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
