import React from 'react';
import { useWedding } from '../contexts/WeddingContext';

const OurStory: React.FC = () => {
  const { weddingData } = useWedding();

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-12">
          Nuestra Historia
        </h2>
        
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {weddingData.loveStory}
          </p>
          
          {/* Timeline could be added here in the future */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">2019</div>
              <p className="text-gray-600">Nos conocimos</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">2024</div>
              <p className="text-gray-600">Nos comprometimos</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">2025</div>
              <p className="text-gray-600">¡Nos casamos!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;