import { cn } from "@/lib/utils";
import type { Album, Song } from "@/types/album.type";

const SongsList = ({ album }: { album: Album }) => {
  return (
    <div>
      {album.songs?.map((song, index) => (
        <SongItem key={song.id} song={song} index={index} />
      ))}
    </div>
  );
};

const SongItem = ({ song, index }: { song: Song; index: number }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 py-2 bg-background/40 border-b border-foreground animate-fade-in",
        {
          "animate-fade-in": index === 0,
        }
      )}
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div>{song.name}</div>
      <div>{song.duration}</div>
    </div>
  );
};

export default SongsList;
