import Image from "next/image";

const SPORTS = [
  "DSC00972.jpg",
  "DSC01071.jpg",
  "DSC01118.jpg",
  "DSC01119.jpg",
  "DSC01120.jpg",
  "DSC01159.jpg",
  "DSC01187.jpg",
  "DSC01195.jpg",
  "DSC01196.jpg",
  "DSC01269.jpg",
  "DSC02356.jpg",
  "DSC02358.jpg",
  "DSC02491.jpg",
  "DSC02492.jpg",
  "DSC02493.jpg",
  "DSC02525.jpg",
  "DSC02526.jpg",
  "DSC02527.jpg",
  "DSC02528.jpg",
  "DSC02553.jpg",
  "DSC02554.jpg",
  "DSC02555.jpg",
  "DSC02607.jpg",
  "DSC02608.jpg",
  "DSC02673.jpg",
  "DSC02674.jpg",
  "DSC02675.jpg",
  "DSC02676.jpg",
  "DSC03706.jpg",
  "DSC03749.jpg",
  "DSC03832.jpg",
  "DSC04013.jpg",
  "DSC04176.jpg",
  "DSC04274.jpg",
  "DSC04275.jpg",
  "DSC04276.jpg",
  "DSC04382.jpg",
];

export default function SportPage() {
  return (
    <div className="masonry-grid">
      {SPORTS.map((filename) => (
        <div key={filename} className="masonry-item">
          <Image
            src={`/sports/${filename}`}
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
