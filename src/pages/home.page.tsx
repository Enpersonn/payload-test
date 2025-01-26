"use client";
import Grid from "@/app/components/layout/Grid";
import { cn } from "@/lib/utils";
import { useEffect, useReducer, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const ALBUMES = [
  {
    id: 1,
    position: 0,
    name: "Album 1",
    albumImage: "/img/albums/album-1.jpg",
    albumCover: "/logo/M_Logo.svg",
    color: "#2c6646",
    songs: ["song1", "song2", "song3", "song4"],
  },
  {
    id: 2,
    position: 1,
    name: "Album 2",
    albumImage: "/img/albums/album-2.jpg",
    albumCover: "/logo/M_Logo.svg",
    color: "#39394b",
    songs: ["song1", "song2", "song3", "song4"],
  },
  {
    id: 3,
    position: 2,
    name: "Album 3",
    albumImage: "/img/albums/album-3.jpg",
    albumCover: "/logo/M_Logo.svg",
    color: "#7a7a7c",
    songs: ["song1", "song2", "song3", "song4"],
  },
  {
    id: 4,
    position: 3,
    name: "Album 4",
    albumImage: "/img/albums/album-4.jpg",
    albumCover: "/logo/M_Logo.svg",
    color: "#227fa3",
    songs: ["song1", "song2", "song3", "song4"],
  },
];

const albumReducer = (state: number, action: { type: string }) => {
  switch (action.type) {
    case "NEXT":
      return (state + 1) % ALBUMES.length;
    case "PREV":
      return (state - 1 + ALBUMES.length) % ALBUMES.length;
    default:
      return state;
  }
};
export default function HomePage() {
  const [albumIndex, dispatch] = useReducer(albumReducer, 0);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const currentAlbum = ALBUMES[albumIndex];
  const prevAlbum = ALBUMES[(albumIndex + 1) % ALBUMES.length] || ALBUMES[0];
  const nextAlbum =
    ALBUMES[(albumIndex - 1 + ALBUMES.length) % ALBUMES.length] ||
    ALBUMES[ALBUMES.length - 1];

  const handleAlbumChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const direction = e.currentTarget.value;
    if (direction === "left") {
      dispatch({ type: "PREV" });
    } else {
      dispatch({ type: "NEXT" });
    }
  };

  useEffect(() => {
    if (backgroundRef.current) {
      backgroundRef.current.style.backgroundColor = currentAlbum.color;
    }
  }, [currentAlbum.color]);

  return (
    <div
      ref={backgroundRef}
      className={cn(
        `bg-[${currentAlbum.color}]`,
        "transition-colors duration-500 w-full "
      )}
    >
      <Grid>
        <Grid.Item size="md" className=" w-full ">
          <div className="relative flex items-center justify-center py-10 aspect-video overflow-hidden w-full">
            <div className="absolute z-20 inset-0 flex justify-between">
              <button
                className=" my-auto flex items-center justify-center bg-background/50 rounded-full"
                type="button"
                value="left"
                onClick={handleAlbumChange}
              >
                <ChevronLeft className="size-10" />
              </button>
              <button
                className=" my-auto flex items-center justify-center bg-background/50 rounded-full"
                type="button"
                value="right"
                onClick={handleAlbumChange}
              >
                <ChevronRight className="size-10" />
              </button>
            </div>
            <div className="absolute z-10 flex items-center justify-center gap-4">
              {ALBUMES.map((album) => (
                <div
                  key={album.id}
                  className={cn(
                    " absolute aspect-square transition-all duration-500",
                    album.id === prevAlbum.id &&
                      "translate-y-[10vh] -translate-x-[35vw]",
                    album.id === nextAlbum.id &&
                      "translate-y-[10vh] translate-x-[35vw]",
                    album.id === currentAlbum.id && "opacity-100 scale-150",
                    album.id !== currentAlbum.id && "opacity-0 scale-50"
                  )}
                >
                  <div className="relative bg-background rounded-lg border size-24 ">
                    <Image
                      src={album.albumCover}
                      alt={album.name}
                      fill
                      className="w-full h-full p-2"
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* TODO: add songs list that will show each song slide in when album is shown it is to the right of the album cover */}
            <div className="absolute w-full h-full">
              <div className="relative w-full h-full">
                {ALBUMES.map((album) => (
                  <Image
                    key={album.id}
                    src={album.albumImage}
                    alt={album.name}
                    fill
                    className={cn(
                      "absolute w-full h-full  bg-destructive transition-opacity duration-300 aspect-video",
                      album.id === currentAlbum.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </Grid.Item>
      </Grid>
    </div>
  );
}
