import Image from "next/image";

const FILM = [
  "000016600030.jpg",
  "000016610023.jpg",
  "000016610024.jpg",
  "000016610026.jpg",
  "000016610027.jpg",
  "000016610029.jpg",
  "000016610030.jpg",
  "000016610031.jpg",
  "000016610032.jpg",
  "000016610034.jpg",
  "46320027.jpg",
  "46320028.jpg",
  "46320029.jpg",
  "46320030.jpg",
  "46320031.jpg",
  "46320032.jpg",
  "46320033.jpg",
  "46320034.jpg",
  "46320035.jpg",
  "46320036.jpg",
  "46320037.jpg",
  "64340001.jpg",
  "64340003.jpg",
  "64340004.jpg",
  "64340015.jpg",
  "64340022.jpg",
  "64340023.jpg",
  "64370031.jpg",
];

export default function FilmPage() {
  return (
    <div className="masonry-grid">
      {FILM.map((filename) => (
        <div key={filename} className="masonry-item">
          <Image
            src={`/film/${filename}`}
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
