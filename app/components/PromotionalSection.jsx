import Image from "next/image";

export default function PromotionalSection() {
  return (
    <div className="w-full px-2 py-2 flex justify-center">
      <div className="w-full max-w-5xl">
        <Image
          src="/Promotional.png"
          alt="Culture Cash Promotion"
          width={1200}
          height={600}
          className="w-full h-auto md:hidden object-cover rounded-md shadow-md"
        />
      </div>
    </div>
  );
}
