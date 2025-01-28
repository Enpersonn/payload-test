import { cn } from "@/lib/utils";
import type { Album } from "@/types/album.type";
import Image from "next/image";
import SongsList from "@/components/songs-list";
import ToggleAlbum from "./toggle-album";
import AlbumHeroBackground from "./album-hero-background";

const AlbumHero = ({
  nextAlbum,
  prevAlbum,
  currentAlbum,
  albums,
  handleAlbumChange,
}: {
  albumIndex: number;
  nextAlbum: Album;
  prevAlbum: Album;
  currentAlbum: Album;
  albums: Album[];
  handleAlbumChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <div className="relative flex aspect-video items-center justify-center overflow-hidden w-full">
      <ToggleAlbum handleAlbumChange={handleAlbumChange} />
      <div className="absolute z-10 flex w-full h-full items-center justify-center gap-4">
        {albums.map((album) => {
          const id = album.id;
          const curId = currentAlbum.id;
          const prevId = prevAlbum.id;
          const nextId = nextAlbum.id;
          return (
            <div
              key={id}
              className="absolute w-1/2 h-full flex items-center justify-center gap-8"
            >
              <div
                className={cn(
                  "absolute z-20 aspect-square transition-all duration-500",
                  id === prevId && "translate-y-[5vh] -translate-x-[35vw]",
                  id === nextId && "translate-y-[5vh] translate-x-[35vw]",
                  id === curId && "opacity-100 scale-150 static",
                  id !== curId && "opacity-0 scale-0"
                )}
              >
                <div className=" bg-background rounded-lg border size-24 ">
                  <Image
                    src={album.albumCover}
                    alt={album.name}
                    fill
                    className="w-full h-full p-1"
                  />
                </div>
              </div>
              <div
                className={cn(
                  "relative z-30 w-full",
                  id === curId ? "block" : "hidden"
                )}
              >
                <SongsList album={album} />
              </div>
            </div>
          );
        })}
      </div>
      <AlbumHeroBackground currentAlbum={currentAlbum} albums={albums} />
    </div>
  );
};

export default AlbumHero;
