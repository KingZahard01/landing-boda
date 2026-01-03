import React from 'react';
import { useWedding } from '../contexts/WeddingContext';

const Hero: React.FC = () => {
  const { weddingData } = useWedding();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getDaysUntil = () => {
    const weddingDate = new Date(weddingData.weddingDate);
    const today = new Date();
    const diffTime = weddingDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {weddingData.coverImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${weddingData.coverImage})`,
            filter: 'brightness(0.7)'
          }}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-serif mb-6 drop-shadow-lg">
          {weddingData.coupleNames}
        </h1>

        <div className="text-xl md:text-2xl mb-8 drop-shadow-md">
          <p>{formatDate(weddingData.weddingDate)}</p>
          <p className="mt-2">{weddingData.venue}</p>
        </div>

        {/* Countdown */}
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
          <h3 className="text-lg font-semibold mb-2">Faltan</h3>
          <div className="text-3xl font-bold">
            {getDaysUntil()} {getDaysUntil() === 1 ? 'día' : 'días'}
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;