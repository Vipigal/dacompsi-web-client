import React from 'react';
import EventCard from '../components/EventCard'; 
import "../assets/css/eventos.css"
import BannerURL from "../assets/images/computariabanner.png"

// eventos dummy
const activeEvents = [
  {
    id: 'event1',
    name: 'Computaria 2023/2',
    imageUrl: BannerURL, 
  },
  {
    id: 'event2',
    name: 'QCI 2023/2',
    imageUrl: BannerURL, 
  },
];

const completedEvents = [
  {
    id: 'event3',
    name: 'Computaria 2023/1',
    imageUrl: BannerURL, 
  },
  {
    id: 'event4',
    name: 'QCI 2023/1',
    imageUrl: BannerURL, 
  },
];

const Eventos = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Gerenciamento de Eventos</h1>
      <section>
        <h2 className="text-xl font-semibold mb-4 text-center">Eventos Ativos:</h2>
        <div className="flex justify-start gap-4 mb-6 justify-center self-center items-center mx-auto">
          {activeEvents.map(event => (
            <EventCard key={event.id} name={event.name} imageUrl={event.imageUrl} />
          ))}
          <button className="rounded-full bg-green-500 text-white p-4">+</button>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-4 text-center">Eventos Realizados:</h2>
        <div className="flex justify-start gap-4 justify-center self-center items-center mx-auto">
          {completedEvents.map(event => (
            <EventCard key={event.id} name={event.name} imageUrl={event.imageUrl} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Eventos;
