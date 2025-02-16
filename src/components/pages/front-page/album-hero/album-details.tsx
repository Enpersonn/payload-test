import { useAlbumCarousel } from "@/providers/album-carousel-provider";
import AlbumItem from "./album-item";
const AlbumDetails = () => {
  const { albums } = useAlbumCarousel();
  return (
    <div className="absolute z-10 flex w-full h-full items-center justify-center gap-4">
      {albums.map((album) => {
        return <AlbumItem key={album.id} album={album} />;
      })}
    </div>
  );
};

export default AlbumDetails;
