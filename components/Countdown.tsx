"use client";

import { useEffect, useState } from "react";

export default function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const future = new Date(targetDate).getTime();
      const distance = future - now;

      if (distance <= 0) {
        setTimeLeft({ weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }

      const totalDays = Math.floor(distance / (1000 * 60 * 60 * 24));
      const weeks = Math.floor(totalDays / 7);
      const days = totalDays % 7;
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft({ weeks, days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="text-center mt-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-200">
        Engage Paris démarre dans
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {[
          { label: "SEMAINES", value: timeLeft.weeks },
          { label: "JOURS", value: timeLeft.days },
          { label: "HEURES", value: timeLeft.hours },
          { label: "MINUTES", value: timeLeft.minutes },
          { label: "SECONDES", value: timeLeft.seconds },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-300 text-black px-4 py-3 rounded-xl min-w-[80px]"
          >
            <div className="font-bold text-lg">{item.value}</div>
            <div className="uppercase text-sm tracking-wider font-medium opacity-80">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      <a
        href="#questionnaire"
        className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        construisez l&apos;édition 2026
      </a>
    </section>
  );
}
