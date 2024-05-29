export interface Burger {
  id: string;
  name: string;
  tagline: string;
  ingredients?: string;
  portrait: string;
  images: string[];
  short_desc: string;
  top_selling: boolean;
}
