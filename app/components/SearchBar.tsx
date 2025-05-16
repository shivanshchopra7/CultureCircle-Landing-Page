import { Search } from 'lucide-react'

export function SearchBar() {
  return (
    <div className="flex items-center bg-gray-100 px-3 py-3 rounded-md w-[550px]">
      <Search className="w-4 h-4 text-gray-500" />
      <input
        type="text"
        placeholder="FIND YOUR DRIP"
        className="ml-2 bg-transparent text-md font-medium w-full placeholder-gray-500 focus:outline-none"
      />
    </div>
  )
}
