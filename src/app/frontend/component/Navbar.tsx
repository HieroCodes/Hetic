'use client';

import React from 'react';
import Link from 'next/link'; 
type NavbarProps = {
  style?: React.CSSProperties;
};

export default function Navbar({ style }: NavbarProps) {
  return (
    <nav className="navbar_home" style={style}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <Link href="frontend/wifi_NYC">Data NYC</Link>
        </li>
        <li>
          <a href="">Stats</a>
        </li>
      </ul>
    </nav>
  );
}
