import { motion } from "framer-motion";
import { TrendingUp, Shield, Layers, Globe } from "lucide-react";

const points = [
  { icon: TrendingUp, title: "Digital Economy Growth", text: "Explore the rapid expansion of digital economies worldwide and how blockchain enables new business models." },
  { icon: Layers, title: "Blockchain Transforming Industries", text: "From supply chains to healthcare, discover how distributed ledger technology is reshaping global industries." },
  { icon: Shield, title: "FinTech, Web3 & Decentralization", text: "Dive into decentralized finance (DeFi), Web3 protocols, and next-gen fintech innovations driving change." },
  { icon: Globe, title: "Global Collaboration", text: "Join researchers and industry leaders from 50+ countries to shape the future of digital finance." },
];

const AboutConference = () => (
  <section id="about" className="py-20 bg-light-gray">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
          About the <span className="text-gradient">Conference</span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-3xl mx-auto">
          The International Conference on Digital Economy & Blockchain Innovations brings together leading academics, 
          researchers, and industry experts to explore the intersection of blockchain technology, digital finance, 
          and the evolving global economy.
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 gap-6">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 shadow-sm border border-border flex gap-4"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <p.icon className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg font-display text-card-foreground">{p.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">{p.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutConference;
