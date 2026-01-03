import React from 'react';
import { useWedding } from '../contexts/WeddingContext';

const Footer: React.FC = () => {
  const { weddingData } = useWedding();

  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-serif mb-6">
          {weddingData.coupleNames}
        </h3>
        <p className="text-gray-300 mb-8">
          Gracias por ser parte de nuestro día especial
        </p>
        
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-sm">
            © 2025 {weddingData.coupleNames} - Boda {new Date(weddingData.weddingDate).getFullYear()}
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Creado con ❤️ para nuestro día especial
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;