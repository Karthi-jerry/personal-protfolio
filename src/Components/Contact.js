import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l0lvbr1",   
        "template_yz4f60s",  // Replace with EmailJS Template ID
        form.current,
        "ic2keenPWZViNvbMq"    // Replace with EmailJS Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <section id="contact" className="container py-5">
      <h2 className="text-center mb-4">📩 Contact Me</h2>
      <p className="text-center mb-5 text-muted">
        Have a question or want to work together? Fill out the form or reach me directly.
      </p>

      {/* Contact Form */}
      <form ref={form} onSubmit={sendEmail} className="mx-auto shadow p-4 bg-white rounded" style={{ maxWidth: "600px" }}>
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input type="text" name="name" className="form-control" placeholder="Enter your name" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Your Email</label>
          <input type="email" name="email" className="form-control" placeholder="Enter your email" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea name="message" className="form-control" rows="5" placeholder="Type your message here..." required />
        </div>

        <button type="submit" className="btn btn-dark w-100">🚀 Send Message</button>
      </form>

      {/* My Contact Info */}
      <div className="text-center mt-5">
        <h5>📞 Reach Me Directly</h5>
        <p><i className="fas fa-envelope me-2"></i> <a href="mailto:karthikutty1040746@gmail.com">karthikutty1040746@gmail.com</a></p>
        <p><i className="fas fa-phone me-2"></i> <a href="tel:+916383304012">+91 63833 04012</a></p>
        <p><i className="fas fa-map-marker-alt me-2"></i> Chennai, Tamil Nadu, India</p>
      </div>
    </section>
  );
}
