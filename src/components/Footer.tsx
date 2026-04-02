import logo from "@/assets/onegrasp-logo.png";

const Footer = () => (
  <footer className="bg-dark-accent py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <img src={logo} alt="OneGrasp" className="h-[40px] w-auto object-contain mb-3 brightness-125" />
          <p className="text-dark-accent-foreground/60 text-sm">
            Empowering global research through accredited academic conferences.
          </p>
        </div>
        <div>
          <h4 className="font-semibold font-display text-dark-accent-foreground mb-3">Contact</h4>
          <p className="text-dark-accent-foreground/70 text-sm">
            <a href="mailto:support@onegrasp.com" className="hover:text-primary transition-colors">support@onegrasp.com</a>
          </p>
          <p className="text-dark-accent-foreground/70 text-sm mt-1">+91 89777 60443</p>
        </div>
        <div>
          <h4 className="font-semibold font-display text-dark-accent-foreground mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm">
            <a href="#register" className="text-dark-accent-foreground/70 hover:text-primary transition-colors">Register</a>
            <a href="#" className="text-dark-accent-foreground/70 hover:text-primary transition-colors">Terms & Conditions</a>
            <a href="#" className="text-dark-accent-foreground/70 hover:text-primary transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
      <div className="border-t border-dark-accent-foreground/10 mt-8 pt-6 text-center">
        <p className="text-dark-accent-foreground/50 text-xs">
          Crossref · DOI 10.65838 · CPD · Journal Citation Index · MetaSpectra · RMetaHub · IntelliMindEd · Google Scholar
        </p>
        <p className="text-dark-accent-foreground/40 text-xs mt-2">
          © 2026 OneGrasp Scientific Conferences. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
