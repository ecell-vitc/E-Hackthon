import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import '../styles/ContactSection.css';

const ContactPerson = ({ name, designation, phone }) => (
  <div className="contact-person">
    <h3>{name}</h3>
    <p className="designation">{designation}</p>
    <p className="phone">{phone}</p>
  </div>
);

const ContactSection = () => {
  const contactData = {
    persons: [
      {
        name: "Anshuman Panda",
        designation: "Vice President",
        phone: "+91 94388 03605"
      },
      {
        name: "Aditya Gorasia",
        designation: "General Secretary",
        phone: "+91 90990 09920"
      }
    ],
    email: "helloecellvitc@gmail.com"
  };

  return (
    <section className="contact-section">
      <h1>Contact Us</h1>
      <div className="contact-cards">
        <div className="contact-card">
          <div className="icon">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <h2>PHONE</h2>
          <div className="contact-info">
            {contactData.persons.map((person, index) => (
              <ContactPerson key={index} {...person} />
            ))}
          </div>
        </div>
        <div className="contact-card">
          <div className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <h2>E-MAIL</h2>
          <p className="email">{contactData.email}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;