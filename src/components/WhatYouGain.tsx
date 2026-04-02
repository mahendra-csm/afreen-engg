import { motion } from "framer-motion";
import { Award, FileText, GraduationCap, Mic, BookOpen, Network } from "lucide-react";

const gains = [
  { icon: Award, title: "Certificate of Participation", desc: "Receive an official certificate for your participation and presentation at the conference." },
  { icon: FileText, title: "DOI via Crossref", desc: "Your research paper gets a unique DOI assigned through Crossref for permanent citation." },
  { icon: GraduationCap, title: "CPD Accredited Certificate", desc: "Earn CPD credits recognized internationally to advance your professional development." },
  { icon: Mic, title: "Keynote Speaker Opportunity", desc: "Present your research to a global audience and establish thought leadership." },
  { icon: BookOpen, title: "Indexed in Google Scholar", desc: "Your work gets indexed in Google Scholar and major academic directories worldwide." },
  { icon: Network, title: "Global Research Networking", desc: "Connect with researchers, academics and industry professionals from 50+ countries." },
];

const WhatYouGain = () => (
  <section className="py-20 bg-light-gray">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
          What You <span className="text-gradient">Gain</span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          Maximize your academic career with world-class benefits
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gains.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-xl p-6 shadow-sm hover:shadow-glow transition-shadow border border-border group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <g.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold text-lg font-display text-card-foreground">{g.title}</h3>
            <p className="text-muted-foreground text-sm mt-2">{g.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatYouGain;
