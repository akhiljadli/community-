import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import './mycard.css';

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <div className="icon-circle">
        <FontAwesomeIcon icon={faUsers} className="icon" />
      </div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
