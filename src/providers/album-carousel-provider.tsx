import { ALBUMES } from "@/lib/Album.demo";
import type { Album } from "@/types/album.type";
import { createContext, useContext, useReducer } from "react";

export type AlbumAction = {
  type: "NEXT" | "PREV" | "SET";
  payload?: number;
};

const albumReducer = (state: number, action: AlbumAction) => {
  switch (action.type) {
    case "NEXT":
      return (state + 1) % ALBUMES.length;
    case "PREV":
      return (state - 1 + ALBUMES.length) % ALBUMES.length;
    case "SET":
      return action.payload ?? state;
    default:
      return state;
  }
};

const AlbumCarouselContext = createContext<{
  currentAlbum: Album | null;
  prevAlbum: Album | null;
  nextAlbum: Album | null;
  dispatch: (action: AlbumAction) => void;
  albums: Album[];
  albumIndex: number;
}>({
  currentAlbum: null,
  prevAlbum: null,
  nextAlbum: null,
  dispatch: () => {},
  albums: [],
  albumIndex: 0,
});

const AlbumCarouselProvider = ({ children }: { children: React.ReactNode }) => {
  const [albumIndex, dispatch] = useReducer(albumReducer, 0);

  const currentAlbum = ALBUMES[albumIndex];
  const prevAlbum = ALBUMES[(albumIndex - 1 + ALBUMES.length) % ALBUMES.length];
  const nextAlbum = ALBUMES[(albumIndex + 1) % ALBUMES.length];

  const context = {
    currentAlbum,
    prevAlbum,
    nextAlbum,
    dispatch,
    albums: ALBUMES,
    albumIndex,
  };

  return (
    <AlbumCarouselContext.Provider value={context}>
      {children}
    </AlbumCarouselContext.Provider>
  );
};

export const useAlbumCarousel = () => {
  const context = useContext(AlbumCarouselContext);
  if (!context) {
    throw new Error(
      "useAlbumCarousel must be used within a AlbumCarouselProvider"
    );
  }
  return context;
};

export default AlbumCarouselProvider;
