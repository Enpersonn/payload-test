import { ALBUMES } from "@/lib/Album.demo";
import { cn } from "@/lib/utils";
import { useAlbumCarousel } from "@/providers/album-carousel-provider";

const AlbumSelect = () => {
  const { dispatch, currentAlbum } = useAlbumCarousel();
  if (!currentAlbum) return null;
  return (
    <div className="absolute z-30 flex flex-row-reverse h-full items-end py-4 justify-center gap-2">
      {ALBUMES.map((album, i) => {
        return (
          <button
            key={album.id}
            className={cn(
              currentAlbum.id === album.id ? "bg-muted" : "bg-foreground/30",
              "w-full h-full size-4 border border-muted/50 rounded-full"
            )}
            type="button"
            onClick={() => dispatch({ type: "SET", payload: i })}
          />
        );
      })}
    </div>
  );
};

export default AlbumSelect;
