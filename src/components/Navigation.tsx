import React from 'react';

interface NavigationProps {
  isAdminMode: boolean;
  onToggleMode: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isAdminMode, onToggleMode }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <svg className="w-8 h-8 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-xl font-semibold text-gray-800">
              WeddingPage Builder
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={onToggleMode}
              className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${
                isAdminMode
                  ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  : 'bg-amber-600 text-white hover:bg-amber-700'
              }`}
            >
              {isAdminMode ? 'Ver Sitio Público' : 'Panel de Administración'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;