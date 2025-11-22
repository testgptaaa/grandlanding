export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tag: string;
}

export interface Review {
  id: string;
  author: string;
  text: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}