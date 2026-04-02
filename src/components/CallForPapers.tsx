import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import conferenceHall from "@/assets/conference-hall.jpg";

const topics = [
  "Blockchain & Web3",
  "Cryptocurrency & DeFi",
  "Digital Banking & FinTech",
  "AI in Finance",
  "Smart Contracts",
  "Cybersecurity & Digital Trust",
];

const CallForPapers = () => (
  <section id="cfp" className="py-20 bg-background relative overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={conferenceHall}
              alt="Conference hall"
              className="w-full h-[350px] object-cover"
              loading="lazy"
              width={1200}
              height={600}
            />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            Call for <span className="text-gradient">Papers</span>
          </h2>
          <p className="text-muted-foreground mb-6">
            We invite researchers, scholars, and industry professionals to submit original research 
            papers, case studies, and review articles on the following topics:
          </p>
          <div className="grid grid-cols-2 gap-3 mb-8">
            {topics.map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-foreground">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                {t}
              </div>
            ))}
          </div>
          <a href="https://onegrasp.com/conference-events/international-conference-on-digital-economy-blockchain-innovations/">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow font-semibold">
              Submit Your Abstract
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CallForPapers;
