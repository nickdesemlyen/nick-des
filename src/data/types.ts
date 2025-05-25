export interface Article {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  url: string;
}

export interface Book {
  title: string;
  coverImage: string;
  description: string;
  year: string;
  amazonUrl: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}