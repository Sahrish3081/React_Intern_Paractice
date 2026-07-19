// Image Imports
import maldivesImg from "../assets/Maldives.jpeg";
import milfordSoundImg from "../assets/Piopiotahi-Milford-Sound-Tips-1.webp"; // ya 14.webp jo use karna ho
import queenstownImg from "../assets/queenstown.webp";
import mountCookImg from "../assets/mount-cook.png";

const travelData = [
  {
    id: 1,
    image: maldivesImg,
    title: "The Maldives",
    location: "Indian Ocean",
    googleMaps: "https://maps.google.com/?q=Maldives",
    description:
      "A tropical paradise made of 26 coral atolls featuring blindingly white sand beaches. It is world-famous for its crystal-clear turquoise lagoons and luxury overwater villas. Visitors can swim directly from their rooms into vibrant coral reefs filled with sea turtles."
  },

  {
    id: 2,
    image: milfordSoundImg,
    title: "Milford Sound (Piopiotahi)",
    location: "South Island, New Zealand",
    googleMaps: "https://maps.google.com/?q=Milford+Sound+New+Zealand",
    description:
      "A breathtaking fjord carved by ancient glaciers and surrounded by towering, sheer rock cliffs. Giant waterfalls cascade down rainforest-covered mountains directly into the dark, deep waters below. It is widely considered the eighth wonder of the world due to its dramatic landscape."
  },

  {
    id: 3,
    image: queenstownImg,
    title: "Queenstown",
    location: "South Island, New Zealand",
    googleMaps: "https://maps.google.com/?q=Queenstown+New+Zealand",
    description:
      "Known globally as the 'Adventure Capital of the World,' this beautiful resort town is built on the scenic shores of Lake Wakatipu. It is framed by the dramatic, jagged peaks of the Remarkables mountain range, creating a postcard-perfect view. Visitors can experience intense thrills like bungee jumping and skydiving, or relax with a peaceful lakeside cruise."
  },

  {
    id: 4,
    image: mountCookImg,
    title: "Aoraki / Mount Cook National Park",
    location: "South Island, New Zealand",
    googleMaps: "https://maps.google.com/?q=Mount+Cook+National+Park",
    description:
      "Home to New Zealand's highest peak, this magnificent alpine wonderland is covered in towering glaciers and snow-capped mountains. The famous Hooker Valley Track offers relatively easy hiking trails with jaw-dropping views of turquoise glacial lakes and icebergs. At night, it becomes a world-renowned International Dark Sky Reserve, offering some of the clearest stargazing on Earth."
  }
];

export default travelData;