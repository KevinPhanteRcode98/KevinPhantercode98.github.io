import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HomeIcon, CpuChipIcon, BriefcaseIcon, AcademicCapIcon, TrophyIcon } from '@heroicons/react/24/solid';

const sections = [
  { id: "hero", label: "Inicio", icon: <HomeIcon className="w-6 h-6" /> },
  { id: "tech", label: "Tech Stack", icon: <CpuChipIcon className="w-6 h-6" /> },
  { id: "exp", label: "Experiencia", icon: <BriefcaseIcon className="w-6 h-6" /> },
  { id: "cert", label: "Certificados", icon: <TrophyIcon className="w-6 h-6" /> },
  { id: "edu", label: "Formación", icon: <AcademicCapIcon className="w-6 h-6" /> },
];

export default function Sidebar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offsets = sections.map(s => {
        const el = document.getElementById(s.id);
        return el ? el.offsetTop : 0;
      });
      const heights = sections.map(s => {
        const el = document.getElementById(s.id);
        return el ? el.offsetHeight : 0;
      });
      // Detectar si está cerca del final
      const nearBottom = window.innerHeight + scrollY >= document.body.offsetHeight - 10;
      if (nearBottom) {
        setActive(sections[sections.length - 1].id);
        return;
      }
      // Marcar la sección activa según el rango visible
      for (let i = 0; i < offsets.length; i++) {
        const start = offsets[i] - 120;
        const end = offsets[i] + heights[i] - 120;
        if (scrollY >= start && scrollY < end) {
          setActive(sections[i].id);
          return;
        }
      }
      setActive(sections[0].id);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sidebar desktop */}
      <motion.nav
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="hidden md:flex flex-col fixed top-24 left-6 z-50 bg-white/10 backdrop-blur-md border border-cyan-300/30 rounded-2xl shadow-lg p-4 gap-4"
        style={{ width: 70 }}
        aria-label="Sidebar navegación"
      >
        {sections.map(s => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`flex flex-col items-center group transition-all duration-200 ${active === s.id ? "text-cyan-400" : "text-gray-300"}`}
            aria-label={s.label}
          >
            <span className={`mb-1 ${active === s.id ? "scale-110" : "scale-100"}`}>{s.icon}</span>
            <span className="text-xs font-semibold group-hover:text-cyan-300">{s.label}</span>
            {active === s.id && <span className="w-2 h-2 bg-cyan-400 rounded-full mt-1 animate-pulse" />}
          </a>
        ))}
      </motion.nav>
      {/* Sidebar móvil */}
      <div className="md:hidden fixed top-6 left-6 z-50">
        <button
          className="bg-white/10 backdrop-blur-md border border-cyan-300/30 rounded-full p-2 shadow-lg"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú lateral"
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="7" width="20" height="2"/><rect x="4" y="13" width="20" height="2"/><rect x="4" y="19" width="20" height="2"/></svg>
        </button>
        {open && (
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute top-12 left-0 bg-white/10 backdrop-blur-md border border-cyan-300/30 rounded-2xl shadow-lg p-4 flex flex-col gap-4"
            style={{ width: 120 }}
          >
            {sections.map(s => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`flex items-center gap-2 group transition-all duration-200 ${active === s.id ? "text-cyan-400" : "text-gray-300"}`}
                aria-label={s.label}
                onClick={() => setOpen(false)}
              >
                <span>{s.icon}</span>
                <span className="text-xs font-semibold group-hover:text-cyan-300">{s.label}</span>
                {active === s.id && <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse ml-1" />}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </>
  );
}
