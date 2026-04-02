import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/onegrasp-logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Call for Papers", href: "#cfp" },
  { label: "Committee", href: "#committee" },
  { label: "Register", href: "#register" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          <img
            src={logo}
            alt="OneGrasp"
            className="h-[50px] w-auto object-contain max-md:h-[40px] max-sm:h-[32px]"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#register">
            <Button className="hidden sm:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-glow">
              Register Now
            </Button>
          </a>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border px-4 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-3 text-sm font-medium text-foreground/80 hover:text-primary border-b border-border/50"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#register" onClick={() => setMobileOpen(false)}>
            <Button className="w-full mt-3 bg-primary text-primary-foreground">
              Register Now
            </Button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
