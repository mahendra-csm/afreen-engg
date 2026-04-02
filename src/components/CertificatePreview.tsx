import { motion } from "framer-motion";
import certificate from "@/assets/certificate-sample.png";

const CertificatePreview = () => (
  <section className="py-20 bg-light-gray">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            Your <span className="text-gradient">Certificate</span>
          </h2>
          <p className="text-muted-foreground mb-6">
            Every participant receives a beautifully designed Certificate of Appreciation featuring:
          </p>
          <ul className="space-y-3 text-sm text-foreground">
            {["Gold-bordered premium design", "OneGrasp official branding", "DOI reference number (10.65838)", "CPD accreditation stamp", "Unique Certificate ID", "Manager & signature verification"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="shadow-gold rounded-2xl overflow-hidden border-2 border-accent/30 max-w-[400px]">
            <img src={certificate} alt="Certificate of Appreciation" className="w-full" loading="lazy" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CertificatePreview;
