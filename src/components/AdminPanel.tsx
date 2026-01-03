import React, { useState } from 'react';
import { useWedding } from '../contexts/WeddingContext';
import { WeddingData } from '../types/wedding';

const AdminPanel: React.FC = () => {
  const { weddingData, updateWeddingData } = useWedding();
  const [activeTab, setActiveTab] = useState<'details' | 'gallery' | 'rsvp' | 'gifts' | 'settings'>('details');
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<WeddingData>(weddingData);

  const handleSave = () => {
    updateWeddingData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(weddingData);
    setIsEditing(false);
  };

  const handleInputChange = (field: keyof WeddingData, value: any) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const confirmedCount = weddingData.rsvpList.filter(rsvp => rsvp.attending).length;
  const declinedCount = weddingData.rsvpList.filter(rsvp => !rsvp.attending).length;
  const totalGuests = weddingData.rsvpList
    .filter(rsvp => rsvp.attending)
    .reduce((sum, rsvp) => sum + rsvp.numberOfGuests, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">
              Panel de Administración
            </h1>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                <span className="font-semibold">{confirmedCount}</span> confirmados • 
                <span className="font-semibold"> {declinedCount}</span> rechazados
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg"
              >
                {isEditing ? 'Cancelar' : 'Editar'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Secciones</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveTab('details')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition duration-300 ${
                      activeTab === 'details'
                        ? 'bg-amber-100 text-amber-800'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Detalles de la Boda
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('gallery')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition duration-300 ${
                      activeTab === 'gallery'
                        ? 'bg-amber-100 text-amber-800'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Galería de Fotos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('rsvp')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition duration-300 ${
                      activeTab === 'rsvp'
                        ? 'bg-amber-100 text-amber-800'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Confirmaciones RSVP
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('gifts')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition duration-300 ${
                      activeTab === 'gifts'
                        ? 'bg-amber-100 text-amber-800'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Lista de Regalos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition duration-300 ${
                      activeTab === 'settings'
                        ? 'bg-amber-100 text-amber-800'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Configuración
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-8">
              {activeTab === 'details' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Detalles de la Boda
                  </h2>
                  
                  {isEditing ? (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Nombres de los Novios
                          </label>
                          <input
                            type="text"
                            value={editData.coupleNames}
                            onChange={(e) => handleInputChange('coupleNames', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Fecha de la Boda
                          </label>
                            <input
                              type="date"
                              value={editData.weddingDate}
                              onChange={(e) => handleInputChange('weddingDate', e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Lugar
                          </label>
                          <input
                            type="text"
                            value={editData.venue}
                            onChange={(e) => handleInputChange('venue', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Dirección
                          </label>
                          <input
                            type="text"
                            value={editData.venueAddress}
                            onChange={(e) => handleInputChange('venueAddress', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Hora de Ceremonia
                          </label>
                          <input
                            type="time"
                            value={editData.ceremonyTime}
                            onChange={(e) => handleInputChange('ceremonyTime', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Hora de Recepción
                          </label>
                          <input
                            type="time"
                            value={editData.receptionTime}
                            onChange={(e) => handleInputChange('receptionTime', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Código de Vestimenta
                          </label>
                          <input
                            type="text"
                            value={editData.dressCode}
                            onChange={(e) => handleInputChange('dressCode', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            URL de Imagen de Portada
                          </label>
                          <input
                            type="url"
                            value={editData.coverImage}
                            onChange={(e) => handleInputChange('coverImage', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            placeholder="https://ejemplo.com/imagen.jpg"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Nuestra Historia
                        </label>
                        <textarea
                          value={editData.loveStory}
                          onChange={(e) => handleInputChange('loveStory', e.target.value)}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                      
                      <div className="flex space-x-4">
                        <button
                          onClick={handleSave}
                          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
                        >
                          Guardar Cambios
                        </button>
                        <button
                          onClick={handleCancel}
                          className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg"
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-700">Nombres:</h4>
                          <p className="text-gray-900">{weddingData.coupleNames}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700">Fecha:</h4>
                          <p className="text-gray-900">{new Date(weddingData.weddingDate).toLocaleDateString('es-ES')}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700">Lugar:</h4>
                          <p className="text-gray-900">{weddingData.venue}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700">Dirección:</h4>
                          <p className="text-gray-900">{weddingData.venueAddress}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700">Ceremonia:</h4>
                          <p className="text-gray-900">{weddingData.ceremonyTime}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700">Recepción:</h4>
                          <p className="text-gray-900">{weddingData.receptionTime}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Historia de Amor:</h4>
                        <p className="text-gray-900">{weddingData.loveStory}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'rsvp' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Confirmaciones RSVP
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-green-100 rounded-lg p-6 text-center">
                      <div className="text-3xl font-bold text-green-800">{confirmedCount}</div>
                      <div className="text-green-600">Confirmados</div>
                    </div>
                    <div className="bg-red-100 rounded-lg p-6 text-center">
                      <div className="text-3xl font-bold text-red-800">{declinedCount}</div>
                      <div className="text-red-600">Rechazados</div>
                    </div>
                    <div className="bg-blue-100 rounded-lg p-6 text-center">
                      <div className="text-3xl font-bold text-blue-800">{totalGuests}</div>
                      <div className="text-blue-600">Total Invitados</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {weddingData.rsvpList.map((rsvp) => (
                      <div key={rsvp.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-gray-800">{rsvp.guestName}</h4>
                            <p className="text-gray-600">{rsvp.email}</p>
                            {rsvp.attending && (
                              <p className="text-sm text-gray-500">
                                {rsvp.numberOfGuests} {rsvp.numberOfGuests === 1 ? 'invitado' : 'invitados'}
                              </p>
                            )}
                          </div>
                          <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            rsvp.attending 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {rsvp.attending ? 'Confirmado' : 'Rechazado'}
                          </div>
                        </div>
                        
                        {rsvp.dietaryRestrictions && (
                          <div className="mt-3 text-sm text-gray-600">
                            <span className="font-semibold">Restricciones:</span> {rsvp.dietaryRestrictions}
                          </div>
                        )}
                        
                        {rsvp.songSuggestions && (
                          <div className="mt-2 text-sm text-gray-600">
                            <span className="font-semibold">Canción sugerida:</span> {rsvp.songSuggestions}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'gallery' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Galería de Fotos
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Funcionalidad de carga de imágenes próximamente...
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {weddingData.images.map((image) => (
                      <div key={image.id} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                        <img 
                          src={image.url} 
                          alt={image.caption}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'gifts' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Lista de Regalos
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Funcionalidad de gestión de regalos próximamente...
                  </p>
                  <div className="space-y-4">
                    {weddingData.giftList.map((gift) => (
                      <div key={gift.id} className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-gray-800">{gift.name}</h4>
                          <p className="text-gray-600">${gift.price.toLocaleString()} MXN</p>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          gift.purchased 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {gift.purchased ? 'Comprado' : 'Disponible'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Configuración
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h3 className="font-semibold text-blue-800 mb-2">
                        Compartir tu Sitio Web
                      </h3>
                      <p className="text-blue-700 mb-4">
                        Comparte esta URL con tus invitados:
                      </p>
                      <div className="flex">
                        <input
                          type="text"
                          value={`${window.location.origin}/wedding/${weddingData.coupleNames.toLowerCase().replace(/\s+/g, '-')}`}
                          readOnly
                          className="flex-1 px-4 py-2 border border-blue-300 rounded-l-lg bg-white"
                        />
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg">
                          Copiar
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h3 className="font-semibold text-green-800 mb-2">
                        Vista Previa
                      </h3>
                      <p className="text-green-700 mb-4">
                        Ve cómo se ve tu sitio web:
                      </p>
                      <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">
                        Ver Sitio Público
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;