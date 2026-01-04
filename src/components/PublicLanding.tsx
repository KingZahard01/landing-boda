import React from 'react';
import Hero from './Hero';
import EventInfo from './EventInfo';
import RSVP from './RSVP';
import Footer from './Footer';

const PublicLanding: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <EventInfo />
      <RSVP />
      <Footer />
    </div>
  );
};

export default PublicLanding;