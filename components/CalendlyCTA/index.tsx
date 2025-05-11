export default function CalendlyCTA() {
    return (
      <section className="bg-blue-950 text-white py-20 px-6" id="calendly">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Envie de participer ?</h2>
          <p className="text-lg mb-10">
            Vous êtes Head of CS ? Prenez 15 min avec Justine pour co-construire Engage Paris 2026.
          </p>
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://calendly.com/justine-joliveau/30min?hide_event_type_details=1&hide_gdpr_banner=1"
              width="100%"
              height="700"
              frameBorder="0"
              title="Calendly"
            ></iframe>
          </div>
        </div>
      </section>
    );
  }
  