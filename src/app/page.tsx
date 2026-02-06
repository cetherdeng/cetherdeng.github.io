import Image from "next/image";

// Masonry grid: varied aspect ratios (use one image, cropped by aspect ratio for variety)
const GRID_ITEMS = [
  { aspect: "aspect-[3/4]" },
  { aspect: "aspect-[4/3]" },
  { aspect: "aspect-[3/4]" },
  { aspect: "aspect-square" },
  { aspect: "aspect-[2/3]" },
  { aspect: "aspect-[4/5]" },
  { aspect: "aspect-[3/4]" },
  { aspect: "aspect-[5/4]" },
  { aspect: "aspect-[3/4]" },
  { aspect: "aspect-[4/3]" },
];

export default function Home() {
  return (
    <div className="masonry-grid">
      {GRID_ITEMS.map((item, i) => (
        <div key={i} className="masonry-item">
          <div className={`relative w-full ${item.aspect} overflow-hidden bg-neutral-200`}>
            <Image
              src="/andrew.jpeg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
