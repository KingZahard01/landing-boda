import React from 'react';
import Hero from './Hero';
import OurStory from './OurStory';
import EventInfo from './EventInfo';
import Gallery from './Gallery';
import RSVP from './RSVP';
import GiftRegistry from './GiftRegistry';
import Footer from './Footer';

const PublicLanding: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      {/* <OurStory /> */}
      <EventInfo />
      {/* <Gallery /> */}
      <RSVP />
      {/* <GiftRegistry /> */}
      <Footer />
    </div>
  );
};

export default PublicLanding;