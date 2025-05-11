import Image from "next/image";

const speakers = [
  {
    name: "Allison Adelise",
    company: "ABCSM",
    bio: "Allison est une passionnée de Customer Success qui prend plaisir à aider les CSM à conjuguer performance et épanouissement professionnel...",
    image: "https://framerusercontent.com/images/rUKbkYgy1qzYgss0YBTxbrtAow.png",
  },
  {
    name: "Krystel Barbarella",
    company: "Eutelsat",
    bio: "Customer Success Manager, elle aide ses clients à exploiter des solutions innovantes pour développer leurs marchés...",
    image: "https://framerusercontent.com/images/pEoxRAP18NjkpWbKmNxh7g4Rc.png",
  },
  {
    name: "Youssef Agouzoul",
    company: "Metroscope",
    bio: "Youssef est actuellement Responsable Customer Success chez Metroscope, un SaaS spécialisé dans les logiciels de diagnostic...",
    image: "https://framerusercontent.com/images/tI8R5MqCBkRD42FCpoKWH4nhk.png",
  },
];

export default function Intervenants() {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-6" id="intervenants">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Rencontrez nos intervenants</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {speakers.map((speaker, idx) => (
            <div key={idx} className="bg-white text-black rounded-lg shadow-lg p-6 flex flex-col items-center">
              <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden">
                <Image src={speaker.image} alt={speaker.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold">{speaker.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{speaker.company}</p>
              <p className="text-sm text-gray-700 text-center">{speaker.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
