"use client";
import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const sizes = [
  { label: "UK2.5", price: "₹9,656" },
  { label: "UK3", price: "₹14,759" },
  { label: "UK3.5", price: "₹14,639" },
  { label: "UK4", price: "₹10,729" },
  { label: "UK4.5", price: "₹13,729" },
  { label: "UK5", price: "₹12,298" },
  { label: "UK5.5", price: "₹21,679" },
  { label: "UK6", price: "₹15,329" },
  { label: "UK6.5", price: "₹16,069" },
  { label: "UK7", price: "₹12,098" },
  { label: "UK7.5", price: "₹13,310" },
];

function parsePrice(priceStr: string): number {
  return Number(priceStr.replace(/[₹,]/g, ""));
}

export default function SizeSelector() {
  const [selectedSize, setSelectedSize] = useState("UK5");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("common");

  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const selectedIndex = sizes.findIndex((size) => size.label === selectedSize);
    const selectedItem = itemRefs.current[selectedIndex];

    if (container && selectedItem) {
      const containerWidth = container.offsetWidth;
      const itemLeft = selectedItem.offsetLeft;
      const itemWidth = selectedItem.offsetWidth;

      const scrollTo = itemLeft - containerWidth / 2 + itemWidth / 2;

      container.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  }, [selectedSize]);

  const handleClick = (size: { label: string; price: string }) => {
    setSelectedSize(size.label);
    setIsMobileOpen(false);
  };

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  const getFilteredSizes = () => {
    if (activeTab === "lowest") {
      return [...sizes].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    }
    return sizes;
  };

  return (
    <>
      {/* Desktop view */}
      <div className="relative hidden sm:block">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 shadow-md"
          onClick={scrollLeft}
        >
          <FaChevronLeft className="text-gray-700" />
        </button>

        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar mx-4 px-4 py-2"
        >
          {sizes.map((size, index) => (
            <div
              key={size.label}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={`flex flex-col items-center min-w-[60px] cursor-pointer ${
                selectedSize === size.label ? "text-black font-bold" : "text-gray-400"
              }`}
              onClick={() => handleClick(size)}
            >
              <div className="text-sm">{size.label}</div>
              <div className="text-xs">{size.price}</div>
            </div>
          ))}
        </div>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 shadow-md"
          onClick={scrollRight}
        >
          <FaChevronRight className="text-gray-700" />
        </button>
      </div>

      {/* Mobile view */}
      <div className="sm:hidden relative">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full border rounded-md p-3 text-left font-semibold text-gray-800 bg-white shadow flex justify-between items-center"
        >
          <span>
            Select Size: <span className="text-black font-bold">{selectedSize}</span>
          </span>
          {isMobileOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        {isMobileOpen && (
          <div className="absolute w-full mt-2 bg-white my-1 border rounded-lg shadow-lg z-30">
            {/* Tabs */}
            <div className="flex justify-around px-2 border-b">
              <button
                className={`py-2 text-sm font-medium flex-1 ${
                  activeTab === "common"
                    ? "text-gray-700 border-b-2 border-black"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("common")}
              >
                Most common size
              </button>
              <button
                className={`py-2 text-sm font-medium flex-1 ${
                  activeTab === "lowest"
                    ? "text-gray-700 border-b-2 border-black"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("lowest")}
              >
                Lowest price
              </button>
              <button
                className={`py-2 text-sm font-medium flex-1 ${
                  activeTab === "competitive"
                    ? "text-gray-700 border-b-2 border-black"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("competitive")}
              >
                Competitive
              </button>
            </div>

            {/* Size list */}
            <div className="max-h-fit overflow-y-auto">
              {getFilteredSizes().map((size) => (
                <div
                  key={size.label}
                  onClick={() => handleClick(size)}
                  className={`flex justify-between items-center px-5 py-4 border-b cursor-pointer ${
                    selectedSize === size.label
                      ? "bg-gray-100 font-semibold"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <span>{size.label}</span>
                  <span className="text-sm text-gray-600">{size.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
