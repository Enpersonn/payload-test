import type { Album } from "@/types/album.type";
import { SONGS } from "./Songs.demo";

export const ALBUMES: Album[] = [
  {
    id: 1,
    position: 0,
    name: "GAIA",
    albumImage: "/img/albums/album-1.jpg",
    albumCover: "/logo/M_Logo_Dark.svg",
    color: "#616a69",
    songs: SONGS.filter((song) => song.album === 1),
  },
  {
    id: 2,
    position: 1,
    name: "M",
    albumImage: "/img/albums/album-2.jpg",
    albumCover: "/logo/M_Logo_Dark.svg",
    color: "#2c2a28",
    songs: SONGS.filter((song) => song.album === 2),
  },
  {
    id: 3,
    position: 2,
    name: "Harmonica",
    albumImage: "/img/albums/album-3.jpg",
    albumCover: "/logo/M_Logo_Dark.svg",
    color: "#393a3d",
    songs: SONGS.filter((song) => song.album === 3),
  },
  {
    id: 4,
    position: 3,
    name: "The Last of Us",
    albumImage: "/img/albums/album-4.jpg",
    albumCover: "/logo/M_Logo_Dark.svg",
    color: "#394e5b",
    songs: SONGS.filter((song) => song.album === 4),
  },
];
