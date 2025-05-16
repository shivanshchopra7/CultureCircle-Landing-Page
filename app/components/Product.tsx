export default function ProductTitle({ name }: { name: string }) {
  return (
    <h1 className="text-center text-base sm:text-lg font-semibold tracking-wide mb-4 sm:mb-8">
      {name}
    </h1>
  );
}
