import { cn } from "@/lib/utils";
import type { Album } from "@/types/album.type";
import Image from "next/image";

const AlbumHeroBackground = ({
  currentAlbum,
  albums,
}: {
  currentAlbum: Album;
  albums: Album[];
}) => {
  return (
    <div className="absolute w-full h-full">
      <div className="relative w-full h-full">
        {albums.map((album) => (
          <Image
            key={album.id}
            src={album.albumImage}
            alt={album.name}
            priority={album.id === currentAlbum.id}
            fill
            className={cn(
              "absolute w-full h-full transition-opacity duration-300 aspect-video",
              album.id === currentAlbum.id ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumHeroBackground;
