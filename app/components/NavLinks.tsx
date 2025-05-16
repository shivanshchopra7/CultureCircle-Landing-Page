import { ChevronRight } from 'lucide-react'

const links = [
  'Brands',
  'Luxury',
  'Streetwear',
  'Sneakers',
  'Lifestyle & Accessories',
  'Curated',

]

export function NavLinks() {
  return (
    <nav className="flex gap-10 text-md  font-medium text-black">
      {links.map((link) => (
        <a key={link} href="#" className="flex items-center gap-1 hover:underline">
          {link}
          {['Brands', 'Luxury', 'Streetwear', 'Sneakers', 'Lifestyle & Accessories', 'Curated'].includes(link) && (
            <ChevronRight className="w-4 h-4 text-gray-700" />
          )}
        </a>
      ))}
    </nav>
  )
}
