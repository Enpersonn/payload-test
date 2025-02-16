"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useMemo } from "react";

const Logo = ({ className }: { className?: string }) => {
  const { resolvedTheme } = useTheme();

  const logo = useMemo(() => {
    return resolvedTheme === "dark"
      ? "/logo/M_Logo_Dark.svg"
      : "/logo/M_Logo_Light.svg";
  }, [resolvedTheme]);

  return (
    <Image
      src={logo}
      alt="Logo"
      className={cn("size-10", className)}
      width={40}
      height={40}
    />
  );
};

export default Logo;
