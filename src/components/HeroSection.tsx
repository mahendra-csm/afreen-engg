import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-blockchain.jpg";

const TARGET_DATE = new Date("2026-04-16T00:00:00").getTime();

const CountdownTimer = () => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, TARGET_DATE - Date.now());
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex gap-3 sm:gap-4">
      {Object.entries(time).map(([label, val]) => (
        <div key={label} className="glass-card rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-center min-w-[60px]">
          <div className="text-2xl sm:text-3xl font-bold text-primary-foreground font-display">
            {String(val).padStart(2, "0")}
          </div>
          <div className="text-xs text-primary-foreground/70 uppercase tracking-wider">{label}</div>
        </div>
      ))}
    </div>
  );
};

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 gradient-hero" />

    {/* Urgency strip */}
    <div className="absolute top-[72px] left-0 right-0 bg-accent/90 overflow-hidden py-2 z-10">
      <div className="animate-urgency whitespace-nowrap text-accent-foreground font-bold text-sm tracking-wide">
        🔥 SEATS FILLING FAST — REGISTER NOW! &nbsp;&nbsp;&nbsp; 🔥 SEATS FILLING FAST — REGISTER NOW! &nbsp;&nbsp;&nbsp; 🔥 SEATS FILLING FAST — REGISTER NOW!
      </div>
    </div>

    <div className="container relative z-10 mx-auto px-4 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground font-display leading-tight max-w-5xl mx-auto">
          International Conference on{" "}
          <span className="text-accent">Digital Economy & Blockchain Innovations</span>
        </h1>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8 text-primary-foreground/90">
          <span className="flex items-center gap-2 text-sm sm:text-base">
            <Calendar size={18} /> 16th & 17th April 2026
          </span>
          <span className="flex items-center gap-2 text-sm sm:text-base">
            <Globe size={18} /> Online Conference
          </span>
          <span className="flex items-center gap-2 text-sm sm:text-base">
            <Users size={18} /> Global Participation
          </span>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {["Crossref", "DOI 10.65838", "CPD Accredited", "Journal Citation Index", "MetaSpectra", "RMetaHub", "IntelliMindEd", "Google Scholar"].map((b) => (
            <span key={b} className="glass-card px-3 py-1.5 rounded-full text-xs font-medium text-primary-foreground/90">
              {b}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <a href="#register">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-glow font-semibold">
              Register Now
            </Button>
          </a>
          <a href="#cfp">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 font-semibold"
            >
              Submit Abstract
            </Button>
          </a>
        </div>

        <div className="mt-12">
          <p className="text-primary-foreground/70 text-sm mb-4 font-medium">
            Limited Seats – Registration Closing Soon
          </p>
          <div className="flex justify-center">
            <CountdownTimer />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
