// import { title } from "process";

import { EventItem, MenuItemEntry, SpecialsItemEntry } from "./types";

export const navs = [
  {
    // home
    id: 1,
    name: "Apie mus",
    target: "hero",
    active: true,
  },
  {
    // About
    id: 2,
    name: "Paslaugos",
    target: "about",
    active: false,
  },
  {
    // Menu
    id: 3,
    name: "Galerija",
    target: "menu",
    active: false,
  },
  {
    // Specials
    id: 4,
    name: "Kontaktai",
    target: "contacts",
    active: false,
  },
  {
    // Events
    id: 5,
    name: "Užsakyti",
    target: "booking",
    active: false,
  },
  {
    // Chefs
    id: 6,
    name: "Apie mus2",
    target: "about",
    active: false,
  },
  {
    // Gallery
    id: 7,
    name: "Paslaugos2",
    target: "services",
    active: false,
  },
];

export const whyUs = [
  {
    id: 1,
    title: "Kokybė",
    content: `Siūlome sprendimus, pritaikytus 
    įvairiems poreikiams ir galimybėms.`,
  },
  {
    id: 2,
    title: "Profesionalumas",
    content: `Mūsų komanda yra profesionali ir 
    patyrusi, todėl galime užtikrinti 
    aukščiausią paslaugų kokybę.`,
  },
  {
    id: 3,
    title: "Inovacijos",
    content: `Mes naudojame tik aukščiausios 
    kokybės ingredientus, kad užtikrintume 
    geriausią skonį ir maistingumą.`,
  },
];

export const menu: MenuItemEntry[] = [
  {
    id: 1,
    name: "Almond Gold",

    preview:
      "/assets/images/menu/Brazil/Almond-Gold-Granite-Colors-Polished.jpg",
    ingredients: "Almond Gold Granitas",
    category: "brazilian",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Alpine white",

    preview: "/assets/images/menu/Brazil/AlpineWhite.jpg",
    ingredients: "hi",
    category: "brazilian",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    name: "Amadeus ",

    preview: "/assets/images/menu/Brazil/AmadeusGranite.jpg",
    ingredients: "hi",
    category: "brazilian",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    name: "Black Horse",

    preview: "/assets/images/menu/Brazil/BlackHorse.jpg",
    ingredients: "hi",
    category: "brazilian",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    name: "Black Savannah",

    preview: "/assets/images/menu/Brazil/BlackSavannah.jpg",
    ingredients: "hi",
    category: "brazilian",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    name: "Blue Barracuda",

    preview: "/assets/images/menu/Brazil/BlueBarracuda.jpg",
    ingredients: "hi",
    category: "brazilian",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 7,
    name: "Blue Jeans",

    preview: "/assets/images/menu/Brazil/BlueJeans.jpg",
    ingredients: "hi",
    category: "brazilian",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 8,
    name: "Chocolate Brown",

    preview: "/assets/images/menu/Brazil/ChocolateBrown.jpg",
    ingredients: "hi",
    category: "brazilian",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 9,
    name: "Coffe Imperial",

    preview: "/assets/images/menu/Brazil/CoffeeImperial.jpg",
    ingredients: "hi",
    category: "brazilian",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const filters = [
  {
    id: 1,
    name: "Visi",
    category: "all",
    active: true,
  },
  {
    // name: 'starters'
    id: 2,
    name: "Braziliski",
    categoty: "brazilian",
    active: false,
  },
  {
    // salads
    id: 3,
    name: "Kinijos",
    category: "chinese",
    active: false,
  },
  {
    // Specialty
    id: 4,
    name: "Karelijos",
    category: "karelian",
    active: false,
  },
  {
    id: 5,
    name: "Indiški",
    category: "indian",
    active: false,
  },
  {
    id: 6,
    name: "Irano",
    category: "iranian",
    active: false,
  },
  {
    id: 7,
    name: "Italijos",
    category: "italian",
    active: false,
  },
  {
    id: 8,
    name: "Norvegiškas",
    category: "norwegian",
    active: false,
  },
  {
    id: 9,
    name: "Ula",
    category: "ula",
    active: false,
  },
  {
    id: 10,
    name: "Pietų Afrikos",
    category: "south-african",
    active: false,
  },
  {
    id: 11,
    name: "Ispanijos",
    category: "spanish",
    active: false,
  },
  {
    id: 12,
    name: "Ukrainos",
    category: "ukrainian",
    active: false,
  },
  {
    id: 13,
    name: "Vetnamo",
    category: "vietnamese",
    active: false,
  },
];

export const specials: SpecialsItemEntry[] = [
  {
    id: 1,
    image: "/assets/images/specials/specials-1.jpg",
    title: "title",
    subtitle: "subtitle",
    content: "content",
    active: true,
  },
  {
    id: 2,
    image: "/assets/images/specials/specials-2.jpg",
    title: "title",
    subtitle: "subtitle",
    content: "content",
    active: false,
  },
  {
    id: 3,
    image: "/assets/images/specials/specials-3.jpg",
    title: "title",
    subtitle: "subtitle",
    content: "content",
    active: false,
  },
  {
    id: 4,
    image: "/assets/images/specials/specials-4.jpg",
    title: "title",
    subtitle: "subtitle",
    content: "content",
    active: false,
  },
  {
    id: 5,
    image: "/assets/images/specials/specials-5.jpg",
    title: "title",
    subtitle: "subtitle",
    content: "content",
    active: false,
  },
];

export const specialsFilters = [
  {
    id: 1,
    name: "Modi sit est",
    active: true,
  },
  {
    id: 2,
    name: "Unde prasentiom sed",
    active: false,
  },
  {
    id: 3,
    name: "Pariatur explicabo vel",
    active: false,
  },
  {
    id: 4,
    name: "Nostrum qui quasi",
    active: false,
  },
  {
    id: 5,
    name: "Iusto un expedita aut",
    active: false,
  },
];

export const events: EventItem[] = [
  {
    id: 1,
    image: "/assets/images/events/eventsImg1.jpg",
    title: "Kapu tvarkymas uz jus ",
    content: "content",
    details: ["detayls", "detayls", "detayls"],
    summary: "summary",
  },
  {
    id: 2,
    image: "/assets/images/events/eventsImg2.jpg",
    title: "Kapu tvarkymas uz jus ",
    content: "content",
    details: ["detayls", "detayls", "detayls"],
    summary: "summary",
  },
  {
    id: 3,
    image: "/assets/images/events/eventsImg3.jpg",
    title: "Kapu tvarkymas uz jus ",
    content: "content",
    details: ["detayls", "detayls", "detayls"],
    summary: "summary",
  },
];

export const bookings = [
  {
    id: 1,
    details: {
      name: "Example Name",
      email: "info@example.com",
      phone: "12345678",
      data: "2024-2-06",
      time: "11:30",
      people: 3,
      message: `message 11111111111111111 message 11111111111111111 message 11111111111111111v message 11111111111111111`,
    },
  },
];
