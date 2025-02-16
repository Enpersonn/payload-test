import ToggleAlbum from "./toggle-album";
import AlbumHeroBackground from "./album-hero-background";
import AlbumDetails from "./album-details";
import AlbumCarouselProvider from "@/providers/album-carousel-provider";
import AlbumSelect from "./album-select";

const AlbumHero = ({
  setBackgroundColor,
}: {
  setBackgroundColor: (backgroundColor: string) => void;
}) => {
  return (
    <AlbumCarouselProvider>
      <div className="relative flex aspect-video items-center justify-center overflow-hidden w-full">
        <ToggleAlbum />
        <AlbumDetails />
        <AlbumSelect />
        <AlbumHeroBackground setBackgroundColor={setBackgroundColor} />
      </div>
    </AlbumCarouselProvider>
  );
};

export default AlbumHero;
