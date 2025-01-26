import Link from "next/link";
import Logo from "../Logo";
import Grid from "./Grid";

const Footer = () => {
  return (
    <div className="flex items-center justify-center border-t h-[380px]">
      <Grid>
        <Grid.Item
          size="md"
          className="flex items-center w-full justify-center h-full"
        >
          <Link href="/">
            <Logo className="size-32" />
          </Link>
        </Grid.Item>
      </Grid>
    </div>
  );
};

export default Footer;
