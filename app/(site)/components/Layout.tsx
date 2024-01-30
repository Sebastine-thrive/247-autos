import React, { ReactNode } from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="main-container max-w-[1920px] w-[100vw] m-0">
      <header className="m-0">
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer className="mt-auto mb-0 ">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
