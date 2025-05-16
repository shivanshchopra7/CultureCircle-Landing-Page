export default function BuyButton() {
  return (
    <div className="space-y-4 sm:space-y-6">
  <button className="w-full bg-black hover:bg-orange-500 text-white py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold">
    BUY NOW
  </button>
  <div className="bg-gray-100 p-3 sm:p-4 rounded-md text-sm">
    No cost EMIs starting from for 24 months at checkout.
  </div>
</div>

  );
}