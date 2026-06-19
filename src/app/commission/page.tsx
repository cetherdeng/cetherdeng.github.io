import Image from "next/image";

const COMMISSION = [
  "DSC03137.jpg",
  "DSC03139-3.jpg",
  "DSC03139.jpg",
  "IMG_9238.jpg",
  "IMG_9243.jpg",
  "IMG_9248.jpg",
  "IMG_9255-2.jpg",
  "IMG_9255.jpg",
  "IMG_9278.jpg",
];

export default function CommissionPage() {
  return (
    <div className="masonry-grid">
      {COMMISSION.map((filename) => (
        <div key={filename} className="masonry-item">
          <Image
            src={`/commission/${filename}`}
            alt=""
            width={800}
            height={600}
            className="w-full h-auto block"
            unoptimized
          />
        </div>
      ))}
    </div>
  );
}
