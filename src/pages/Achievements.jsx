import React from 'react';
import AchievementCard from '../components/AchievementCard';
import achievements from '../data/Achievements';
import '../styles/Achievements.css'; // New external stylesheet

function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <h1 className="achievements-title">Achievements</h1>
      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <AchievementCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Achievements;
