import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/aboutMe.jpg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/javascript.svg";
import reactIcon from "../../assets/reactjs.svg";
import tailwindIcon from "../../assets/tailwind.svg";
import nodeIcon from "../../assets/node.svg";
import mongoIcon from "../../assets/mongodb.svg";
import gitIcon from "../../assets/git.svg";
import zustandIcon from "../../assets/zustand.svg";
import socketIcon from "../../assets/socketio-icon.svg";

const About = () => {
  return (
    <motion.div
      id="about"
      className="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="title-box">
        <h1>About me</h1>
        <motion.img
          src={theme_pattern}
          alt=""
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
      </div>

      <div className="about-sections">
        {/* Left Side - Image */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={profile_img} alt="" />
        </motion.div>

        {/* Right Side - Text & Skills */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="about-para">
            <p>
              Hi, I'm <span>Ujjwal</span>, A Full-Stack Web Developer passionate about
              building dynamic and user-friendly web applications. I specialize
              in the MERN stack (MongoDB, Express.js, React.js, Node.js) and
              have hands-on experience in developing and deploying interactive
              and responsive web applications.
            </p>
            <p>
              My projects showcase my ability to combine creativity with
              functionality. When I’m not coding, you can find me playing
              cricket or billiards, activities that keep me active and inspired.
            </p>
            <p>Feel free to explore my work or get in touch—I’d love to connect! ❤</p>
          </div>

          <h2 style={{ textAlign: "center" }}>My Skills</h2>

          <div className="about-skills">
            {/* Skill Icons - Left Row */}
            <motion.div
              className="skill-icons"
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.2 }}
            >
              {[{iconImg: htmlIcon, iconName: 'HTML'}, {iconImg:cssIcon, iconName: 'CSS'}, {iconImg:jsIcon, iconName: 'JavaScript'}, {iconImg:reactIcon, iconName: 'React'}, {iconImg:tailwindIcon, iconName: 'Tailwind'}].map(
                (icon, index) => (
                  <motion.div
                    key={index}
                    className="skill-name"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <img style={{ height: "30px" }} src={icon.iconImg} alt="" />
                    <h5>{icon.iconName}</h5>
                  </motion.div>
                )
              )}
            </motion.div>

            {/* Skill Icons - Right Row */}
            <motion.div
              className="skill-icons"
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.2 }}
            >
              {[{iconImg: nodeIcon, iconName: 'Node.js'}, {iconImg:mongoIcon, iconName: 'MongoDB'}, {iconImg:gitIcon, iconName: 'Git'}, {iconImg:zustandIcon, iconName: 'Zustand'}, {iconImg:socketIcon, iconName: 'Socket.IO'}].map(
                (icon, index) => (
                  <motion.div
                    key={index}
                    className="skill-name"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <img style={{ height: "30px" }} src={icon.iconImg} alt="" />
                    <h5>{icon.iconName}</h5>
                  </motion.div>
                )
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
