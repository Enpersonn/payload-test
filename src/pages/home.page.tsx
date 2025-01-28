"use client";
import Grid from "@/components/layout/Grid";
import { cn } from "@/lib/utils";
import { useEffect, useReducer, useRef } from "react";
import { ALBUMES } from "@/lib/Album.demo";
import { AlbumHero } from "@/components/pages/front-page/album-hero";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

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
      <Grid className="mt-10">
        <Grid.Item size="lg">
          <AlbumHero
            albumIndex={albumIndex}
            nextAlbum={nextAlbum}
            prevAlbum={prevAlbum}
            currentAlbum={currentAlbum}
            albums={ALBUMES}
            handleAlbumChange={handleAlbumChange}
          />
        </Grid.Item>
        <Grid.Item size="md" className="flex items-center justify-center gap-4">
          <Twitter className="hover:fill-muted-foreground" />
          <Youtube className="hover:fill-muted-foreground" />
          <Instagram className="hover:fill-muted-foreground" />
          <Facebook className="hover:fill-muted-foreground" />
        </Grid.Item>
        <Grid.Item size="md">
          <div className="text-center">
            <h2>Tour Dates</h2>
          </div>
        </Grid.Item>
        <Grid.Item size="md" className="text-center gap-4 ">
          <h2>Subscribe</h2>
          <form className="flex flex-col items-center justify-center gap-4 mt-10">
            <input
              type="email"
              placeholder="Email"
              className=" p-2 bg-transparent w-full border-2 border-muted-foreground rounded-sm text-foreground"
            />
            <button
              type="submit"
              className="bg-foreground hover:bg-foreground/95 focus:border-2 focus:border-foreground text-background px-2 py-3 rounded-sm w-full"
            >
              Subscribe
            </button>
          </form>
        </Grid.Item>
      </Grid>
    </div>
  );
}
