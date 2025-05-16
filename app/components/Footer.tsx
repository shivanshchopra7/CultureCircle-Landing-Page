import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 py-10 text-sm">
      {/* === Desktop Layout === */}
      <div className="hidden md:grid max-w-7xl mx-auto grid-cols-4 gap-10">
        {/* Most Viewed */}
        <div>
          <h3 className="text-red-500 font-bold mb-4">MOST VIEWED</h3>
          <ul className="space-y-2">
            {[
              "Under Retail", "Jordan 1", "Jordan 4", "Lows", "Highs", "Crocs",
              "Adidas", "Mids", "Nike", "Yeezy", "Golden Goose", "Alexander McQueen",
              "Dolce & Gabbana", "Prada", "Cactus Jack", "Off White", "Louis Vuitton",
              "Vans", "Dior", "Converse", "Amiri"
            ].map((item) => (
              <li key={item} className="hover:underline cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Know More */}
        <div>
          <h3 className="text-red-500 font-bold mb-4">KNOW MORE</h3>
          <ul className="space-y-2">
            {[
              "About Us", "Cancellations & Returns", "Shipping", "Terms & Conditions",
              "Money Back Guarantee T&C", "Privacy Policy", "For Resellers"
            ].map((item) => (
              <li key={item} className="hover:underline cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-red-500 font-bold mb-4">FOLLOW US</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="https://www.instagram.com/culturecircle_" target="_blank" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.youtube.com/@Culture-Circle" target="_blank" aria-label="YouTube"><FaYoutube /></a>
            <a href="https://www.linkedin.com/company/culture-circle/" target="_blank" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-red-500 font-bold mb-4">CONTACT US</h3>
          <p>Two Horizon Centre, DLF Phase 5, Sector 43, Gurugram, Haryana 122002</p>
          <p className="mt-2">K16/24 DLF Phase 2, Gurugram, Haryana 122002</p>
          <p className="mt-2">Call: <a href="tel:+9192269199835" className="hover:underline">+91 92269199835</a></p>
          <p>Whatsapp: <a href="https://wa.me/919135328316" target="_blank" className="hover:underline">+91 91315328316</a></p>
        </div>
      </div>

      {/* === Mobile Layout === */}
     {/* Mobile View */}
<div className="md:hidden space-y-10 max-w-md mx-auto px-4 text-sm">
<div className="flex justify-center">
    <img src={"/footerlogo.png"} alt="Culture Circle" className="h-20 w-80 rounded-lg" />
</div>
  {/* Grid Buttons */}
  <div className="grid grid-cols-3 gap-2">
    {["What's New", "SALE", "Sneakers", "Apparels", "Brands", "Accessories", "Jewellery", "Curated", "Watches"].map((label) => (
      <button
        key={label}
        className="border border-white py-2 text-center hover:bg-white hover:text-black transition"
      >
        {label}
      </button>
    ))}
  </div>

  {/* Most Viewed & Top 50 */}
  <div className="grid grid-cols-2  gap-4">
    <div>
      <h3 className="text-red-500 font-bold mb-2">MOST VIEWED</h3>
      <ul className="space-y-1">
        {["Under 10,000", "Under 20,000", "Under Retails", "Holy Grails", "Popular Collabs", "High tops", "Low tops", "Mid tops", "Wmns", "Toddlers", "College essentials", "Sneakerhead jewels"].map(item => (
          <li key={item} className="hover:underline cursor-pointer">{item}</li>
        ))}
      </ul>
    </div>
    <div>
      <h3 className="text-red-500 font-bold mb-2">TOP 50</h3>
      <ul className="space-y-1">
        {["Top 50 watches", "Top 50 handbags", "Top 50 hoodies", "Top 50 shirts", "Top 50 pants", "Top 50 cargos", "Top 50 tshirts", "Top 50 coats", "Top 50 blazers", "Top 50 sneakers", "Top 50 skirts", "Top 50 rings"].map(item => (
          <li key={item} className="hover:underline cursor-pointer">{item}</li>
        ))}
      </ul>
    </div>
  </div>

  {/* Know More & Contact */}
  <div className="grid grid-cols-2 gap-4">
    <div>
      <h3 className="text-red-500 font-bold mb-2">KNOW MORE</h3>
      <ul className="space-y-1">
        {["About us", "Cancellations & Returns", "Shipping", "Terms & Conditions", "Money Back Guarantee T&C", "Privacy Policy", "For resellers"].map(item => (
          <li key={item} className="hover:underline cursor-pointer">{item}</li>
        ))}
      </ul>
    </div>
    <div>
      <h3 className="text-red-500 font-bold mb-2">CONTACT US</h3>
      <p>Two Horizon Centre, DLF Phase 5, Sector 43, Gurugram, Haryana 122002</p>
      <p className="mt-2">K16/24 DLF Phase 2, Gurugram, Haryana 122002</p>
      <p className="mt-2">Call: <a href="tel:+9192269199835" className="hover:underline">+91 92269199835</a></p>
      <p>Whatsapp: <a href="https://wa.me/919135328316" className="hover:underline">+91 91315328316</a></p>
    </div>
  </div>

  {/* Newsletter */}
  <div className="text-left">
    <h3 className="text-gray-500 font-bold mb-4">SUBSCRIBE TO OUR NEWSLETTER </h3>
    <form className="flex flex-col gap-2 items-center">
      <input type="email" placeholder="Enter your email address →" className="w-full px-4 py-2 text-white rounded-md border-2 border-gray-300" />
    </form>
  </div>

  {/* Social Icons */}
  <div className="flex justify-center space-x-4 text-2xl">
    <a href="https://www.instagram.com/culturecircle_" target="_blank"><FaInstagram /></a>
    <a href="https://www.youtube.com/@Culture-Circle" target="_blank"><FaYoutube /></a>
    <a href="https://www.linkedin.com/company/culture-circle/" target="_blank"><FaLinkedin /></a>
  </div>

  {/* Footer Bottom */}
  <div className="text-center text-gray-400 text-xs pt-6 border-t border-gray-600">
    <p>© 2025 CultureCircle — All rights reserved</p>
    <p className="mt-1">METACIRCLES TECHNOLOGIES PVT LTD</p>
  </div>
</div>


      {/* Bottom Text (common) */}
      <div className="hidden md:block mt-10 text-center text-sm text-gray-300">
        <p>© 2025 CultureCircle — All rights reserved</p>
        <p className="mt-1">METACIRCLES TECHNOLOGIES PVT LTD</p>
      </div>
    </footer>
  );
}
