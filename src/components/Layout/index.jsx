import React from "react";
import { Header } from "./Header";
import Footer from "../footer";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
