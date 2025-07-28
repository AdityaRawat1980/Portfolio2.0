import React from 'react';
import '../styles/contact.css';
function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="form-con">
        <div className="-con1">
          <a href="mailto:adityarawat.rawat2005@gmail.com">Click hear to mail me</a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=adityarawat.rawat2005@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Aditya%2C%20I%20saw%20your%20portfolio..." target="_blank" rel="noopener noreferrer">click </a><br/>
          <a href="tel:+919876543210">Call Us</a>
        </div>
        <div className="con2">
          <form action="">
            <fieldset>
                <input type="text" name="name" placeholder="Your Name" /><br/>
                <input type="email" name="email" placeholder="Your Email" /><br/>
                <textarea name="message" placeholder="Your Message"></textarea><br/>
                <button type="submit">Send</button>
            </fieldset>
        </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;