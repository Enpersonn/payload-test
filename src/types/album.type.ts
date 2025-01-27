export type Album = {
  id: number;
  position: number;
  name: string;
  albumImage: string;
  albumCover: string;
  color: string;
  songs?: Song[];
};

export type Song = {
  id: number;
  position: number;
  name: string;
  feat?: string[];
  artist?: Artist;
  album: number;
  duration: string;
};

export type Artist = {
  id: number;
  name: string;
  image: string;
};
