import React, { useState } from 'react';
import { useWedding } from '../contexts/WeddingContext';

const Gallery: React.FC = () => {
  const { weddingData } = useWedding();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Sample images if none uploaded
  const sampleImages = [
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
      caption: 'El momento perfecto',
      order: 1
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800',
      caption: 'Nuestro primer encuentro',
      order: 2
    },
    {
      id: '3',
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800',
      caption: 'Promesa de amor',
      order: 3
    },
    {
      id: '4',
      url: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?w=800',
      caption: 'Juntos para siempre',
      order: 4
    },
    {
      id: '5',
      url: 'https://images.unsplash.com/photo-1522335787662-7d3d66a0b5c8?w=800',
      caption: 'Momentos felices',
      order: 5
    },
    {
      id: '6',
      url: 'https://images.unsplash.com/photo-1519223400710-6da4e4daa74d?w=800',
      caption: 'Nuestro futuro',
      order: 6
    }
  ];

  const images = weddingData.images.length > 0 ? weddingData.images : sampleImages;

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-gray-800 mb-16">
          Nuestra Galería
        </h2>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div 
              key={image.id}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-gray-700 text-center font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal for enlarged image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage}
              alt="Imagen ampliada"
              className="max-w-full max-h-full object-contain"
            />
            <button 
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;