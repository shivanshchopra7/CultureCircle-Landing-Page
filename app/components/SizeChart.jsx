'use client';

import { useState } from 'react';
import { ChevronUp, ChevronDown, Ruler } from 'lucide-react';

const sizeData = [
  { us: '3.5', usw: '5', uk: '3', eu: '35.5' },
  { us: '4', usw: '5.5', uk: '3.5', eu: '36' },
  { us: '4.5', usw: '6', uk: '4', eu: '36.5' },
  { us: '5', usw: '6.5', uk: '4.5', eu: '37.5' },
  { us: '5.5', usw: '7', uk: '5', eu: '38' },
  { us: '6', usw: '7.5', uk: '5.5', eu: '38.5' },
  { us: '6.5', usw: '8', uk: '6', eu: '39' },
  { us: '7', usw: '8.5', uk: '6', eu: '40' },
  { us: '7.5', usw: '9', uk: '6.5', eu: '40.5' },
  { us: '8', usw: '9.5', uk: '7', eu: '41' },
  { us: '8.5', usw: '10', uk: '7.5', eu: '42' },
  { us: '9', usw: '10.5', uk: '8', eu: '42.5' },
  { us: '9.5', usw: '11', uk: '8.5', eu: '43' },
  { us: '10', usw: '11.5', uk: '9', eu: '44' },
  { us: '10.5', usw: '12', uk: '9.5', eu: '44.5' },
  { us: '11', usw: '12.5', uk: '10', eu: '45' },
  { us: '11.5', usw: '13', uk: '10.5', eu: '45.5' },
];

export default function SizeChart() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-md overflow-hidden shadow-sm">
      <button
        className={`flex items-center gap-2 font-semibold px-4 py-3  w-full justify-between ${
          open ? 'text-blue-700' : 'text-black'
        }`}
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2">
          <Ruler size={16} className={open ? 'text-blue-700' : 'text-black'} />
          <span>Size Chart</span>
        </div>
        {open ? (
          <ChevronUp className="text-blue-700" size={18} />
        ) : (
          <ChevronDown className="text-black" size={18} />
        )}
      </button>

      {open && (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-center border-t border-gray-200">
            <thead className="bg-black text-white">
              <tr>
                <th className="px-4 py-2">US</th>
                <th className="px-4 py-2">US(W)</th>
                <th className="px-4 py-2">UK</th>
                <th className="px-4 py-2">EU</th>
              </tr>
            </thead>
            <tbody>
              {sizeData.map((row, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="px-4 py-2">{row.us}</td>
                  <td className="px-4 py-2">{row.usw}</td>
                  <td className="px-4 py-2">{row.uk}</td>
                  <td className="px-4 py-2">{row.eu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
