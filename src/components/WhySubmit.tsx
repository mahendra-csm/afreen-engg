import { motion } from "framer-motion";
import { FileCheck, Globe, Award, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  { icon: FileCheck, title: "DOI Assigned" },
  { icon: Globe, title: "Indexed Globally" },
  { icon: Award, title: "CPD Credits" },
  { icon: Clock, title: "Fast Review Process" },
  { icon: BookOpen, title: "Publication Opportunity" },
];

const WhySubmit = () => (
  <section className="py-20 gradient-dark">
    <div className="container mx-auto px-4 text-center">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-dark-accent-foreground mb-4">
          Why Submit Your <span className="text-accent">Research?</span>
        </h2>
        <p className="text-dark-accent-foreground/70 mb-12 max-w-2xl mx-auto">
          Get your research recognized globally with our rigorous yet supportive publication process
        </p>
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-xl p-5 text-center"
          >
            <h.icon className="mx-auto mb-3 text-accent" size={28} />
            <div className="text-sm font-semibold text-dark-accent-foreground">{h.title}</div>
          </motion.div>
        ))}
      </div>
      <a href="#register">
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold font-semibold text-lg px-8">
          Submit Abstract Now
        </Button>
      </a>
    </div>
  </section>
);

export default WhySubmit;
