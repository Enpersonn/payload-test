import { useAlbumCarousel } from "@/providers/album-carousel-provider";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

const ToggleAlbum = () => {
  const { dispatch } = useAlbumCarousel();
  return (
    <div className="absolute z-20 inset-0 flex  hover:opacity-100 opacity-0 justify-between px-2 transition-opacity duration-300">
      <button
        className=" my-auto flex items-center justify-center bg-background/50 rounded-full"
        type="button"
        value="left"
        onClick={() => dispatch({ type: "NEXT" })}
      >
        <ChevronLeft className="size-10" />
      </button>
      <button
        className=" my-auto flex items-center justify-center bg-background/50 rounded-full"
        type="button"
        value="right"
        onClick={() => dispatch({ type: "PREV" })}
      >
        <ChevronRight className="size-10" />
      </button>
    </div>
  );
};

export default ToggleAlbum;
