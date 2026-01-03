import React, { useState } from 'react';
import { useWedding } from '../contexts/WeddingContext';

const RSVP: React.FC = () => {
  const { weddingData, addRSVP } = useWedding();
  const [formData, setFormData] = useState({
    guestName: '',
    email: '',
    attending: true,
    numberOfGuests: 1,
    dietaryRestrictions: '',
    songSuggestions: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    addRSVP(formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : 
              type === 'number' ? parseInt(value) : value
    }));
  };

  if (isSubmitted) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              ¡Confirmación Recibida!
            </h3>
            <p className="text-gray-600 mb-6">
              Gracias por confirmar tu asistencia. Estamos emocionados de compartir este día especial contigo.
            </p>
            <button 
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  guestName: '',
                  email: '',
                  attending: true,
                  numberOfGuests: 1,
                  dietaryRestrictions: '',
                  songSuggestions: ''
                });
              }}
              className="text-amber-600 hover:text-amber-700 font-semibold"
            >
              Confirmar otro invitado
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-gray-800 mb-16">
          Confirmación de Asistencia
        </h2>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="guestName" className="block text-sm font-semibold text-gray-700 mb-2">
                Nombre Completo *
              </label>
              <input
                type="text"
                id="guestName"
                name="guestName"
                value={formData.guestName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Tu nombre completo"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="tu@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                ¿Asistirás a nuestra boda? *
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="attending"
                    value="true"
                    checked={formData.attending === true}
                    onChange={() => setFormData(prev => ({ ...prev, attending: true }))}
                    className="mr-3 text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-gray-700">Sí, estaré presente</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="attending"
                    value="false"
                    checked={formData.attending === false}
                    onChange={() => setFormData(prev => ({ ...prev, attending: false }))}
                    className="mr-3 text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-gray-700">No podré asistir</span>
                </label>
              </div>
            </div>
            
            {formData.attending && (
              <>
                <div>
                  <label htmlFor="numberOfGuests" className="block text-sm font-semibold text-gray-700 mb-2">
                    Número de invitados (incluyéndote)
                  </label>
                  <select
                    id="numberOfGuests"
                    name="numberOfGuests"
                    value={formData.numberOfGuests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'persona' : 'personas'}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="dietaryRestrictions" className="block text-sm font-semibold text-gray-700 mb-2">
                    Restricciones alimentarias o alergias
                  </label>
                  <textarea
                    id="dietaryRestrictions"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Por favor, comparte cualquier restricción alimentaria..."
                  />
                </div>
                
                <div>
                  <label htmlFor="songSuggestions" className="block text-sm font-semibold text-gray-700 mb-2">
                    Sugerencias de canciones para la fiesta
                  </label>
                  <input
                    type="text"
                    id="songSuggestions"
                    name="songSuggestions"
                    value={formData.songSuggestions}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="¿Qué canción te gustaría escuchar?"
                  />
                </div>
              </>
            )}
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition duration-300 flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </>
              ) : (
                'Confirmar Asistencia'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RSVP;