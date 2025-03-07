import React from "react";
import "./Hero.css";
import profile_img from "../../assets/myImg.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      id="home"
      className="hero"
      initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
      animate={{ opacity: 1, y: 0 }} // Fade in and move up
      transition={{ duration: 1 }} // Smooth transition
    >
      <motion.img
        src={profile_img}
        alt=""
        className="profile-img"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span>I'm Ujjwal Sharma,</span> MERN stack developer based in New Delhi.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        I am a MERN stack developer with hands-on experience in building and deploying full stack projects.
      </motion.p>
      <motion.div
        className="hero-action"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <AnchorLink className="anchor-link hero-connect" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
        <div className="hero-resume">My resume</div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
