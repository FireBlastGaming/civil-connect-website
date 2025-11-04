import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import useSmoothScrollToTop from "@/hooks/use-scroll-to-top";

const Layout = () => {
  useSmoothScrollToTop();
  
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
