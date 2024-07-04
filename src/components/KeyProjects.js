import React from 'react';
import '../styles/KeyProjects.css';

function KeyProjects() {
  return (
    <div className="keyProjects-container">
      <h3 className="keyProjects-header">Key Projects</h3>
      <ul className="keyProjects-list">
        <li>
          <strong>Dynamic Credit Card Ordering System:</strong> Developed a scalable system that reduced processing time by 30% and enhanced user experience.
        </li>
        <li>
          <strong>ETL Process Development:</strong> Designed ETL processes handling millions of records with real-time data integrity using Kafka and MongoDB.
        </li>
      </ul>
    </div>
  );
}

export default KeyProjects;
