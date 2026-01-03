import React, { useState } from 'react';
import { useWedding } from '../contexts/WeddingContext';

const GiftRegistry: React.FC = () => {
  const { weddingData } = useWedding();
  const [activeTab, setActiveTab] = useState<'registry' | 'bank'>('registry');

  // Sample gift registry items
  const sampleGifts = [
    {
      id: '1',
      name: 'Juego de Toallas de Lujo',
      price: 150,
      store: 'Liverpool',
      storeUrl: 'https://liverpool.com.mx',
      purchased: false
    },
    {
      id: '2',
      name: 'Vajilla de Porcelana (24 piezas)',
      price: 800,
      store: 'Palacio de Hierro',
      storeUrl: 'https://elpalaciodehierro.com',
      purchased: false
    },
    {
      id: '3',
      name: 'Batidora de Pie',
      price: 120,
      store: 'Amazon',
      storeUrl: 'https://amazon.com.mx',
      purchased: true
    },
    {
      id: '4',
      name: 'Set de Cuchillos de Cocina',
      price: 200,
      store: 'Coppel',
      storeUrl: 'https://coppel.com',
      purchased: false
    },
    {
      id: '5',
      name: 'Mesa de Centro de Madera',
      price: 600,
      store: 'IKEA',
      storeUrl: 'https://ikea.com.mx',
      purchased: false
    },
    {
      id: '6',
      name: 'Contribución para Luna de Miel',
      price: 500,
      store: 'Efectivo',
      storeUrl: '',
      purchased: false
    }
  ];

  const gifts = weddingData.giftList.length > 0 ? weddingData.giftList : sampleGifts;
  const availableGifts = gifts.filter(gift => !gift.purchased);
  const purchasedGifts = gifts.filter(gift => gift.purchased);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-gray-800 mb-16">
          Mesa de Regalos
        </h2>
        
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setActiveTab('registry')}
              className={`px-6 py-3 rounded-md font-semibold transition duration-300 ${
                activeTab === 'registry'
                  ? 'bg-amber-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Lista de Regalos
            </button>
            <button
              onClick={() => setActiveTab('bank')}
              className={`px-6 py-3 rounded-md font-semibold transition duration-300 ${
                activeTab === 'bank'
                  ? 'bg-amber-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Datos Bancarios
            </button>
          </div>
        </div>
        
        {activeTab === 'registry' ? (
          <>
            {/* Available Gifts */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                Regalos Disponibles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {availableGifts.map((gift) => (
                  <div key={gift.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        {gift.name}
                      </h4>
                      <p className="text-2xl font-bold text-amber-600 mb-4">
                        ${gift.price.toLocaleString()} MXN
                      </p>
                      {gift.storeUrl ? (
                        <a
                          href={gift.storeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
                        >
                          Ver en {gift.store}
                        </a>
                      ) : (
                        <div className="text-gray-600 text-sm">
                          Contacta a los novios para más información
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Purchased Gifts */}
            {purchasedGifts.length > 0 && (
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                  Regalos Ya Comprados
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {purchasedGifts.map((gift) => (
                    <div key={gift.id} className="bg-white rounded-lg shadow-lg p-6 opacity-75">
                      <div className="text-center">
                        <div className="text-green-600 mb-2">
                          <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                          {gift.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          Comprado por un invitado
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          /* Bank Account Tab */
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-6xl mb-6">💰</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Contribución Monetaria
              </h3>
              <p className="text-gray-600 mb-8">
                Si prefieres hacer una contribución monetaria para nuestra luna de miel o nuestro futuro hogar, puedes usar los siguientes datos bancarios:
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <div className="space-y-3 text-left">
                  <div>
                    <span className="font-semibold text-gray-700">Banco:</span>
                    <span className="ml-2 text-gray-600">BBVA México</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Cuenta:</span>
                    <span className="ml-2 text-gray-600">0123 4567 8901</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">CLABE:</span>
                    <span className="ml-2 text-gray-600">0123 4567 8901 2345</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Titular:</span>
                    <span className="ml-2 text-gray-600">Ana García López</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => {
                  navigator.clipboard.writeText('0123456789012345');
                  alert('CLABE copiada al portapapeles');
                }}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Copiar CLABE Interbancaria
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GiftRegistry;