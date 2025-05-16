import { ChevronDown, Heart, ShoppingBag } from "lucide-react";
import { SearchBar } from "./SearchBar";
import { NavLinks } from "./NavLinks";

export default function DesktopNavbar() {
  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 my-auto">
        {/* Top row: logo + search | right controls */}
        <div className="flex justify-between items-center py-4">
          {/* Left: logo + search */}
          <div className="flex items-center gap-4">
            <img
              src="/culture_logo.jpg"
              alt="Culture Circle"
              className="h-12 w-12 rounded-lg"
            />
            <SearchBar />
          </div>

          {/* Right: country + icons */}
<div className="flex items-center gap-3">
  {/* Country Selector */}
  <button className="flex items-center justify-center gap-1 bg-gray-100 h-12 w-12 rounded-md text-sm font-medium text-gray-900">
    <span className="text-xs">IN</span>
    <ChevronDown className="w-4 h-4" />
  </button>

  {/* Heart Icon */}
  <button className="flex items-center justify-center bg-gray-100 h-12 w-12 px-2 rounded-md">
    <Heart className="w-5 h-5 text-black" />
  </button>

  {/* Shopping Bag Icon */}
  <button className="flex items-center justify-center bg-gray-100 h-12 w-12 px-2 rounded-md">
    <ShoppingBag className="w-5 h-5 text-black" />
  </button>
</div>


        </div>

        {/* Bottom row: nav links | contact links */}
        <div className="flex justify-between items-center pb-4">
          {/* Left nav links */}
          <div className="flex gap-6">
            <NavLinks />
          </div>

          {/* Right contact links */}
         <div className="flex gap-6 text-sm font-medium text-black">
  <a href="#" className="hover:border-b-1 transition duration-200">Contact Us</a>
  <a href="#" className="hover:border-b-1 transition duration-200">FAQ</a>
  <a href="#" className="hover:border-b-1 transition duration-200">Track Order</a>
</div>

        </div>
      </div>
    </div>
  );
}
