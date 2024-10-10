import React from "react";
import { Header } from "../tiles/header";
import Footer from "../tiles/footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
export default Layout;
