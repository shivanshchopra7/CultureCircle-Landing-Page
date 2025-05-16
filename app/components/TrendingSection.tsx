'use client';

import Image from 'next/image';

const trendingItems = [
  {
    name: 'AIR JORDAN 1 LOW SE HEMP LIGHT BRITISH BROWN',
    price: '₹ 8,811',
    imageUrl: '/trendingitems/trend1.png',
  },
  {
    name: 'ANTI SOCIAL SOCIAL CLUB BOLT FROM THE BLUE T-SHIRT',
    price: '₹ 4,400',
    imageUrl: '/trendingitems/trend2.png',
  },
  {
    name: "CLOUDMONSTER 2 'UNDYED ZEST'",
    price: '₹ 16,018',
    imageUrl: '/trendingitems/trend3.png',
  },
  {
    name: "CLOUDMONSTER 'ALL BLACK'",
    price: '₹ 16,603',
    imageUrl: '/trendingitems/trend4.png',
  },
  {
    name: "ESSENTIALS 'UNDYED ZEST'",
    price: '₹ 16,018',
    imageUrl: '/trendingitems/trend5.png',
  },
  {
    name: "ESSENTIALS 'ALL BLACK'",
    price: '₹ 16,603',
    imageUrl: '/trendingitems/trend6.png',
  },
  {
    name: "HASWAY VALOUR WASHED OVERSIZED T-SHIRT",
    price: '₹ 16,018',
    imageUrl: '/trendingitems/trend7.webp',
  },
  {
    name: "JACQUEMUS LE BAMBINO PINK",
    price: '₹ 16,603',
    imageUrl: '/trendingitems/trend8.png',
  },
  {
    name: 'AIR JORDAN 1 LOW SE HEMP LIGHT BRITISH BROWN',
    price: '₹ 8,811',
    imageUrl: '/trendingitems/trend1.png',
  },
  {
    name: 'ANTI SOCIAL SOCIAL CLUB BOLT FROM THE BLUE T-SHIRT',
    price: '₹ 4,400',
    imageUrl: '/trendingitems/trend2.png',
  },
  {
    name: "CLOUDMONSTER 2 'UNDYED ZEST'",
    price: '₹ 16,018',
    imageUrl: '/trendingitems/trend3.png',
  },
  {
    name: "CLOUDMONSTER 'ALL BLACK'",
    price: '₹ 16,603',
    imageUrl: '/trendingitems/trend4.png',
  },
  {
    name: "CLOUDMONSTER 2 'UNDYED ZEST'",
    price: '₹ 16,018',
    imageUrl: '/trendingitems/trend3.png',
  },
  {
    name: "CLOUDMONSTER 'ALL BLACK'",
    price: '₹ 16,603',
    imageUrl: '/trendingitems/trend4.png',
  },
  {
    name: "ESSENTIALS 'UNDYED ZEST'",
    price: '₹ 16,018',
    imageUrl: '/trendingitems/trend5.png',
  },
  {
    name: "ESSENTIALS 'ALL BLACK'",
    price: '₹ 16,603',
    imageUrl: '/trendingitems/trend6.png',
  }
];

export default function TrendingSection() {
  return (
    <div className="mt-20 px-4 md:py-12 pb-4">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">TRENDING</h2>
        <p className="text-gray-600 mt-1">Drip that made it to the top</p>
      </div>

      {/* Grid of Items */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-10 mt-12">
        {trendingItems.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-36 h-36 sm:w-60 sm:h-60 flex items-center justify-center">
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={240}
                height={240}
                className="object-contain"
              />
            </div>
            <p className="text-sm font-medium text-black text-center mt-2 leading-tight px-2">
              {item.name}
            </p>
            <p className="text-sm text-gray-800 mt-1">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
