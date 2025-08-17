import type { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Sunny Villa",
    description: "A bright and airy villa with sea views.",
    image: "/images/villa-main.jpg",
    images: [
      "/images/villa-1.jpg",
      "/images/villa-2.jpg",
      "/images/villa-3.jpg",
    ],
    rating: 4.8,
    address: { city: "Cape Town", country: "South Africa" },
    category: ["WiFi", "Pool", "Air conditioning", "Kitchen"],
    price: 120,
    reviews: [
      {
        name: "Alice",
        avatar: "/avatars/alice.jpg",
        rating: 5,
        comment: "Absolutely loved the stay!",
      },
      {
        name: "Bob",
        avatar: "/avatars/bob.jpg",
        rating: 4,
        comment: "Great location but a bit noisy at night.",
      },
    ],
  },

];