import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Search, Filter } from "lucide-react";

const members = [
  {
    name: "Dr. Rudrarup Gupta",
    img: "https://onegrasp.com/wp-content/uploads/2025/10/Dr.-Rudrarup-Gupta.jpg",
    role: "Researcher",
    department: "Business & Economics",
    university: "",
    country: "India",
  },
  {
    name: "Dr. Rohan Singh",
    img: "https://onegrasp.com/wp-content/uploads/2025/10/Dr.-Rohan-Singh.jpg",
    role: "Associate Professor",
    department: "Management (HR, OB)",
    university: "Chandigarh University",
    country: "India",
  },
  {
    name: "Dr. Pradip Das",
    img: "https://onegrasp.com/wp-content/uploads/2025/10/Dr.-Pradip-Das.jpg",
    role: "Associate Professor (Retd.), H.O.D.",
    department: "Commerce Unit",
    university: "Jagannath Kishore College",
    country: "India",
  },
  {
    name: "Dr. Nalanda Roy",
    img: "https://onegrasp.com/wp-content/uploads/2025/10/Nalanda-Roy.jpg",
    role: "Full Professor / Coordinator, Asian Studies Program",
    department: "Political Science & International Studies",
    university: "Georgia Southern University",
    country: "USA",
  },
  {
    name: "Dr. G. Vikram",
    img: "https://onegrasp.com/wp-content/uploads/2025/10/Dr.-G.Vikram.jpg",
    role: "Associate Professor",
    department: "School of Management",
    university: "Karunya Institute of Technology and Sciences",
    country: "India",
  },
  {
    name: "Dr. Ganesh Adhikari",
    img: "https://onegrasp.com/wp-content/uploads/2025/10/Dr.-Ganesh-Adhikari.jpg",
    role: "Researcher",
    department: "",
    university: "",
    country: "USA",
  },
  {
    name: "Dr. Rahmatullah Pashtoon",
    img: "https://onegrasp.com/wp-content/uploads/2025/10/Assist.-Prof.-Dr.-Rahmatullah-Pashtoon.jpg",
    role: "Assistant Professor",
    department: "Department of National Economics",
    university: "Kandahar University",
    country: "Afghanistan",
  },
  {
    name: "Academic Advisor",
    img: "https://onegrasp.com/wp-content/uploads/2025/10/1-14.jpg",
    role: "Lecturer / Module Leader / Academic Advisor",
    department: "Business, Entrepreneurship & Finance",
    university: "Royal Docks School of Business and Law",
    country: "United Kingdom",
  },
  {
    name: "Dr. Tareq Nael Hashem",
    img: "https://onegrasp.com/wp-content/uploads/2025/10/2-13.jpg",
    role: "Researcher",
    department: "",
    university: "",
    country: "",
  },
  {
    name: "Professor / Former Pro-Vice Chancellor",
    img: "https://onegrasp.com/wp-content/uploads/2025/10/3-12.jpg",
    role: "Professor / Former Pro-Vice Chancellor",
    department: "School of Business and Entrepreneurship",
    university: "Independent University, Bangladesh",
    country: "Bangladesh",
  },
  {
    name: "Dr. Maatouk Khoukhi",
    img: "https://onegrasp.com/wp-content/uploads/2025/10/4-12.jpg",
    role: "Associate Professor",
    department: "Architectural Engineering, College of Engineering",
    university: "United Arab Emirates University (UAEU)",
    country: "UAE",
  },
];

const countries = [...new Set(members.map((m) => m.country).filter(Boolean))];

const ScientificCommittee = () => {
  const [search, setSearch] = useState("");
  const [countryFilter, setCountryFilter] = useState("");

  const filtered = useMemo(
    () =>
      members.filter((m) => {
        const matchSearch =
          !search ||
          m.name.toLowerCase().includes(search.toLowerCase()) ||
          m.department.toLowerCase().includes(search.toLowerCase()) ||
          m.university.toLowerCase().includes(search.toLowerCase());
        const matchCountry = !countryFilter || m.country === countryFilter;
        return matchSearch && matchCountry;
      }),
    [search, countryFilter]
  );

  return (
    <section id="committee" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Meet Our Scientific Committee
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
            Global Experts Guiding Our{" "}
            <span className="text-gradient">Conferences</span>
          </h2>
        </motion.div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8 max-w-xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search committee members"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <select
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
              className="pl-9 pr-8 py-2.5 rounded-xl border border-border bg-card text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              <option value="">All Countries</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((m, i) => (
            <motion.div
              key={m.name + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-card rounded-2xl p-6 text-center shadow-sm border border-border hover:shadow-glow hover:scale-[1.03] transition-all duration-300 group relative"
            >
              <span className="absolute top-3 right-3 text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                International Expert
              </span>
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-colors">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="font-semibold font-display text-card-foreground text-sm">
                {m.name}
              </h3>
              <p className="text-muted-foreground text-xs mt-1">{m.role}</p>
              {m.department && (
                <p className="text-muted-foreground text-xs mt-0.5">
                  {m.department}
                </p>
              )}
              {m.university && (
                <p className="text-muted-foreground text-xs mt-0.5 italic">
                  {m.university}
                </p>
              )}
              {m.country && (
                <p className="text-primary text-xs font-medium mt-1.5">
                  {m.country}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">
            No committee members found.
          </p>
        )}
      </div>
    </section>
  );
};

export default ScientificCommittee;
