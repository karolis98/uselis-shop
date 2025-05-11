export type EventItem = {
  id: number;
  image: string;
  title: string;
  content: string;
  details: string[];
  summary: string;
};

export type MenuItemEntry = {
  id: number;
  name: string;
  preview: string;
  ingredients: string;
  category: string;
  description: string;
};
export type SpecialsItemEntry = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  content: string;
  active: boolean;
};
