import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.message.trim() !== "";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formDataObj = new FormData(event.target);
    formDataObj.append("access_key", "6f5ddfad-ed73-4daf-a71d-3dd241e12690");

    const object = Object.fromEntries(formDataObj);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Your message has been sent successfully");
      setFormData({ name: "", email: "", message: "" }); // Reset form after submission
    } else {
      toast.error("Error in sending message");
    }
  };

  return (
    <motion.div
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 50 }} // Fade in & slide up
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }} // Animation replays on scroll
    >
      <div className="title-box">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        {/* Left Section Animation */}
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -50 }} // Slide from left
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>
          <div className="contact-details">
            <motion.div
              className="contact-detail"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: false }}
            >
              <img src={mail_icon} alt="" /> <p>ujjwalssharma12@gmail.com</p>
            </motion.div>

            <motion.div
              className="contact-detail"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: false }}
            >
              <img src={call_icon} alt="" /> <p>+91 8957193330</p>
            </motion.div>

            <motion.div
              className="contact-detail"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: false }}
            >
              <img src={location_icon} alt="" /> <p>New Delhi</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section (Form) Animation */}
        <motion.form
          onSubmit={onSubmit}
          className="contact-right"
          initial={{ opacity: 0, x: 50 }} // Slide from right
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <label>Your Name</label>
          <input
            autoComplete="off"
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label>Your Email</label>
          <input
            autoComplete="off"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label>Write your message here</label>
          <textarea
            autoComplete="off"
            name="message"
            rows="8"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
          />
          <motion.button
            type="submit"
            className="contact-submit"
            disabled={!isFormValid}
            whileHover={{ scale: 1.05 }} // Hover effect
            whileTap={{ scale: 0.95 }}
          >
            Submit now
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
