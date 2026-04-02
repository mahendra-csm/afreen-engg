import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const RegistrationForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Registration submitted! We'll contact you shortly.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="register" className="py-20 gradient-dark">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-dark-accent-foreground">
            Reserve Your <span className="text-accent">Spot</span>
          </h2>
          <p className="text-dark-accent-foreground/70 mt-3">Limited Online Seats — Filling Fast</p>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-card rounded-2xl p-8 space-y-5"
        >
          <Input placeholder="Full Name" required className="bg-dark-accent-foreground/10 border-dark-accent-foreground/20 text-dark-accent-foreground placeholder:text-dark-accent-foreground/40" />
          <Input type="email" placeholder="Email Address" required className="bg-dark-accent-foreground/10 border-dark-accent-foreground/20 text-dark-accent-foreground placeholder:text-dark-accent-foreground/40" />
          <Input type="tel" placeholder="Phone Number" className="bg-dark-accent-foreground/10 border-dark-accent-foreground/20 text-dark-accent-foreground placeholder:text-dark-accent-foreground/40" />
          <Input placeholder="Country" className="bg-dark-accent-foreground/10 border-dark-accent-foreground/20 text-dark-accent-foreground placeholder:text-dark-accent-foreground/40" />
          <Input placeholder="Profession / Affiliation" className="bg-dark-accent-foreground/10 border-dark-accent-foreground/20 text-dark-accent-foreground placeholder:text-dark-accent-foreground/40" />
          <Textarea placeholder="Additional Comments" rows={3} className="bg-dark-accent-foreground/10 border-dark-accent-foreground/20 text-dark-accent-foreground placeholder:text-dark-accent-foreground/40" />
          <Button
            type="submit"
            size="lg"
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold font-bold text-lg py-6"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit & Reserve My Spot"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default RegistrationForm;
