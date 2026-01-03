import React from 'react';
import { useWedding } from '../contexts/WeddingContext';

const EventInfo: React.FC = () => {
  const { weddingData } = useWedding();

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-gray-800 mb-16">
          Información del Evento
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Event Details */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <svg className="w-6 h-6 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Ceremonia
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-gray-600 w-24">Hora:</span>
                  <span className="font-semibold">{weddingData.ceremonyTime}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600 w-24">Lugar:</span>
                  <span className="font-semibold">{weddingData.venue}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-600 w-24">Dirección:</span>
                  <span className="font-semibold">{weddingData.venueAddress}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <svg className="w-6 h-6 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Recepción
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-gray-600 w-24">Hora:</span>
                  <span className="font-semibold">{weddingData.receptionTime}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600 w-24">Lugar:</span>
                  <span className="font-semibold">{weddingData.venue}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <svg className="w-6 h-6 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                Código de Vestimenta
              </h3>
              <p className="text-lg font-semibold text-gray-800">{weddingData.dressCode}</p>
              <p className="text-gray-600 mt-2">
                Por favor, vistan elegante acorde a la ocasión
              </p>
            </div>
          </div>
          
          {/* Map placeholder */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Ubicación
            </h3>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center text-gray-500">
                <svg className="w12 mx-auto mb-12 h--2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p>Mapa Interactivo</p>
                <p className="text-sm">{weddingData.venueAddress}</p>
              </div>
            </div>
            <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              Ver en Google Maps
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;