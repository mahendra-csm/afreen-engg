import { motion } from "framer-motion";
import audienceDS from "@/assets/audience-data-scientist.jpg";
import audienceFT from "@/assets/audience-fintech.jpg";
import audienceBD from "@/assets/audience-blockchain-dev.jpg";
import audienceSU from "@/assets/audience-startup.jpg";

const cards = [
  {
    img: audienceDS,
    title: "Data Scientists & AI Specialists",
    subtitle: "AI + Blockchain Analytics",
    desc: "Explore machine learning, blockchain analytics, predictive financial modeling, and AI-powered digital economy solutions.",
  },
  {
    img: audienceFT,
    title: "FinTech Professionals",
    subtitle: "Transform Digital Finance",
    desc: "Discover innovations in digital banking, mobile payments, cryptocurrency, and next-gen financial platforms.",
  },
  {
    img: audienceBD,
    title: "Blockchain Developers",
    subtitle: "Build Decentralized Solutions",
    desc: "Learn about smart contracts, Web3, DeFi, and blockchain infrastructure shaping global industries.",
  },
  {
    img: audienceSU,
    title: "Startups & Tech Entrepreneurs",
    subtitle: "Scale Web3 Innovation",
    desc: "Pitch ideas, connect with investors, and grow your blockchain or digital economy startup globally.",
  },
];

const AudienceSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
          This Conference Is <span className="text-gradient">Built For You</span>
        </h2>
        <p className="text-muted-foreground mt-3">Whether you're a researcher, developer, or industry leader — this is your stage.</p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl overflow-hidden shadow-sm border border-border group hover:shadow-glow transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={c.img}
                alt={c.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                width={800}
                height={512}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-accent/80 to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-medium bg-primary/90 text-primary-foreground px-2 py-1 rounded-full">
                {c.subtitle}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg font-display text-card-foreground">{c.title}</h3>
              <p className="text-muted-foreground text-sm mt-2">{c.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AudienceSection;
