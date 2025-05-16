"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const DEFAULT_LOGO = "/cc-logo3.png"; // 🔁 Replace with your default logo path

const sellers = [
  { name: "HeatStreet", price: "₹12,650", logo: "/heatstreet3.png" },
  { name: "DSWT", price: "₹14,298", logo: "/dswt3.png" },
  { name: "Hypefly", price: "₹14,299", logo: "/hypefly3.png" }, // No logo → default will show
  { name: "Verified Seller", price: "₹14,300" },
  { name: "Find Your Kicks", price: "₹12,650", logo: "/fyk3.png" },
  { name: "Verified Seller", price: "₹14,298" },
  { name: "CrepDogCrew", price: "₹14,299", logo: "/crepdogcrew3.png" },
  { name: "Verified Seller", price: "₹14,300" },
];

export default function SellerList() {
  const [showAll, setShowAll] = useState(false);

  const sellersToShow = showAll ? sellers : sellers.slice(0, 5);

  return (
    <div className="space-y-3 sm:space-y-4">
  <h3 className="text-xs sm:text-sm uppercase tracking-wide text-gray-500">
    Best Deals from Verified Sellers
  </h3>

      {sellersToShow.map((seller, i) => (
        <div
          key={i}
          className="flex justify-between items-center border p-4 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <img
              src={seller.logo || DEFAULT_LOGO}
              alt={`${seller.name} logo`}
              className="w-12 h-10 object-contain"
            />
            <div>
              <p className="font-medium">{seller.name}</p>
              <p className="text-xs text-gray-500">Free | 18–28 days</p>
            </div>
          </div>
          <button className="bg-black text-white text-sm px-4 py-2 rounded-lg">
            {seller.price}
          </button>
        </div>
      ))}

      {/* Toggle Button */}
      {sellers.length > 5 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-1 text-sm font-medium text-black hover:text-blue-600 hover:underline mx-auto"
        >
          {showAll ? (
            <>
              Show Less <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Show All <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      )}
    </div>
  );
}
