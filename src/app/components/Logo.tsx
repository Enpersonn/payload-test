import Image from "next/image";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const Logo = ({ className }: { className?: string }) => {
  const theme = useTheme();

  const logo =
    theme.resolvedTheme === "dark"
      ? "/logo/M_Logo_Dark.svg"
      : "/logo/M_Logo_Light.svg";

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
