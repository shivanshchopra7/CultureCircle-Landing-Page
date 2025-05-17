"use client";

import { useEffect, useState } from "react";
import ImageCarousel from "./components/ImageCarousel";
import ProductTitle from "./components/Product";
import SizeSelector from "./components/SizeSelector";
import BuyButton from "./components/CTA";
import SellerList from "./components/SellerList";
import SizeChart from "./components/SizeChart";
import InfoAccordion from "./components/InfoAccordion";
import TrendingSection from "./components/TrendingSection";
import PromotionalSection from "./components/PromotionalSection";

export default function ProductPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 sm:py-8">
      <div className="flex flex-col lg:flex-row lg:gap-10">
        {/* Left side: Image Carousel */}
        <div className="w-full lg:w-1/2 md:sticky top-20 h-fit">
          {isLoading ? (
            <div className="w-full h-[400px] bg-gray-200 animate-pulse rounded-md" />
          ) : (
            <ImageCarousel />
          )}

          {/* Mobile only: Product Title */}
          <div className="mt-4 block lg:hidden space-y-4">
            {isLoading ? (
              <div className="h-6 w-3/4 bg-gray-200 animate-pulse rounded" />
            ) : (
              <ProductTitle name="Air Jordan 1 Retro High OG Volt Gold" />
            )}
          </div>
        </div>

        {/* Right side */}
        <div className="w-full lg:w-1/2 space-y-6 mt-6 lg:mt-0">
          <div className="hidden lg:block space-y-4">
            {isLoading ? (
              <div className="h-6 w-1/2 bg-gray-200 animate-pulse rounded" />
            ) : (
              <ProductTitle name="Air Jordan 1 Retro High OG Volt Gold" />
            )}
          </div>

          {isLoading ? (
            <>
              <div className="h-10 bg-gray-200 animate-pulse rounded" />
              <div className="h-12 bg-gray-200 animate-pulse rounded" />
              <div className="h-32 bg-gray-200 animate-pulse rounded" />
              <div className="h-12 bg-gray-200 animate-pulse rounded" />
              <div className="h-24 bg-gray-200 animate-pulse rounded" />
            </>
          ) : (
            <>
              <SizeSelector />
              <BuyButton />
              <SellerList />
              <SizeChart />
              <InfoAccordion />
              <PromotionalSection />
            </>
          )}
        </div>
      </div>

      <div className="mt-10">
        {isLoading ? (
          <div className="h-48 bg-gray-200 animate-pulse rounded" />
        ) : (
          <TrendingSection />
        )}
      </div>
    </div>
  );
}
