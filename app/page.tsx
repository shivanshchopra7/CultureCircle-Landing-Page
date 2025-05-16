"use client";

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
  return (
    <div className="container mx-auto px-4 sm:px-6 sm:py-8">
      <div className="flex flex-col lg:flex-row lg:gap-10">
        {/* Left side: Image Carousel (always at top on mobile) */}
        <div className="w-full lg:w-1/2 md:sticky top-20 h-fit">
          <ImageCarousel />

          {/* Mobile only: Product Title + Authenticity options */}
          <div className="mt-4 block lg:hidden space-y-4">
            <ProductTitle name="Air Jordan 1 Retro High OG Volt Gold" />
            {/* Add authenticity options here if you have a component */}
            {/* <AuthenticityOptions /> */}
          </div>
        </div>

        {/* Right side: Product info, always visible on desktop */}
        <div className="w-full lg:w-1/2 space-y-6 mt-6 lg:mt-0">
          {/* Desktop only: Product Title + Authenticity */}
          <div className="hidden lg:block space-y-4">
            <ProductTitle name="Air Jordan 1 Retro High OG Volt Gold" />
            {/* <AuthenticityOptions /> */}
          </div>

          <SizeSelector />
          <BuyButton />
          <SellerList />
          <SizeChart />
          <InfoAccordion />
          <PromotionalSection />
        </div>
      </div>

      <TrendingSection />
    </div>
  );
}
