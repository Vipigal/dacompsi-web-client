import React from 'react';

interface EventCardProps {
  name: string;
  imageUrl: string;
}

const EventCard: React.FC<EventCardProps> = ({ name, imageUrl }) => {
  return (
    <div className="event-card bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={name} className="w-full h-32 sm:h-48 object-cover" />
      <div className="p-4">
        <h5 className="text-md sm:text-lg font-bold text-center">{name}</h5>
      </div>
    </div>
  );
};

export default EventCard;
