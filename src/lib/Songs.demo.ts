import type { Song } from "@/types/album.type";
import { ARTISTS } from "./Artis.demo";
export const SONGS: Song[] = [
  {
    id: 1,
    position: 1,
    name: "Evergreen",
    artist: ARTISTS.find((artist) => artist.id === 1),
    album: 1,
    duration: "3:45",
  },
  {
    id: 2,
    position: 2,
    name: "Forest Whisper",
    artist: ARTISTS.find((artist) => artist.id === 1),
    album: 1,
    duration: "4:12",
  },
  {
    id: 3,
    position: 3,
    name: "Nature's Embrace",
    artist: ARTISTS.find((artist) => artist.id === 1),
    album: 1,
    duration: "3:58",
  },
  {
    id: 4,
    position: 4,
    name: "Earth's Melody",
    artist: ARTISTS.find((artist) => artist.id === 1),
    album: 1,
    duration: "4:05",
  },
  {
    id: 5,
    position: 5,
    name: "Green Horizon",
    artist: ARTISTS.find((artist) => artist.id === 1),
    album: 1,
    duration: "3:50",
  },
  {
    id: 1,
    position: 1,
    name: "Eclipse",
    artist: ARTISTS.find((artist) => artist.id === 1),
    album: 2,
    duration: "4:20",
  },
  {
    id: 2,
    position: 2,
    name: "Shadow",
    artist: ARTISTS.find((artist) => artist.id === 1),
    album: 2,
    duration: "3:55",
  },
  {
    id: 3,
    position: 3,
    name: "Oblivion",
    artist: ARTISTS.find((artist) => artist.id === 1),
    album: 2,
    duration: "4:10",
  },
  {
    id: 4,
    position: 4,
    name: "Phantom",
    artist: ARTISTS.find((artist) => artist.id === 1),
    album: 2,
    duration: "3:45",
  },
  {
    id: 5,
    position: 5,
    name: "Nebula",
    artist: ARTISTS.find((artist) => artist.id === 1),
    album: 2,
    duration: "4:00",
  },
  {
    id: 1,
    position: 1,
    name: "Country Roads",
    artist: ARTISTS.find((artist) => artist.id === 1),
    album: 3,
    duration: "3:30",
  },
  {
    id: 2,
    position: 2,
    name: "Electric Rodeo",
    artist: ARTISTS.find((artist) => artist.id === 1),
    album: 3,
    duration: "4:00",
  },
  {
    id: 3,
    position: 3,
    name: "Neon Prairie",
    artist: ARTISTS.find((artist) => artist.id === 1),
    album: 3,
    duration: "3:45",
  },
  {
    id: 4,
    position: 4,
    name: "Digital Hoedown",
    feat: ["DJ Rancher"],
    artist: ARTISTS.find((artist) => artist.id === 1),
    album: 3,
    duration: "4:15",
  },
  {
    id: 5,
    position: 5,
    name: "Cyber Saddle",
    artist: ARTISTS.find((artist) => artist.id === 1),
    album: 3,
    duration: "3:50",
  },
  {
    id: 1,
    position: 1,
    name: "Ominous Beginnings",
    artist: ARTISTS.find((artist) => artist.id === 1),
    album: 4,
    duration: "4:20",
  },
  {
    id: 2,
    position: 2,
    name: "Rising Chaos",
    artist: ARTISTS.find((artist) => artist.id === 1),
    album: 4,
    duration: "3:55",
  },
  {
    id: 3,
    position: 3,
    name: "Descent into Madness",
    artist: ARTISTS.find((artist) => artist.id === 1),
    album: 4,
    duration: "4:10",
  },
  {
    id: 4,
    position: 4,
    name: "The Collapse",
    artist: ARTISTS.find((artist) => artist.id === 1),
    album: 4,
    duration: "4:05",
  },
  {
    id: 5,
    position: 5,
    name: "Armageddon",
    artist: ARTISTS.find((artist) => artist.id === 1),
    album: 4,
    duration: "4:30",
  },
];
