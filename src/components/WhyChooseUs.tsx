import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe, Star } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Verified & Accredited", desc: "All publications are verified, DOI-assigned, and internationally accredited." },
  { icon: Zap, title: "Instant Certification", desc: "Receive your certificate immediately upon participation and presentation." },
  { icon: Globe, title: "Global Reach", desc: "Indexed across 10+ databases with exposure to researchers in 50+ countries." },
  { icon: Star, title: "Trusted Platform", desc: "OneGrasp is trusted by thousands of researchers and institutions worldwide." },
];

const WhyChooseUs = () => (
  <section className="py-20 bg-light-gray">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
          Why Choose <span className="text-gradient">OneGrasp?</span>
        </h2>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 text-center shadow-sm border border-border hover:shadow-glow transition-shadow"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <r.icon className="text-primary" size={28} />
            </div>
            <h3 className="font-semibold text-lg font-display text-card-foreground">{r.title}</h3>
            <p className="text-muted-foreground text-sm mt-2">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
