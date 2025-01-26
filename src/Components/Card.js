import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, description, link }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 mb-8">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base mb-4">{description}</p>
      <Link to={link} className="text-pink-600 hover:underline">Learn More</Link>
    </div>
  );
};

export default Card;
