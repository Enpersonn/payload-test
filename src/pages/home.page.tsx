"use client";
import Grid from "@/components/layout/Grid";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { AlbumHero } from "@/components/pages/front-page/album-hero";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function HomePage() {
  const [backgroundColor, setBackgroundColor] = useState<string>("");
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (backgroundRef.current) {
      backgroundRef.current.style.backgroundColor = backgroundColor;
    }
  }, [backgroundColor]);

  return (
    <div
      ref={backgroundRef}
      className={cn(
        `bg-gradient-to-t from-background to-[${backgroundColor}]`,
        "transition-colors duration-500 w-full "
      )}
    >
      <Grid className="mt-10">
        <Grid.Item size="lg">
          <AlbumHero setBackgroundColor={setBackgroundColor} />
        </Grid.Item>
        <Grid.Item size="md" className="flex items-center justify-center gap-4">
          <Twitter className="hover:text-muted-foreground text-foreground" />
          <Youtube className="hover:text-muted-foreground text-foreground" />
          <Instagram className="hover:text-muted-foreground text-foreground" />
          <Facebook className="hover:text-muted-foreground text-foreground" />
        </Grid.Item>
        <Grid.Item size="md" className=" mt-20">
          <div className="text-center">
            <h2>Tour Dates</h2>
          </div>
        </Grid.Item>
        <Grid.Item size="md" className="text-center gap-4 mt-20">
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
