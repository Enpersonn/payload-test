import Image from "next/image";
import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/logo/M_Logo.svg"
      alt="Logo"
      className={cn("size-10", className)}
      width={40}
      height={40}
    />
  );
};

export default Logo;
