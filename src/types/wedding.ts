export interface WeddingData {
  coupleNames: string;
  weddingDate: string;
  venue: string;
  venueAddress: string;
  ceremonyTime: string;
  receptionTime: string;
  dressCode: string;
  coverImage: string;
  loveStory: string;
  images: WeddingImage[];
  giftList: GiftItem[];
  rsvpList: RSVPEntry[];
}

export interface WeddingImage {
  id: string;
  url: string;
  caption: string;
  order: number;
}

export interface GiftItem {
  id: string;
  name: string;
  price: number;
  store: string;
  storeUrl: string;
  purchased: boolean;
}

export interface RSVPEntry {
  id: string;
  guestName: string;
  email: string;
  attending: boolean;
  numberOfGuests: number;
  dietaryRestrictions: string;
  songSuggestions: string;
  timestamp: string;
}

export interface WeddingTheme {
  name: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  fontFamily: string;
}