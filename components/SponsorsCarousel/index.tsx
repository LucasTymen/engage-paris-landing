import Image from "next/image";

const sponsors = [
  "https://framerusercontent.com/images/44Ythpu4rkfs2S9PuUfYwvcqgmI.png",
  "https://framerusercontent.com/images/WzMWIaihUlsQ9DK9dzB0B8LA4Vs.png",
  "https://framerusercontent.com/images/ryhxEYxiWJgFfGPyM2QHTDYvhpc.png",
];

export default function SponsorsCarousel() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-10">Nos sponsors</h2>
        <div className="flex gap-6 justify-center items-center overflow-x-auto no-scrollbar">
          {sponsors.map((src, idx) => (
            <div key={idx} className="relative w-36 h-36 flex-shrink-0 rounded-lg overflow-hidden shadow">
              <Image src={src} alt={`Sponsor ${idx + 1}`} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
