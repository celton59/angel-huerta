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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md py-2 md:py-3 shadow-md' : 'bg-transparent py-3 md:py-6'}`}>
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

        <button className="md:hidden p-1 -mr-1 min-w-[56px] min-h-[56px] flex items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
          {isOpen 
            ? <CloseCircleBold className={scrolled ? 'text-slate-900' : 'text-white'} width={48} height={48} /> 
            : <HamburgerMenuBold className={scrolled ? 'text-slate-900' : 'text-white'} width={48} height={48} />
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
    <section id="inicio" className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden bg-slate-950">
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
          className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-500 px-4 py-1 rounded-full text-xs font-black mb-4 md:mb-8 tracking-[0.2em]"
        >
          <StarFallBold width={14} height={14} /> MÁS DE 40 AÑOS DE OFICIO
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-4xl md:text-9xl font-black text-white mb-4 md:mb-8 tracking-tighter leading-[0.9]"
        >
          TU BARBERO <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 italic font-serif">de Confianza.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-base md:text-xl text-slate-300 mb-8 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Cortes de precisión, afeitado clásico a navaja y el trato cercano de toda la vida. Puerto de Sagunto.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <a href="#reservar" className="w-full sm:w-auto flex justify-center">
            <Button variant="primary" className="h-12 md:h-16 px-8 md:px-10 text-base md:text-lg group w-full sm:w-auto max-w-xs">
                RESERVAR CITA <AltArrowRightBold width={20} height={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a href="#servicios" className="w-full sm:w-auto flex justify-center">
            <Button variant="outline" className="h-12 md:h-16 px-8 md:px-10 text-base md:text-lg border-white/20 text-white hover:bg-white/10 w-full sm:w-auto max-w-xs">
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
    { title: "Corte Caballero", price: "12€", icon: "✂️", desc: "Corte a tijera o máquina adaptado a tu estilo. 20 minutos de atención personalizada." },
    { title: "Corte + Retoque Barba", price: "12€", icon: "🪒", desc: "Corte completo más perfilado y retoque de barba en una sola sesión." },
    { title: "Degradado", price: "12€", icon: "💈", desc: "Degradado limpio y preciso. Skin fade, mid fade o lo que pidas." },
    { title: "Corte Niños y Bebés", price: "10€", icon: "👦", desc: "Corte infantil con trato cercano y paciente. Que los peques salgan con su mejor sonrisa." }
  ];

  return (
    <section id="servicios" className="py-10 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-20">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-3 md:mb-6 tracking-tighter">Servicios <br/>Exclusivos</h2>
            <p className="text-slate-500 text-sm md:text-lg border-l-4 border-amber-600 pl-4 md:pl-6">Más de 40 años perfeccionando cada corte, cada navajado, cada detalle.</p>
          </div>
          <div className="hidden md:block text-slate-300 font-black text-9xl select-none opacity-20 translate-y-8">
            01
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col p-4 md:p-10 rounded-2xl md:rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-4 transition-all duration-500"
            >
              <div className="w-12 h-12 md:w-20 md:h-20 bg-amber-600/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-8 group-hover:scale-110 transition-transform">
                <span className="text-2xl md:text-4xl">{service.icon}</span>
              </div>
              <h3 className="text-sm md:text-xl font-black text-slate-900 mb-1 md:mb-3 md:min-h-[56px] flex items-start">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium text-xs md:text-sm flex-1 hidden md:block">{service.desc}</p>
              <div className="flex items-center justify-end mt-3 md:mt-8 pt-3 md:pt-6 border-t border-slate-100">
                <span className="text-xl md:text-4xl font-black text-amber-600">{service.price}</span>
              </div>
            </div>
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
    <section id="galeria" className="py-10 md:py-32 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-7xl font-black text-white mb-4 md:mb-6">
          NUESTRA <span className="text-amber-500">GALERÍA</span>
        </h2>
        <div className="w-16 md:w-24 h-1 bg-amber-600 mx-auto rounded-full mb-6 md:mb-16" />

        {/* Desktop: grid | Mobile: horizontal scroll */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img src={img.url} alt="Trabajo realizado" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent p-8 flex flex-col justify-end text-left translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-amber-500 font-black text-xs tracking-widest mb-2">{img.tag}</span>
                <p className="text-white font-bold text-xl">Estilo Personalizado</p>
              </div>
            </div>
          ))}
        </div>
        {/* Mobile: horizontal swipe gallery */}
        <div className="sm:hidden flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory px-1 -mx-1 pb-4">
          {images.map((img, i) => (
            <div key={i} className="snap-center shrink-0 w-[220px] h-[280px] rounded-2xl overflow-hidden relative">
              <img src={img.url} alt="Trabajo realizado" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent p-6 flex flex-col justify-end">
                <span className="text-amber-500 font-black text-xs tracking-widest mb-1">{img.tag}</span>
                <p className="text-white font-bold">Estilo Personalizado</p>
              </div>
            </div>
          ))}
        </div>
        <p className="sm:hidden text-center text-white/30 text-xs mt-4">Desliza para ver más →</p>
      </div>
    </section>
  );
};

// --- Testimonios Reales (de Booksy) ---
const Testimonials = () => {
  const reviews = [
    { name: "Miguel Ángel", text: "Siempre perfecto y atento.", date: "Mar 2026" },
    { name: "Alejandro", text: "Muy profesional.", date: "Mar 2026" },
    { name: "Lourdes", text: "Ha dejado al niño súper bien, me ha gustado. Buen trato, amable. Gracias.", date: "Feb 2026" },
    { name: "Benjamin", text: "Buen corte, y trato excelente.", date: "Nov 2025" },
    { name: "Vanessa", text: "Ángel es un profesional! La primera vez que le hacen el corte que queríamos a mi hijo. Iremos siempre.", date: "Jun 2025" },
    { name: "Luis", text: "Muy buen profesional.", date: "Jul 2025" },
  ];

  return (
    <section className="py-10 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-20">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-3 md:mb-6 tracking-tighter">Lo que dicen<br/>nuestros <span className="text-amber-500">clientes</span></h2>
            <p className="text-slate-500 text-sm md:text-lg border-l-4 border-amber-600 pl-4 md:pl-6">5.0 ★ en Booksy · 103 reseñas verificadas</p>
          </div>
          <div className="hidden md:block text-slate-300 font-black text-9xl select-none opacity-20 translate-y-8">02</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="p-4 md:p-8 rounded-2xl md:rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-0.5 mb-2 md:mb-4">
                {[1,2,3,4,5].map(s => (
                  <StarBold key={s} width={14} height={14} className="text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed mb-3 md:mb-6 italic text-sm md:text-base">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-600/10 rounded-full flex items-center justify-center text-amber-600 font-black text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{review.name}</p>
                    <p className="text-slate-400 text-xs">Booksy · {review.date}</p>
                  </div>
                </div>
                <CheckCircleBold width={16} height={16} className="text-green-500" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://booksy.com/es-es/167979_barberia-y-peluqueria-caballero-y-ninos-angel-huerta_barberia_57248_playa-de-almarda#reviews-section" target="_blank" rel="noopener noreferrer" className="text-amber-600 font-bold hover:underline inline-flex items-center gap-2">
            Ver todas las reseñas en Booksy <AltArrowRightBold width={16} height={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

// --- Sección de Booksy ---
const BooksySection = () => {
  const booksyUrl = "https://booksy.com/es-es/167979_barberia-y-peluqueria-caballero-y-ninos-angel-huerta_barberia_57248_playa-de-almarda"; 

  return (
    <section id="reservar" className="py-10 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-slate-900 rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-600/10 skew-x-12 translate-x-1/4 pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-0 relative z-10">
            <div className="p-6 md:p-20 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-amber-500 mb-6">
                <div className="w-10 h-1 border-t-2 border-amber-500" />
                <span className="text-xs font-black tracking-[0.3em] uppercase">Reserva Online</span>
              </div>
              
              <h2 className="text-2xl md:text-6xl font-black text-white mb-4 md:mb-8 leading-tight tracking-tighter">
                Gestiona tu cita <br/>vía <span className="text-amber-500">Booksy.</span>
              </h2>
              
              <p className="text-slate-400 text-sm md:text-lg mb-6 md:mb-10 leading-relaxed">
                Agenda tu visita en segundos: elige profesional, servicio y hora con confirmación al instante.
              </p>

              <div className="space-y-2 md:space-y-4 mb-6 md:mb-12">
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

              <a 
                href={booksyUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-amber-600 text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-base md:text-xl hover:bg-amber-700 hover:scale-105 transition-all shadow-xl shadow-amber-900/40"
              >
                RESERVAR AHORA <LinkRoundBold width={20} height={20} />
              </a>
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
    <section id="contacto" className="py-10 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-4 md:mb-8 tracking-tighter">Visítanos en <br/><span className="text-amber-600 underline decoration-slate-900">Puerto de Sagunto.</span></h2>
            
            <div className="grid grid-cols-2 gap-3 md:gap-6 mt-6 md:mt-12">
              <div className="p-4 md:p-8 rounded-2xl md:rounded-3xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-600/10 text-amber-600 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-6">
                  <MapPointBold width={20} height={20} />
                </div>
                <h4 className="font-black text-slate-900 mb-1 md:mb-2 uppercase tracking-widest text-[10px] md:text-xs">Ubicación</h4>
                <p className="text-slate-600 font-medium text-xs md:text-base">C. Sant Vicent, 31<br/>46520 Port de Sagunt</p>
              </div>

              <div className="p-4 md:p-8 rounded-2xl md:rounded-3xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-600/10 text-amber-600 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-6">
                  <ClockCircleBold width={20} height={20} />
                </div>
                <h4 className="font-black text-slate-900 mb-1 md:mb-2 uppercase tracking-widest text-[10px] md:text-xs">Horario</h4>
                <ul className="text-slate-600 font-medium text-[11px] md:text-sm space-y-0.5 md:space-y-1">
                  <li>Mar-Vie: 10–14 / 17–20</li>
                  <li>Sáb: 10–14</li>
                  <li className="text-slate-400">Lun-Dom: Cerrado</li>
                </ul>
              </div>

              <div className="p-4 md:p-8 rounded-2xl md:rounded-3xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-600/10 text-amber-600 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-6">
                  <PhoneBold width={20} height={20} />
                </div>
                <h4 className="font-black text-slate-900 mb-1 md:mb-2 uppercase tracking-widest text-[10px] md:text-xs">Llámanos</h4>
                <p className="text-slate-600 font-bold text-sm md:text-lg">656 40 90 27</p>
              </div>

              <div className="p-4 md:p-8 rounded-2xl md:rounded-3xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-600/10 text-amber-600 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-6">
                  <LetterBold width={20} height={20} />
                </div>
                <h4 className="font-black text-slate-900 mb-1 md:mb-2 uppercase tracking-widest text-[10px] md:text-xs">WhatsApp</h4>
                <p className="text-slate-600 font-medium text-xs md:text-sm">656 40 90 27</p>
              </div>
            </div>
          </div>

          <div className="w-full h-[300px] lg:h-full min-h-[300px] md:min-h-[450px] rounded-2xl md:rounded-[3rem] overflow-hidden border-4 md:border-8 border-slate-50 shadow-2xl bg-slate-100"
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
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => (
  <footer className="bg-slate-950 text-white pt-12 md:pt-24 pb-12 px-4 md:px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12 border-b border-white/5 pb-8 md:pb-16 mb-6 md:mb-12 text-center md:text-left">
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
      © {new Date().getFullYear()} ÁNGEL HUERTA BARBER STUDIO.
    </div>
  </footer>
);

// --- Cookie Banner ---
const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('ah_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = (analytics) => {
    localStorage.setItem('ah_cookie_consent', JSON.stringify({ essential: true, analytics, ts: Date.now() }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50"
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-2xl">🍪</span>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Utilizamos cookies</h4>
              <p className="text-slate-500 text-xs leading-relaxed">Usamos cookies esenciales para que la web funcione y opcionales para mejorar tu experiencia.</p>
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <button onClick={() => accept(false)} className="px-4 py-2 text-xs font-semibold text-slate-500 hover:bg-slate-50 rounded-full transition">
              Solo esenciales
            </button>
            <button onClick={() => accept(true)} className="px-4 py-2 text-xs font-semibold bg-amber-600 text-white rounded-full hover:bg-amber-700 transition">
              Aceptar todas
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// --- Mobile Bottom Tab Bar ---
const MobileTabBar = () => {
  const [active, setActive] = useState('inicio');

  useEffect(() => {
    const sections = ['inicio', 'servicios', 'galeria', 'reservar', 'contacto'];
    const handleScroll = () => {
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 200) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = [
    { id: 'inicio', label: 'Inicio', icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>
    )},
    { id: 'servicios', label: 'Servicios', icon: <ScissorsBold width={24} height={24} /> },
    { id: 'reservar', label: 'Reservar', icon: (
      <div className="w-14 h-14 -mt-7 bg-amber-600 rounded-full flex items-center justify-center shadow-lg shadow-amber-600/30 text-white">
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/></svg>
      </div>
    ), special: true },
    { id: 'galeria', label: 'Galería', icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"/></svg>
    )},
    { id: 'contacto', label: 'Contacto', icon: <MapPointBold width={24} height={24} /> },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-slate-100 safe-bottom">
      <div className="flex items-end justify-around px-2 py-2">
        {tabs.map(tab => (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            className={`flex flex-col items-center gap-0.5 py-1 px-3 transition-colors ${
              tab.special ? '' : active === tab.id ? 'text-amber-600' : 'text-slate-400'
            }`}
            onClick={() => setActive(tab.id)}
          >
            {tab.icon}
            {!tab.special && <span className="text-[10px] font-semibold">{tab.label}</span>}
          </a>
        ))}
      </div>
    </div>
  );
};

// --- WhatsApp Floating Button ---
const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/34656409027?text=Hola%2C%20quer%C3%ADa%20pedir%20cita%20para%20la%20barber%C3%ADa"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    className="fixed bottom-6 right-6 z-[60] w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/30 hover:scale-110 transition-transform"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 2, type: "spring", stiffness: 200 }}
  >
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
  </motion.a>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-amber-500 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <BooksySection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}
