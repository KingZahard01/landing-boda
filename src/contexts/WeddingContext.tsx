import React, { createContext, useContext, useState, ReactNode } from 'react';
import { WeddingData, WeddingTheme } from '../types/wedding';

interface WeddingContextType {
  weddingData: WeddingData;
  theme: WeddingTheme;
  updateWeddingData: (data: Partial<WeddingData>) => void;
  updateTheme: (theme: Partial<WeddingTheme>) => void;
  addRSVP: (rsvp: Omit<WeddingData['rsvpList'][0], 'id' | 'timestamp'>) => void;
  addImage: (image: Omit<WeddingData['images'][0], 'id'>) => void;
  addGift: (gift: Omit<WeddingData['giftList'][0], 'id'>) => void;
}

const defaultWeddingData: WeddingData = {
  coupleNames: 'Eva & Juan',
  weddingDate: '2026-11-28',
  venue: 'Iglesia Lirio de los Valles',
  venueAddress: 'Calle 3 Deportes, La Atravesada',
  ceremonyTime: '4:00 PM',
  receptionTime: '7:00 PM',
  dressCode: 'Formal',
  coverImage: 'fondo1.jpg',
  loveStory: 'Nos conocimos en una playa...',
  images: [],
  giftList: [],
  rsvpList: []
};

const defaultTheme: WeddingTheme = {
  name: 'Clásico',
  primaryColor: '#D4AF37',
  secondaryColor: '#F5F5DC',
  backgroundColor: '#FFFFFF',
  textColor: '#2C2C2C',
  fontFamily: 'Georgia, serif'
};

const WeddingContext = createContext<WeddingContextType | undefined>(undefined);

export const WeddingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [weddingData, setWeddingData] = useState<WeddingData>(defaultWeddingData);
  const [theme, setTheme] = useState<WeddingTheme>(defaultTheme);

  const updateWeddingData = (data: Partial<WeddingData>) => {
    setWeddingData(prev => ({ ...prev, ...data }));
  };

  const updateTheme = (newTheme: Partial<WeddingTheme>) => {
    setTheme(prev => ({ ...prev, ...newTheme }));
  };

  const addRSVP = (rsvp: Omit<WeddingData['rsvpList'][0], 'id' | 'timestamp'>) => {
    const newRSVP = {
      ...rsvp,
      id: Date.now().toString(),
      timestamp: new Date().toISOString()
    };
    setWeddingData(prev => ({
      ...prev,
      rsvpList: [...prev.rsvpList, newRSVP]
    }));
  };

  const addImage = (image: Omit<WeddingData['images'][0], 'id'>) => {
    const newImage = {
      ...image,
      id: Date.now().toString()
    };
    setWeddingData(prev => ({
      ...prev,
      images: [...prev.images, newImage]
    }));
  };

  const addGift = (gift: Omit<WeddingData['giftList'][0], 'id'>) => {
    const newGift = {
      ...gift,
      id: Date.now().toString()
    };
    setWeddingData(prev => ({
      ...prev,
      giftList: [...prev.giftList, newGift]
    }));
  };

  return (
    <WeddingContext.Provider value={{
      weddingData,
      theme,
      updateWeddingData,
      updateTheme,
      addRSVP,
      addImage,
      addGift
    }}>
      {children}
    </WeddingContext.Provider>
  );
};

export const useWedding = () => {
  const context = useContext(WeddingContext);
  if (context === undefined) {
    throw new Error('useWedding must be used within a WeddingProvider');
  }
  return context;
};