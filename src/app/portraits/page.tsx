import Image from "next/image";

const PORTRAITS = [
  "73430014.JPG",
  "73430019.JPG",
  "73430023.JPG",
  "DSC09725.jpg",
  "DSC09748.jpg",
  "DSC09772.jpg",
  "DSC09774.jpg",
  "DSC09807-2.jpg",
  "DSC09814.jpg",
  "DSC09820-3.jpg",
  "DSC09837.jpg",
  "DSC09844.jpg",
  "DSC09869-2.jpg",
  "DSC09869.jpg",
  "DSC09870.jpg",
  "DSC09873.jpg",
  "DSC09877.jpg",
  "DSC09878-2.jpg",
];

export default function PortraitsPage() {
  return (
    <div className="masonry-grid">
      {PORTRAITS.map((filename) => (
        <div key={filename} className="masonry-item">
          <Image
            src={`/portraits/${filename}`}
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
