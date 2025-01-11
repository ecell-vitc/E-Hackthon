import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBullhorn, faLightbulb, faHandshake } from '@fortawesome/free-solid-svg-icons';
import '../styles/SponsorSection.css';

const SponsorCard = ({ icon, title, description }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <div 
      ref={ref} 
      className={`sponsor-card ${inView ? 'visible' : ''}`}
    >
      <FontAwesomeIcon icon={icon} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const SponsorSection = () => {
  const sponsorData = [
    {
      icon: faUsers,
      title: "Wide Reach",
      description: "Connect with 2000+ innovative minds from premier institutions across India"
    },
    {
      icon: faBullhorn,
      title: "Brand Visibility",
      description: "Prominent brand placement across all our digital and physical platforms"
    },
    {
      icon: faLightbulb,
      title: "Innovation Hub",
      description: "Direct access to fresh ideas and potential future entrepreneurs"
    },
    {
      icon: faHandshake,
      title: "Network Growth",
      description: "Build valuable connections within the startup ecosystem"
    }
  ];

  return (
    <section className="sponsor-section">
      <div className="sponsor-container">
        <div className="split-title">
          <h2 className="why">WHY</h2>
          <h2 className="sponsor-us">SPONSOR US</h2>
        </div>
        <div className="sponsor-grid">
          {sponsorData.map((card, index) => (
            <SponsorCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;