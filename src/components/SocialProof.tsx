import { motion } from "framer-motion";
import { Database, Globe, Users, BarChart3 } from "lucide-react";

const stats = [
  { icon: Database, value: "170M+", label: "Metadata Records" },
  { icon: BarChart3, value: "10+", label: "Indexing Databases" },
  { icon: Globe, value: "50+", label: "Countries Participation" },
  { icon: Users, value: "Global", label: "Research Exposure" },
];

const SocialProof = () => (
  <section className="py-16 bg-dark-accent">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-xl p-6 text-center"
          >
            <s.icon className="mx-auto mb-3 text-primary" size={32} />
            <div className="text-2xl sm:text-3xl font-bold text-dark-accent-foreground font-display">{s.value}</div>
            <div className="text-sm text-dark-accent-foreground/70 mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
