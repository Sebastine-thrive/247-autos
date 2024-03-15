import React, { ReactNode } from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import PageAnimationWrapper from "./pageAnimation/PageAnimation";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="main-container max-w-[1920px] w-[100vw] m-0">
      <header className="m-0">
        <Navbar />
      </header>
      <PageAnimationWrapper>
        <main className="main-container">{children}</main>
      </PageAnimationWrapper>

      <footer className="mt-auto mb-0 ">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
