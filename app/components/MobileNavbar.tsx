import { ArrowLeft, Search, ShoppingBag, User } from 'lucide-react'

export default function MobileNavbar() {
  return (
    <div className="flex items-center justify-between p-4 border-b shadow-sm">
      {/* Left: Back Arrow + Logo */}
      <div className="flex items-center gap-2">
      
        <img src="/headerlogo.png" alt="Logo" className="h-6" />
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-4">
<button className="p-1 border border-gray-300 rounded-md">
  <Search className="w-5 h-5 text-gray-600" />
</button>

        <div className="relative">
          <button className="p-1 border border-gray-300 rounded-md">
<ShoppingBag className="w-5 h-5 text-gray-600" />
          </button>
          
          <span className="absolute -top-1 -right-1 text-xs text-white bg-red-500 w-4 h-4 flex items-center justify-center rounded-full">2</span>
        </div>
          <button className="p-1 border border-gray-300 rounded-md">
<User className="w-5 h-5 text-gray-600" />
          </button>
        
      </div>
    </div>
  )
}
