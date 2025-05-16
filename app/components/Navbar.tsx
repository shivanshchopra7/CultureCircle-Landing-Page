'use client'

import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'

export default function Navbar() {
  return (
    <header>
      <div className="hidden md:block">
        <DesktopNavbar />
      </div>
      <div className="md:hidden">
        <MobileNavbar />
      </div>
    </header>
  )
}
