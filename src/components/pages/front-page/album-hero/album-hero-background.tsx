import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect } from "react";
import { useAlbumCarousel } from "@/providers/album-carousel-provider";

const AlbumHeroBackground = ({
  setBackgroundColor,
}: {
  setBackgroundColor: (backgroundColor: string) => void;
}) => {
  const { dispatch, albums, currentAlbum } = useAlbumCarousel();
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "NEXT" });
    }, 10000);

    return () => clearInterval(interval);
  }, [dispatch]);

  useEffect(() => {
    if (!currentAlbum) return;
    setBackgroundColor(currentAlbum.color);
  }, [currentAlbum, setBackgroundColor]);

  return (
    <div className="absolute w-full h-full">
      <div className="relative w-full h-full">
        {albums.map((album) => (
          <Image
            key={album.id}
            src={album.albumImage}
            alt={album.name}
            priority={album.id === currentAlbum?.id}
            fill
            className={cn(
              "absolute w-full h-full transition-opacity duration-300 aspect-video",
              album.id === currentAlbum?.id ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumHeroBackground;
