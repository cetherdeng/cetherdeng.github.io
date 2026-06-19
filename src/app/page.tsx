"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const ALL_IMAGES = [
  // Film
  "/film/000016600030.jpg",
  "/film/000016610023.jpg",
  "/film/000016610024.jpg",
  "/film/000016610026.jpg",
  "/film/000016610027.jpg",
  "/film/000016610029.jpg",
  "/film/000016610030.jpg",
  "/film/000016610031.jpg",
  "/film/000016610032.jpg",
  "/film/000016610034.jpg",
  "/film/46320027.jpg",
  "/film/46320028.jpg",
  "/film/46320029.jpg",
  "/film/46320030.jpg",
  "/film/46320031.jpg",
  "/film/46320032.jpg",
  "/film/46320033.jpg",
  "/film/46320034.jpg",
  "/film/46320035.jpg",
  "/film/46320036.jpg",
  "/film/46320037.jpg",
  "/film/64340001.jpg",
  "/film/64340003.jpg",
  "/film/64340004.jpg",
  "/film/64340015.jpg",
  "/film/64340022.jpg",
  "/film/64340023.jpg",
  "/film/64370031.jpg",
  // Sports
  "/sports/DSC00972.jpg",
  "/sports/DSC01071.jpg",
  "/sports/DSC01118.jpg",
  "/sports/DSC01119.jpg",
  "/sports/DSC01120.jpg",
  "/sports/DSC01159.jpg",
  "/sports/DSC01187.jpg",
  "/sports/DSC01195.jpg",
  "/sports/DSC01196.jpg",
  "/sports/DSC01269.jpg",
  "/sports/DSC02356.jpg",
  "/sports/DSC02358.jpg",
  "/sports/DSC02491.jpg",
  "/sports/DSC02492.jpg",
  "/sports/DSC02493.jpg",
  "/sports/DSC02525.jpg",
  "/sports/DSC02526.jpg",
  "/sports/DSC02527.jpg",
  "/sports/DSC02528.jpg",
  "/sports/DSC02553.jpg",
  "/sports/DSC02554.jpg",
  "/sports/DSC02555.jpg",
  "/sports/DSC02607.jpg",
  "/sports/DSC02608.jpg",
  "/sports/DSC02673.jpg",
  "/sports/DSC02674.jpg",
  "/sports/DSC02675.jpg",
  "/sports/DSC02676.jpg",
  "/sports/DSC03706.jpg",
  "/sports/DSC03749.jpg",
  "/sports/DSC03832.jpg",
  "/sports/DSC04013.jpg",
  "/sports/DSC04176.jpg",
  "/sports/DSC04274.jpg",
  "/sports/DSC04275.jpg",
  "/sports/DSC04276.jpg",
  "/sports/DSC04382.jpg",
  // Portraits
  "/portraits/73430014.JPG",
  "/portraits/73430019.JPG",
  "/portraits/73430023.JPG",
  "/portraits/DSC09725.jpg",
  "/portraits/DSC09748.jpg",
  "/portraits/DSC09772.jpg",
  "/portraits/DSC09774.jpg",
  "/portraits/DSC09807-2.jpg",
  "/portraits/DSC09814.jpg",
  "/portraits/DSC09820-3.jpg",
  "/portraits/DSC09837.jpg",
  "/portraits/DSC09844.jpg",
  "/portraits/DSC09869-2.jpg",
  "/portraits/DSC09869.jpg",
  "/portraits/DSC09870.jpg",
  "/portraits/DSC09873.jpg",
  "/portraits/DSC09877.jpg",
  "/portraits/DSC09878-2.jpg",
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Home() {
  const [images, setImages] = useState(ALL_IMAGES);

  useEffect(() => {
    setImages(shuffle(ALL_IMAGES));
  }, []);

  return (
    <div className="masonry-grid">
      {images.map((src) => (
        <div key={src} className="masonry-item">
          <Image
            src={src}
            alt=""
            width={800}
            height={600}
            className="w-full h-auto block"
            unoptimized
          />
        </div>
      ))}
    </div>
  );
}
