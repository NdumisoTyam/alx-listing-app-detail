export interface Address {
  city: string;
  country: string;
}

export interface Review {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface PropertyProps {
  name: string;
  description: string;
  image: string;
  images?: string[];
  rating: number;
  address: Address;
  category: string[];
  price: number;
  reviews: Review[];
}
