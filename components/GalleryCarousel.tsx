"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  {
    src: "https://framerusercontent.com/images/QTrnJq2vH1Gbq8hfrybm1QB6YQ.jpg",
    alt: "Engage 2024 - photo 1",
  },
  {
    src: "https://framerusercontent.com/images/9FVHHayzqQCw21pzGGCrFRo81Q.jpg",
    alt: "Engage 2024 - photo 2",
  },
  {
    src: "https://framerusercontent.com/images/F4xQXOl4WdjaGOJeMqbszlrEA.jpg",
    alt: "Engage 2024 - photo 3",
  },
  {
    src: "https://framerusercontent.com/images/jRugzAwpbuaHqTcd11pY7HEg.jpg",
    alt: "Engage 2024 - photo 4",
  },
  {
    src: "https://framerusercontent.com/images/vPVOilCdGcTEmjmHFfGzcFH7A.jpg",
    alt: "Engage 2024 - photo 5",
  },
];

export default function GalleryCarousel() {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  return (
    <section className="w-full bg-black py-10 px-6 relative">
      <div className="max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg relative aspect-[16/9]">
        <Image
          src={images[index].src}
          alt={images[index].alt}
          fill
          className="object-cover transition-opacity duration-300"
          priority
        />
      </div>

      <div className="flex justify-between mt-6 max-w-4xl mx-auto px-4">
        <button onClick={prev} className="text-white px-4 py-2 bg-gray-800 rounded-full">
          ←
        </button>
        <button onClick={next} className="text-white px-4 py-2 bg-gray-800 rounded-full">
          →
        </button>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
