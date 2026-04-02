import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What is the conference about?", a: "The International Conference on Digital Economy & Blockchain Innovations focuses on blockchain technology, digital finance, Web3, DeFi, smart contracts, and AI in finance." },
  { q: "Is this an online or offline conference?", a: "This is a fully online conference, allowing global participation from anywhere in the world." },
  { q: "How do I submit my research paper?", a: "Click the 'Submit Abstract' button and fill out the registration form. Our team will guide you through the submission and review process." },
  { q: "Will I receive a certificate?", a: "Yes, every participant and presenter receives an official CPD-accredited Certificate of Appreciation with a unique DOI reference." },
  { q: "Is the conference accredited?", a: "Yes, the conference is accredited by CPD, indexed via Crossref with DOI 10.65838, and listed in Google Scholar and other major directories." },
  { q: "What are the dates of the conference?", a: "The conference is scheduled for 16th & 17th April 2026." },
  { q: "Who can participate?", a: "Researchers, academics, data scientists, blockchain developers, FinTech professionals, startups, and anyone interested in digital economy innovations." },
  { q: "Is there a fee for participation?", a: "Please contact us at support@onegrasp.com or via WhatsApp for current registration fees and early bird discounts." },
];

const FAQSection = () => (
  <section id="faq" className="py-20 bg-background">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h2>
      </motion.div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-5">
            <AccordionTrigger className="text-left font-semibold text-card-foreground hover:text-primary">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
