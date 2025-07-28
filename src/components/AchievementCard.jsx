import React from 'react';
import '../styles/AchievementCard.css';

function AchievementCard({ title, description, image }) {
  return (
    <div className="achievement-card">
      <img src={image} alt={title} className="achievement-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default AchievementCard;
