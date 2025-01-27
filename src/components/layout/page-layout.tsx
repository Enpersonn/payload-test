import Footer from "./footer";
import Menu from "./meny";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-full min-h-screen">
      <Menu />
      <div className="flex h-full min-h-[calc(100vh-80px)]">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
