"use client";
import Grid from "@/app/components/layout/Grid";
import { cn } from "@/lib/utils";
import { useEffect, useReducer, useRef } from "react";
import { ALBUMES } from "@/lib/Album.demo";
import { AlbumHero } from "@/app/components/pages/front-page/album-hero";

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
        <Grid.Item size="md" className=" w-full  ">
          <AlbumHero
            albumIndex={albumIndex}
            nextAlbum={nextAlbum}
            prevAlbum={prevAlbum}
            currentAlbum={currentAlbum}
            albums={ALBUMES}
            handleAlbumChange={handleAlbumChange}
          />
        </Grid.Item>
      </Grid>
    </div>
  );
}
