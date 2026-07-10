import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_47hqkwj",
      "template_2i0k0ag",
      form.current,
      "hecxTYFPfNfslSRSD"
    )
    .then(
      () => {
        alert("✅ Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        console.log(error);
        alert("❌ Failed to send message.");
      }
    );
};
  return (
    <section id="contact" className="contact">

      <h2>Contact Me</h2>

      <p className="contact-text">
  As a fresher, I'm excited to begin my journey in software development. I'm open to internships, full-time opportunities, and meaningful collaborations.
</p>

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-info">

          <h3>Get In Touch</h3>

          <div className="info-item">
  <FaEnvelope />
  <a href="mailto:vidyadharichinta@gmail.com">
    vidyadharichinta@gmail.com
  </a>
</div>

          <div className="info-item">
  <FaPhone />
  <a href="tel:+919848388702">
    +91 98483 88702
  </a>
</div>

          <div className="info-item">
            <FaMapMarkerAlt />
            <span>Telangana, India</span>
          </div>

          <div className="info-item">
  <FaGithub />
  <a
    href="https://github.com/Viya04"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub
  </a>
</div>

          <div className="info-item">
  <FaLinkedin />
  <a
    href="https://www.linkedin.com/in/chinta-vidyadhari-3b021141b"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>
</div>

        </div>

        {/* Right Side */}

        <form
  ref={form}
  onSubmit={sendEmail}
  className="contact-form"
>

          <input
  type="text"
  name="from_name"
  placeholder="Your Name"
  required
/>
          <input
  type="email"
  name="from_email"
  placeholder="Your Email"
  required
/>

          <input
  type="text"
  name="subject"
  placeholder="Subject"
  required
/>

          <textarea
  name="message"
  rows="6"
  placeholder="Your Message"
  required
></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;