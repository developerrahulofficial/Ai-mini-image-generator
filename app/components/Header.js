"use client";
import React from 'react';
import Link from 'next/link';
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Developer Rahul",
    designation: "Full stack developer",
    image:
      "/images/rahul.jpg",
  },
  {
    id: 2,
    name: "Vanshikaa",
    designation: "Made for You",
    image:
      "/images/vanshika.png",
  },
];


const Header = () => (
  <header className="header">
    <div className="logo">
      <img src="/images/love.png" alt="Cretor Logo" />
    </div>
    <nav className="nav">
      <Link href="/">Home</Link>
      <Link href="/generator">Generator</Link>
      <Link href="/about">About us</Link>
      <Link href="/features">Features</Link>
    </nav>
    <div className="user-avatar">
    <div className="flex flex-row items-center justify-center mt-5 w-full">
    <AnimatedTooltip items={people} />
    </div>
    </div>
  </header>
);

export default Header;
