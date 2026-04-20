/**
 * ROJAS PAINTING LLC — Home Page
 * Design: Modern Trade Professional
 * Palette: Red #CC1111 | Charcoal #2C2C2C | Gold #D4A017 | White | Beige #F8F4EE
 * Typography: Oswald (display) + Source Sans 3 (body)
 */

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Shield,
  Award,
  CheckCircle,
  ChevronDown,
  Menu,
  X,
  Paintbrush,
  Home,
  Building2,
  Hammer,
  Droplets,
  Layers,
  Bath,
  Wrench,
  TreePine,
  Star,
  ArrowRight,
} from "lucide-react";

// ─── Image URLs ────────────────────────────────────────────────────────────────
const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663539613072/ZfAM47EBxvQwVBnT7VSdSa/hero-painting-48xtX93aLt6cBUNCZAKMcJ.webp";
const INTERIOR_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663539613072/ZfAM47EBxvQwVBnT7VSdSa/interior-painting-aZWyzX7igiDcNH8v9sATbg.webp";
const EXTERIOR_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663539613072/ZfAM47EBxvQwVBnT7VSdSa/exterior-painting-g6mBAixoPmtKsnKcCQFzj4.webp";
const KITCHEN_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663539613072/ZfAM47EBxvQwVBnT7VSdSa/kitchen-remodel-2qWSo6gqkDsiVjNdDdzJoL.webp";
const POWERWASH_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663539613072/ZfAM47EBxvQwVBnT7VSdSa/power-wash-CB8W42ZNGMLaNSn2edwNfA.webp";

// ─── Animation helpers ─────────────────────────────────────────────────────────
function FadeInSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Services data ─────────────────────────────────────────────────────────────
const services = [
  {
    icon: Building2,
    title: "Commercial Painting",
    short: "Professional painting solutions for offices, retail spaces, and commercial properties with minimal disruption to your operations.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80",
    color: "from-red-900 to-red-700",
  },
  {
    icon: Home,
    title: "Exterior Painting",
    short: "Protect and beautify your home's exterior with durable finishes on siding, trim, doors, shutters, decks, and fences.",
    image: EXTERIOR_IMG,
    color: "from-slate-800 to-slate-600",
  },
  {
    icon: Paintbrush,
    title: "Interior Painting",
    short: "High-quality interior painting for walls, ceilings, trim, and doors — making every room feel brighter and refreshed.",
    image: INTERIOR_IMG,
    color: "from-stone-700 to-stone-500",
  },
  {
    icon: Hammer,
    title: "Kitchen Remodeling",
    short: "Cabinet refinishing, tile backsplash installation, and lighting upgrades to transform your kitchen affordably.",
    image: KITCHEN_IMG,
    color: "from-amber-800 to-amber-600",
  },
  {
    icon: Bath,
    title: "Bathroom Remodeling",
    short: "Complete bathroom transformations including tile, plumbing, electrical, and custom finishes for a spa-inspired look.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
    color: "from-teal-800 to-teal-600",
  },
  {
    icon: Droplets,
    title: "Power Washing",
    short: "Deep cleaning for siding, decks, patios, driveways, and walkways — restoring your property's original appearance.",
    image: POWERWASH_IMG,
    color: "from-blue-900 to-blue-700",
  },
  {
    icon: TreePine,
    title: "Deck Oil Stain",
    short: "Premium oil-based stains that penetrate deep into wood, enriching the grain and providing lasting weather protection.",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=600&q=80",
    color: "from-orange-900 to-orange-700",
  },
  {
    icon: Layers,
    title: "Flooring Installation",
    short: "Hardwood, engineered wood, vinyl, laminate, and tile installation with subfloor repair and refinishing services.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    color: "from-yellow-800 to-yellow-600",
  },
  {
    icon: Wrench,
    title: "Basements & Remodeling",
    short: "Basement finishing, framing, insulation, drywall, and complete interior remodeling for living rooms, bedrooms, and more.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
    color: "from-gray-800 to-gray-600",
  },
];

// ─── Stats ─────────────────────────────────────────────────────────────────────
const stats = [
  { value: "5+", label: "Years in Business" },
  { value: "500+", label: "Projects Completed" },
  { value: "2", label: "States Served" },
  { value: "100%", label: "Licensed & Insured" },
];

// ─── Nav links ─────────────────────────────────────────────────────────────────
const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

// ─── Main Component ────────────────────────────────────────────────────────────
export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8F4EE] font-body overflow-x-hidden">
      {/* ── NAVBAR ─────────────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#2C2C2C] shadow-2xl py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-[#CC1111] flex items-center justify-center rounded-sm">
              <Paintbrush className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <div className="font-display font-700 text-white text-lg leading-tight tracking-wider uppercase">
                Rojas Painting
              </div>
              <div className="text-[10px] text-[#D4A017] tracking-[0.2em] uppercase font-semibold">
                LLC
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="nav-link text-white/90 hover:text-white font-body font-600 text-sm tracking-wide uppercase transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="bg-[#CC1111] hover:bg-[#aa0e0e] text-white font-display font-600 uppercase tracking-wider text-sm px-5 py-2.5 transition-all duration-200 hover:shadow-lg hover:shadow-red-900/30"
            >
              Get a Free Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#2C2C2C] border-t border-white/10 px-6 py-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-white/90 font-body font-600 text-base uppercase tracking-wide text-left py-2 border-b border-white/10"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="bg-[#CC1111] text-white font-display font-600 uppercase tracking-wider text-sm px-5 py-3 mt-2"
            >
              Get a Free Quote
            </button>
          </motion.div>
        )}
      </header>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-start overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/70 to-transparent" />

        {/* Content */}
        <div className="container relative z-10 pt-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-[#D4A017]" />
              <span className="text-[#D4A017] font-display font-500 uppercase tracking-[0.25em] text-sm">
                Est. October 2020
              </span>
            </div>

            <h1 className="font-display font-700 text-white text-5xl md:text-7xl uppercase leading-none mb-4">
              Rojas
              <br />
              <span className="text-[#CC1111]">Painting</span>
              <br />
              LLC
            </h1>

            <p className="text-white/80 text-xl md:text-2xl font-body font-300 italic mb-8 leading-relaxed">
              "Excellence in every Project."
            </p>

            <p className="text-white/70 text-base md:text-lg font-body mb-10 max-w-lg leading-relaxed">
              Licensed and insured painting & remodeling contractor serving
              New Jersey and Pennsylvania with craftsmanship and genuine care.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                { icon: Shield, text: "Licensed & Insured" },
                { icon: Award, text: "License #13VH11795400" },
                { icon: CheckCircle, text: "Free Estimates" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-sm"
                >
                  <Icon className="w-4 h-4 text-[#D4A017]" />
                  <span className="text-white/90 text-sm font-body font-600">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("#contact")}
                className="bg-[#CC1111] hover:bg-[#aa0e0e] text-white font-display font-600 uppercase tracking-wider text-base px-8 py-4 transition-all duration-200 hover:shadow-xl hover:shadow-red-900/40 flex items-center gap-2"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo("#services")}
                className="border-2 border-white/60 hover:border-white text-white font-display font-600 uppercase tracking-wider text-base px-8 py-4 transition-all duration-200 hover:bg-white/10"
              >
                Our Services
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs uppercase tracking-widest font-body">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────────────────────── */}
      <section className="bg-[#2C2C2C] py-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeInSection key={stat.label} delay={i * 0.1} className="text-center">
                <div className="font-display font-700 text-[#D4A017] text-4xl md:text-5xl mb-1">
                  {stat.value}
                </div>
                <div className="text-white/70 font-body text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────────────────────────── */}
      <section id="about" className="py-24 bg-[#F8F4EE]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Image collage */}
            <FadeInSection className="relative">
              <div className="relative">
                <img
                  src={EXTERIOR_IMG}
                  alt="Exterior painting project"
                  className="w-full h-80 object-cover shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#CC1111] p-1 shadow-xl hidden md:block">
                  <img
                    src={INTERIOR_IMG}
                    alt="Interior painting"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Year badge */}
                <div className="absolute -top-4 -left-4 bg-[#2C2C2C] text-white px-6 py-4 shadow-xl">
                  <div className="font-display font-700 text-3xl text-[#D4A017]">2020</div>
                  <div className="text-xs uppercase tracking-widest text-white/70">Founded</div>
                </div>
              </div>
            </FadeInSection>

            {/* Right: Text */}
            <FadeInSection delay={0.2}>
              <div className="accent-bar" />
              <h2 className="font-display font-700 text-[#2C2C2C] text-4xl md:text-5xl uppercase mb-6">
                About <span className="text-[#CC1111]">Us</span>
              </h2>
              <p className="text-[#444] font-body text-lg leading-relaxed mb-6">
                Rojas Painting LLC has been proudly serving residential and commercial clients
                throughout New Jersey and Pennsylvania since 2020. We begin every project with
                careful preparation to ensure clean application and dependable, long-lasting results.
              </p>
              <p className="text-[#555] font-body leading-relaxed mb-8">
                Our philosophy is straightforward: be punctual, communicate clearly, and deliver
                work that enhances both the look and value of your property. From minor touch-ups
                to full transformations, we handle every space with professionalism, attention to
                detail, and genuine care.
              </p>

              {/* Mission & Vision */}
              <div className="space-y-5">
                <div className="border-l-4 border-[#CC1111] pl-5 py-2">
                  <h3 className="font-display font-600 text-[#2C2C2C] text-lg uppercase tracking-wide mb-1">
                    Our Mission
                  </h3>
                  <p className="text-[#555] font-body text-sm leading-relaxed">
                    Convert every residential and commercial space into something meaningful,
                    bringing craftsmanship and care that turns a house into a home.
                  </p>
                </div>
                <div className="border-l-4 border-[#D4A017] pl-5 py-2">
                  <h3 className="font-display font-600 text-[#2C2C2C] text-lg uppercase tracking-wide mb-1">
                    Our Vision
                  </h3>
                  <p className="text-[#555] font-body text-sm leading-relaxed">
                    To be the company that elevates ordinary spaces into inspiring places, known
                    for quality, trust, and results that make every project feel worthwhile.
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────────────────────── */}
      <section id="services" className="py-24 bg-[#2C2C2C]">
        <div className="container">
          <FadeInSection className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="accent-bar-gold" />
            </div>
            <h2 className="font-display font-700 text-white text-4xl md:text-5xl uppercase mb-4">
              Our <span className="text-[#CC1111]">Services</span>
            </h2>
            <p className="text-white/60 font-body text-lg max-w-2xl mx-auto">
              From a fresh coat of paint to a complete remodel — we handle every project
              with the same commitment to quality and craftsmanship.
            </p>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <FadeInSection key={service.title} delay={i * 0.07}>
                  <div
                    className="service-card bg-[#1a1a1a] overflow-hidden group cursor-pointer"
                    onMouseEnter={() => setActiveService(i)}
                    onMouseLeave={() => setActiveService(null)}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}
                      />
                      <div className="absolute top-4 left-4 bg-[#CC1111] p-2.5">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-display font-600 text-white text-xl uppercase tracking-wide mb-3">
                        {service.title}
                      </h3>
                      <p className="text-white/60 font-body text-sm leading-relaxed">
                        {service.short}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-[#D4A017] text-sm font-body font-600 group-hover:gap-3 transition-all">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8F4EE]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeInSection>
              <div className="accent-bar" />
              <h2 className="font-display font-700 text-[#2C2C2C] text-4xl md:text-5xl uppercase mb-8">
                Why Choose <span className="text-[#CC1111]">Rojas?</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Licensed & Insured",
                    desc: "Fully licensed under NJ Home Improvement License #13VH11795400 and completely insured for your peace of mind.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Customized Solutions",
                    desc: "Every project is unique. We tailor our approach to your specific needs, budget, and timeline.",
                  },
                  {
                    icon: Star,
                    title: "Transparent Communication",
                    desc: "Clear estimates, honest timelines, and regular updates throughout every project — no surprises.",
                  },
                  {
                    icon: Award,
                    title: "Quality Craftsmanship",
                    desc: "We use professional-grade materials and proven techniques to deliver results that last.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#CC1111] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-600 text-[#2C2C2C] text-lg uppercase tracking-wide mb-1">
                        {title}
                      </h3>
                      <p className="text-[#555] font-body text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>

            {/* Commercial painting process */}
            <FadeInSection delay={0.2}>
              <div className="bg-[#2C2C2C] p-8">
                <div className="accent-bar-gold" />
                <h3 className="font-display font-600 text-white text-2xl uppercase tracking-wide mb-6">
                  Commercial Painting Process
                </h3>
                <div className="space-y-5">
                  {[
                    { num: "01", title: "Site Visit & Assessment", desc: "We examine the area and give you a clear estimate with a realistic schedule." },
                    { num: "02", title: "Project Coordination", desc: "We organize work to align with your business hours to minimize disruptions." },
                    { num: "03", title: "Surface Preparation", desc: "We protect your space and address repairs, sanding, and priming." },
                    { num: "04", title: "Skilled Application", desc: "Professional techniques for uniform coverage and a polished finish." },
                    { num: "05", title: "Final Inspection", desc: "We review everything with you, handle touch-ups, and leave the area clean." },
                  ].map((step) => (
                    <div key={step.num} className="flex gap-4 items-start">
                      <div className="font-display font-700 text-[#D4A017] text-2xl leading-none w-10 flex-shrink-0">
                        {step.num}
                      </div>
                      <div>
                        <div className="font-display font-600 text-white text-sm uppercase tracking-wide mb-0.5">
                          {step.title}
                        </div>
                        <div className="text-white/50 font-body text-sm">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${KITCHEN_IMG})` }}
        />
        <div className="absolute inset-0 bg-[#CC1111]/90" />
        <div className="container relative z-10 text-center">
          <FadeInSection>
            <h2 className="font-display font-700 text-white text-4xl md:text-6xl uppercase mb-4">
              Ready to Transform
              <br />
              Your Space?
            </h2>
            <p className="text-white/80 font-body text-xl mb-10 max-w-xl mx-auto">
              Contact us today for a free, no-obligation estimate. We serve all of New Jersey and Pennsylvania.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:7324562194"
                className="bg-white text-[#CC1111] font-display font-700 uppercase tracking-wider text-base px-8 py-4 hover:bg-[#F8F4EE] transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                732-456-2194
              </a>
              <a
                href="mailto:mrojaspainting@gmail.com"
                className="border-2 border-white text-white font-display font-700 uppercase tracking-wider text-base px-8 py-4 hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 bg-[#F8F4EE]">
        <div className="container">
          <FadeInSection className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="accent-bar" />
            </div>
            <h2 className="font-display font-700 text-[#2C2C2C] text-4xl md:text-5xl uppercase mb-4">
              Get in <span className="text-[#CC1111]">Touch</span>
            </h2>
            <p className="text-[#555] font-body text-lg max-w-xl mx-auto">
              Request a free estimate or ask us anything. We respond promptly and are always happy to help.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <FadeInSection>
              <div className="space-y-8">
                <div>
                  <h3 className="font-display font-600 text-[#2C2C2C] text-2xl uppercase tracking-wide mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-5">
                    {[
                      {
                        icon: Phone,
                        label: "Phone",
                        value: "732-456-2194",
                        href: "tel:7324562194",
                      },
                      {
                        icon: Mail,
                        label: "Email",
                        value: "mrojaspainting@gmail.com",
                        href: "mailto:mrojaspainting@gmail.com",
                      },
                      {
                        icon: MapPin,
                        label: "Service Area",
                        value: "New Jersey & Pennsylvania",
                        href: null,
                      },
                    ].map(({ icon: Icon, label, value, href }) => (
                      <div key={label} className="flex gap-4 items-start">
                        <div className="w-12 h-12 bg-[#2C2C2C] flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-[#D4A017]" />
                        </div>
                        <div>
                          <div className="font-display font-600 text-[#2C2C2C] text-sm uppercase tracking-wide mb-0.5">
                            {label}
                          </div>
                          {href ? (
                            <a
                              href={href}
                              className="text-[#CC1111] font-body font-600 hover:underline"
                            >
                              {value}
                            </a>
                          ) : (
                            <span className="text-[#444] font-body">{value}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* License info */}
                <div className="bg-[#2C2C2C] p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-5 h-5 text-[#D4A017]" />
                    <span className="font-display font-600 text-white uppercase tracking-wide text-sm">
                      License Information
                    </span>
                  </div>
                  <p className="text-white/70 font-body text-sm">
                    NJ Home Improvement License No.{" "}
                    <span className="text-[#D4A017] font-600">13VH11795400</span>
                  </p>
                  <p className="text-white/50 font-body text-xs mt-1">
                    Licensed, Insured and fully committed to Safety.
                  </p>
                </div>
              </div>
            </FadeInSection>

            {/* Contact Form */}
            <FadeInSection delay={0.2}>
              <form
                className="bg-white shadow-xl p-8 space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! We will contact you shortly.");
                }}
              >
                <h3 className="font-display font-600 text-[#2C2C2C] text-2xl uppercase tracking-wide mb-2">
                  Request a Free Quote
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body font-600 text-[#2C2C2C] text-sm uppercase tracking-wide mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-[#ddd] px-4 py-3 font-body text-sm focus:outline-none focus:border-[#CC1111] transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block font-body font-600 text-[#2C2C2C] text-sm uppercase tracking-wide mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-[#ddd] px-4 py-3 font-body text-sm focus:outline-none focus:border-[#CC1111] transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-body font-600 text-[#2C2C2C] text-sm uppercase tracking-wide mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-[#ddd] px-4 py-3 font-body text-sm focus:outline-none focus:border-[#CC1111] transition-colors"
                    placeholder="(732) 000-0000"
                  />
                </div>
                <div>
                  <label className="block font-body font-600 text-[#2C2C2C] text-sm uppercase tracking-wide mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full border border-[#ddd] px-4 py-3 font-body text-sm focus:outline-none focus:border-[#CC1111] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block font-body font-600 text-[#2C2C2C] text-sm uppercase tracking-wide mb-1.5">
                    Service Needed
                  </label>
                  <select className="w-full border border-[#ddd] px-4 py-3 font-body text-sm focus:outline-none focus:border-[#CC1111] transition-colors bg-white">
                    <option value="general">Select a service...</option>
                    <option value="commercial">Commercial Painting</option>
                    <option value="exterior">Exterior Painting</option>
                    <option value="interior">Interior Painting</option>
                    <option value="kitchen">Kitchen Remodeling</option>
                    <option value="bathroom">Bathroom Remodeling</option>
                    <option value="powerwash">Power Washing</option>
                    <option value="deck">Deck Oil Stain</option>
                    <option value="flooring">Flooring Installation</option>
                    <option value="basement">Basements & Remodeling</option>
                  </select>
                </div>
                <div>
                  <label className="block font-body font-600 text-[#2C2C2C] text-sm uppercase tracking-wide mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border border-[#ddd] px-4 py-3 font-body text-sm focus:outline-none focus:border-[#CC1111] transition-colors resize-none"
                    placeholder="Describe your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#CC1111] hover:bg-[#aa0e0e] text-white font-display font-600 uppercase tracking-wider text-base py-4 transition-all duration-200 hover:shadow-lg hover:shadow-red-900/30 flex items-center justify-center gap-2"
                >
                  Send Request
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer className="bg-[#1a1a1a] py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#CC1111] flex items-center justify-center">
                  <Paintbrush className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-display font-700 text-white text-lg uppercase tracking-wider">
                    Rojas Painting LLC
                  </div>
                </div>
              </div>
              <p className="text-white/50 font-body text-sm leading-relaxed">
                Excellence in every project. Serving New Jersey and Pennsylvania since 2020.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-600 text-white uppercase tracking-wider text-sm mb-4">
                Quick Links
              </h4>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="block text-white/50 hover:text-[#D4A017] font-body text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-600 text-white uppercase tracking-wider text-sm mb-4">
                Contact
              </h4>
              <div className="space-y-3">
                <a
                  href="tel:7324562194"
                  className="flex items-center gap-2 text-white/50 hover:text-[#D4A017] font-body text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  732-456-2194
                </a>
                <a
                  href="mailto:mrojaspainting@gmail.com"
                  className="flex items-center gap-2 text-white/50 hover:text-[#D4A017] font-body text-sm transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  mrojaspainting@gmail.com
                </a>
                <div className="flex items-center gap-2 text-white/50 font-body text-sm">
                  <MapPin className="w-4 h-4" />
                  New Jersey & Pennsylvania
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 font-body text-xs">
              © {new Date().getFullYear()} Rojas Painting LLC. All rights reserved.
            </p>
            <p className="text-white/30 font-body text-xs">
              NJ License #13VH11795400 · Owner: Mauro Rojas
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
