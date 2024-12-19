"use client";

import React, { useEffect } from "react";
import Navbar from "./Navbar";

type NavbarProps = {
    style?: React.CSSProperties;
  };

  
export default function NavbarWrapper({ style }: NavbarProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");
    import("jquery");
    import("popper.js");
  }, []);

  return <Navbar />;
}
