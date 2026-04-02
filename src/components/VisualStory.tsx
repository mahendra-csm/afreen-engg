import { motion } from "framer-motion";
import visualBlockchain from "@/assets/visual-blockchain.jpg";
import visualFintech from "@/assets/visual-fintech.jpg";

const VisualStory = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl group"
        >
          <img
            src={visualBlockchain}
            alt="Blockchain infrastructure"
            className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            width={800}
            height={600}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl group"
        >
          <img
            src={visualFintech}
            alt="FinTech analytics dashboard"
            className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            width={800}
            height={600}
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default VisualStory;
