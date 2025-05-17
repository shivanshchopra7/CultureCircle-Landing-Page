"use client";
import { useState, useRef } from "react";
import { Heart, Bell, Share2 } from "lucide-react";

const images = [
  "/cover.png",
  "/shoes2.png",
  "/shoes3.png",
  "/shoes4.png",
  "/shoes5.png",
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipeGesture();
  };

  const handleSwipeGesture = () => {
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50; // min swipe distance to trigger

    if (distance > threshold) {
      // Swiped left
      goToNext();
    } else if (distance < -threshold) {
      // Swiped right
      goToPrevious();
    }
  };

  const selectImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-screen-lg mx-auto px-4 py-6">
      {/* Top-right action icons */}
      <div className="absolute top-4 right-4 flex gap-4 z-10">
        <button><Heart className="w-5 h-5" /></button>
        <button><Bell className="w-5 h-5" /></button>
        <button><Share2 className="w-5 h-5" /></button>
      </div>

      {/* Main Image Section with arrows */}
      <div
        className="relative flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button
          className="absolute left-0 text-3xl px-3 py-1 font-bold z-10"
          onClick={goToPrevious}
        >
          &#8249;
        </button>

        <img
          key={images[currentIndex]} // force re-render on change
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="h-[550px] object-contain transition duration-700 ease-in-out opacity-0 scale-95 animate-fadeIn"
        />

        <button
          className="absolute right-0 text-3xl px-3 py-1 font-bold z-10"
          onClick={goToNext}
        >
          &#8250;
        </button>
      </div>

      {/* Dots for pagination */}
      <div className="flex justify-center space-x-2 my-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => selectImage(i)}
            className={`h-2 w-2 rounded-full ${
              currentIndex === i ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Thumbnails */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 sm:gap-6">
        <div className="flex sm:flex-nowrap gap-3 sm:gap-4 overflow-x-auto px-1 no-scrollbar whitespace-nowrap scroll-smooth">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => selectImage(index)}
              className={`w-14 h-14 sm:w-20 sm:h-16 object-cover rounded cursor-pointer border-2 transition-all duration-300 ${
                currentIndex === index ? "border-black scale-105" : "border-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
