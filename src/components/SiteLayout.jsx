import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

function SiteLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}

export default SiteLayout;
