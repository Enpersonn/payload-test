import Link from "next/link";
import Logo from "../Logo";
import Grid from "./Grid";

const Menu = () => {
  return (
    <div className="border-b h-[80px] z-50 sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Grid>
        <Grid.Item size="md" className="flex items-center justify-center">
          <Link href="/">
            <Logo />
          </Link>
        </Grid.Item>
      </Grid>
    </div>
  );
};

export default Menu;
