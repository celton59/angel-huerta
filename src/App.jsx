import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ScissorsBold,
  StarBold,
  PhoneBold,
  MapPointBold,
  ClockCircleBold,
  HamburgerMenuBold,
  CloseCircleBold,
  AltArrowRightBold,
  StarFallBold,
  LinkRoundBold,
  CheckCircleBold,
  LetterBold,
  StarsBold,
} from 'solar-icon-set';

// --- Componentes de UI Reutilizables ---
const Button = ({ children, className = "", variant = "primary", ...props }) => {
  const variants = {
    primary: "bg-amber-600 text-white hover:bg-amber-700 shadow-lg shadow-amber-900/20",
    outline: "border border-slate-300 text-slate-700 hover:bg-slate-50",
    ghost: "text-slate-600 hover:bg-slate-100"
  };
  return (
    <motion.button 
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

// --- Navegación ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <motion.div 
            whileHover={{ rotate: 180 }}
            className="bg-amber-600 p-2 rounded-lg"
          >
            <ScissorsBold className="text-white" width={20} height={20} />
          </motion.div>
          <span className={`text-xl font-black tracking-tighter ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            ÁNGEL HUERTA
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-bold tracking-wide transition-colors hover:text-amber-500 ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}
            >
              {link.name.toUpperCase()}
            </a>
          ))}
          <a href="#reservar">
            <Button variant="primary" className="text-xs px-6 py-2">RESERVAR EN BOOKSY</Button>
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen 
            ? <CloseCircleBold className={scrolled ? 'text-slate-900' : 'text-white'} width={24} height={24} /> 
            : <HamburgerMenuBold className={scrolled ? 'text-slate-900' : 'text-white'} width={24} height={24} />
          }
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 md:hidden shadow-2xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-800">
                {link.name.toUpperCase()}
              </a>
            ))}
            <a href="#reservar" onClick={() => setIsOpen(false)}>
                <Button className="w-full">RESERVAR EN BOOKSY</Button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Hero Section ---
const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/img/hero-bg.jpg" 
          alt="Interior de la Barbería" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/60" />
      </div>

      <div className="relative z-10 max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-500 px-4 py-1 rounded-full text-xs font-black mb-8 tracking-[0.2em]"
        >
          <StarFallBold width={14} height={14} /> MÁS DE 40 AÑOS DE OFICIO
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.9]"
        >
          TU BARBERO <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 italic font-serif">de Confianza.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Cortes de precisión, afeitado clásico a navaja y el trato cercano de toda la vida. Puerto de Sagunto.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#reservar">
            <Button variant="primary" className="h-16 px-10 text-lg group">
                RESERVAR CITA <AltArrowRightBold width={20} height={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a href="#servicios">
            <Button variant="outline" className="h-16 px-10 text-lg border-white/20 text-white hover:bg-white/10">
                VER SERVICIOS
            </Button>
          </a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-amber-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

// --- Servicios ---
const Services = () => {
  const services = [
    { title: "Corte Caballero", price: "12€", Icon: ScissorsBold, desc: "Corte a tijera o máquina adaptado a tu estilo. 20 minutos de atención personalizada." },
    { title: "Corte + Retoque Barba", price: "12€", Icon: StarsBold, desc: "Corte completo más perfilado y retoque de barba en una sola sesión." },
    { title: "Degradado", price: "12€", Icon: StarBold, desc: "Degradado limpio y preciso. Skin fade, mid fade o lo que pidas." },
    { title: "Corte Niños y Bebés", price: "10€", Icon: StarFallBold, desc: "Corte infantil con trato cercano y paciente. Que los peques salgan con su mejor sonrisa." }
  ];

  return (
    <section id="servicios" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">Servicios <br/>Exclusivos</h2>
            <p className="text-slate-500 text-lg border-l-4 border-amber-600 pl-6">Más de 40 años perfeccionando cada corte, cada navajado, cada detalle.</p>
          </motion.div>
          <div className="hidden md:block text-slate-300 font-black text-9xl select-none opacity-20 translate-y-8">
            01
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -15 }}
              className="group p-12 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500"
            >
              <div className="w-16 h-16 bg-amber-600 text-white rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-amber-600/20 group-hover:rotate-6 transition-transform">
                <service.Icon width={32} height={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-500 mb-10 leading-relaxed font-medium">{service.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-4xl font-black text-slate-900">{service.price}</span>
                <a href="#reservar">
                    <motion.button 
                      whileHover={{ x: 5 }}
                      className="bg-slate-900 text-white p-4 rounded-full"
                    >
                      <AltArrowRightBold width={20} height={20} />
                    </motion.button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Galería ---
const Gallery = () => {
  const images = [
    { url: "/img/gallery-1.jpg", tag: "DEGRADADO" },
    { url: "/img/gallery-2.jpg", tag: "BARBA" },
    { url: "/img/gallery-3.jpg", tag: "CLÁSICO" },
    { url: "/img/gallery-4.jpg", tag: "ESTILO" }
  ];

  return (
    <section id="galeria" className="py-32 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-white mb-6"
        >
          NUESTRA <span className="text-amber-500">GALERÍA</span>
        </motion.h2>
        <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-16" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img 
                src={img.url} 
                alt="Trabajo realizado" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent p-8 flex flex-col justify-end text-left translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-amber-500 font-black text-xs tracking-widest mb-2">{img.tag}</span>
                <p className="text-white font-bold text-xl">Estilo Personalizado</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Sección de Booksy ---
const BooksySection = () => {
  const booksyUrl = "https://booksy.com/es-es/167979_barberia-y-peluqueria-caballero-y-ninos-angel-huerta_barberia_57248_playa-de-almarda"; 

  return (
    <section id="reservar" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-600/10 skew-x-12 translate-x-1/4 pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-0 relative z-10">
            <div className="p-10 md:p-20 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 text-amber-500 mb-6"
              >
                <div className="w-10 h-1 border-t-2 border-amber-500" />
                <span className="text-xs font-black tracking-[0.3em] uppercase">Reserva Online</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter">
                Gestiona tu cita <br/>vía <span className="text-amber-500">Booksy.</span>
              </h2>
              
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Agenda tu visita en segundos: elige profesional, servicio y hora con confirmación al instante.
              </p>

              <div className="space-y-4 mb-12">
                {[
                    "Disponibilidad real 24/7",
                    "Recordatorios automáticos",
                    "Gestión de citas desde el móvil",
                    "Promociones exclusivas"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300">
                        <CheckCircleBold width={18} height={18} className="text-amber-500" />
                        <span className="font-medium">{item}</span>
                    </div>
                ))}
              </div>

              <motion.a 
                href={booksyUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-center gap-3 bg-amber-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-amber-700 transition-all shadow-xl shadow-amber-900/40"
              >
                RESERVAR AHORA <LinkRoundBold width={20} height={20} />
              </motion.a>
            </div>

            <div className="hidden md:flex items-center justify-center bg-slate-950/30 p-12">
                <div className="relative w-64 h-[500px] bg-slate-900 rounded-[2.5rem] border-8 border-slate-800 shadow-2xl overflow-hidden p-6">
                    <div className="w-10 h-1 bg-slate-800 mx-auto rounded-full mb-8" />
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-amber-600/20" />
                            <div className="w-24 h-3 bg-white/10 rounded-full" />
                        </div>
                        <div className="w-full h-32 bg-white/5 rounded-2xl" />
                        <div className="grid grid-cols-3 gap-2">
                            {[...Array(9)].map((_, i) => (
                                <div key={i} className="h-8 bg-white/5 rounded-md" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Sección de Contacto ---
const ContactSection = () => {
  return (
    <section id="contacto" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">Visítanos en <br/><span className="text-amber-600 underline decoration-slate-900">Puerto de Sagunto.</span></h2>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 bg-amber-600/10 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                  <MapPointBold width={24} height={24} />
                </div>
                <h4 className="font-black text-slate-900 mb-2 uppercase tracking-widest text-xs">Ubicación</h4>
                <p className="text-slate-600 font-medium">C. Sant Vicent, 31<br/>46520 Port de Sagunt, Valencia</p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 bg-amber-600/10 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                  <ClockCircleBold width={24} height={24} />
                </div>
                <h4 className="font-black text-slate-900 mb-2 uppercase tracking-widest text-xs">Horario</h4>
                <ul className="text-slate-600 font-medium text-sm space-y-1">
                  <li>Mar - Vie: 10:00–14:00 / 17:00–20:00</li>
                  <li>Sábados: 10:00–14:00</li>
                  <li className="text-slate-400">Lun y Dom: Cerrado</li>
                </ul>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 bg-amber-600/10 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                  <PhoneBold width={24} height={24} />
                </div>
                <h4 className="font-black text-slate-900 mb-2 uppercase tracking-widest text-xs">Llámanos</h4>
                <p className="text-slate-600 font-bold text-lg">656 40 90 27</p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 bg-amber-600/10 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                  <LetterBold width={24} height={24} />
                </div>
                <h4 className="font-black text-slate-900 mb-2 uppercase tracking-widest text-xs">Email</h4>
                <p className="text-slate-600 font-medium text-sm">WhatsApp: 656 40 90 27</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full h-[500px] lg:h-full min-h-[450px] rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-2xl bg-slate-100"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079!2d-0.2148211!3d39.6644058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6016102c78656d%3A0xf828d336b4847bc7!2sPeluquer%C3%ADa%20Barber%C3%ADa%20Caballeros%20Y%20Ni%C3%B1os%20%C3%81ngel%20Huerta!5e0!3m2!1ses!2ses!4v1" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Ubicación"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => (
  <footer className="bg-slate-950 text-white pt-24 pb-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 border-b border-white/5 pb-16 mb-12 text-center md:text-left">
      <div>
        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
          <ScissorsBold className="text-amber-500" width={32} height={32} />
          <span className="text-3xl font-black tracking-tighter">ÁNGEL HUERTA</span>
        </div>
        <p className="text-slate-500 max-w-sm">Barbería profesional en Puerto de Sagunto. Tu estilo, nuestra pasión desde hace más de 40 años.</p>
      </div>
      <div className="flex flex-col items-center md:items-end gap-6">
        <div className="flex items-center gap-2 text-slate-500 text-xs font-bold tracking-widest uppercase">
            <MapPointBold width={14} height={14} className="text-amber-500" />
            <span>PUERTO DE SAGUNTO, VALENCIA</span>
        </div>
      </div>
    </div>
    <div className="text-center text-slate-600 text-[10px] font-black tracking-[0.4em] uppercase">
      © 2024 ÁNGEL HUERTA BARBER STUDIO.
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-amber-500 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <BooksySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
