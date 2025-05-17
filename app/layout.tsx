import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TopMarquee from './components/TopMarquee'

export const metadata: Metadata = {
  title: 'Culture Circle',
  description: 'Shop luxury streetwear and sneakers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        
        <Navbar />
        <TopMarquee />
        <main>{children}</main>
         <Footer />
      </body>
    </html>
  )
}
