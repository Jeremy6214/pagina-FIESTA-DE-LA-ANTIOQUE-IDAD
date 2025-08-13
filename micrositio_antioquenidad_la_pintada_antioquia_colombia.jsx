import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Utensils, Landmark, Shirt, History, Camera, BookOpen } from "lucide-react";

// Sección reutilizable
const Section = ({ id, title, icon: Icon, children }) => (
  <section id={id} className="scroll-mt-24 py-16 px-4 md:px-8 max-w-6xl mx-auto">
    <div className="flex items-center gap-3 mb-6">
      {Icon && <Icon className="w-6 h-6" aria-hidden />}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
    </div>
    <div className="text-slate-700 leading-relaxed text-base md:text-[17px]">{children}</div>
  </section>
);

export default function LaPintadaMicrositio() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50 text-slate-900">
      {/* Barra fija */}
      <div className="sticky top-0 z-40 backdrop-blur bg-white/70 ring-1 ring-black/5">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-tight">FIESTA DE LA ANTIOQUEÑIDAD INEM 2025 - MUNICIPIO DE LA PINTADA</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <header className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Puentes_en_La_Pintada_04.jpg"
            alt="Puente sobre el río Cauca en La Pintada"
            className="w-full h-[46vh] md:h-[58vh] object-cover object-center brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
        </div>
        <div className="max-w-6xl mx-auto px-4 md:px-8 pt-10 md:pt-16 pb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-center"
          >
            Fiesta de la Antioqueñidad INEM 2025
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-3 max-w-2xl mx-auto text-slate-700 text-base md:text-lg text-center"
          >
            Celebrando nuestras raíces en el municipio de La Pintada, Antioquia.
          </motion.p>
        </div>
      </header>

      <Section id="historia" title="Historia de La Pintada" icon={History}>
        <p>
          La Pintada se consolidó como punto clave de rutas comerciales entre el sur y occidente del país. Su desarrollo tomó fuerza con la llegada del ferrocarril y en 1997 se erigió como municipio del departamento de Antioquia.
        </p>
      </Section>

      <footer className="mt-10 border-t bg-white/60">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 text-xs text-slate-500 text-center">
          <p>Micrositio educativo sin fines comerciales para la Fiesta de la Antioqueñidad 2025 - La Pintada.</p>
        </div>
      </footer>
    </div>
  );
}
