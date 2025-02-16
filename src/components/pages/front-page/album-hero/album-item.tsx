import { cn } from "@/lib/utils";
import type { Album } from "@/types/album.type";
import Image from "next/image";
import SongsList from "@/components/songs-list";
import { useAlbumCarousel } from "@/providers/album-carousel-provider";

const AlbumItem = ({ album }: { album: Album }) => {
  const { nextAlbum, prevAlbum, currentAlbum } = useAlbumCarousel();
  const id = album.id;
  const curId = currentAlbum?.id;
  const prevId = prevAlbum?.id;
  const nextId = nextAlbum?.id;
  return (
    <div className="absolute w-1/2 h-full flex items-center justify-center gap-10">
      <div
        className={cn(
          "absolute z-20 aspect-square transition-all duration-500",
          id === curId
            ? "opacity-100 scale-150 static"
            : "opacity-0 scale-0 translate-y-[5vh] -translate-x-[35vw]",
          id === prevId && "translate-y-[5vh] -translate-x-[35vw]",
          id === nextId && "translate-y-[5vh] translate-x-[35vw]"
        )}
      >
        <div className=" bg-background border size-24 ">
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
};

export default AlbumItem;
