import { useState, useEffect, useRef } from "react";
import {
  Shield, MapPin, Zap, Droplets, Building2, Star, Award, ChevronDown, ChevronUp,
  Clock, Users, TrendingUp, Phone, Mail, Calendar, ArrowRight, Check, X,
  Wind, Wifi, Car, TreePine, Dumbbell, Film, BookOpen, Baby, UtensilsCrossed,
  Waves, Sun, Lock, Eye, Home, DollarSign, BarChart3, Sparkles, Crown,
  ChevronLeft, ChevronRight, Play, Pause, Menu, XIcon, Globe, Landmark,
  GraduationCap, Heart, Coffee, ShoppingBag, Stethoscope, ArrowUp, MessageCircle,
  User, Send, PhoneCall, ExternalLink
} from "lucide-react";

// ─── COLOR CONSTANTS ────────────────────────────────────────
const C = {
  navy: "#0A2463",
  navyLight: "#0E2D75",
  gold: "#D4AF37",
  goldLight: "#E8CC6E",
  cream: "#FAF9F6",
  green: "#2D5016",
  greenLight: "#3A6B1E",
  gray: "#E8E8E8",
  grayDark: "#6B7280",
  burgundy: "#800020",
  sky: "#87CEEB",
  white: "#FFFFFF",
  dark: "#111827",
  whatsapp: "#25D366",
  viber: "#7360F2",
};

// ─── CONTACT CONSTANTS ──────────────────────────────────────
const CONTACT = {
  name: "Ronnel C. Estrada",
  title: "Property Specialist II",
  company: "Shang Properties Inc.",
  phone: "+63 956 651 0333",
  phoneRaw: "639566510333",
  email1: "ronnel.estrada@shangproperties.com",
  email2: "ronnelestrada28@gmail.com",
  whatsapp: "https://wa.me/639566510333?text=Hi%20Ronnel%2C%20I%27m%20interested%20in%20Shang%20Bauhinia%20Residences",
  viber: "viber://chat?number=639566510333",
};

// ─── WHATSAPP SVG ICON ──────────────────────────────────────
function WhatsAppIcon({ size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

// ─── VIBER SVG ICON ─────────────────────────────────────────
function ViberIcon({ size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.538 6.769.378 10.01.218 13.252.028 19.108 5.686 20.666h.004l-.004 2.418s-.038.976.607 1.174c.778.24 1.236-.502 1.98-1.304.408-.44.972-1.086 1.397-1.58 3.85.322 6.813-.416 7.15-.528.778-.258 5.18-.818 5.896-6.672.74-6.036-.356-9.848-2.35-11.574C18.94.852 15.236.012 11.4 0zm.356 1.886c3.37.012 6.614.72 8.16 2.126 1.63 1.42 2.588 4.676 1.948 9.862-.58 4.744-4.14 5.126-4.806 5.348-.28.092-2.806.718-5.996.538 0 0-2.376 2.866-3.12 3.618-.118.12-.256.168-.348.144-.128-.034-.164-.186-.16-.41l.026-3.93C3.5 17.862 2.14 14.522 2.272 10.072c.134-2.778.792-4.972 2.15-6.308 1.928-1.764 5.606-1.876 7.334-1.878zm-.08 3.24a.5.5 0 000 1c1.594.014 3.03.508 4.072 1.478 1.04.972 1.634 2.348 1.66 4.062a.5.5 0 001-.016c-.028-1.948-.72-3.57-1.94-4.71-1.218-1.14-2.89-1.704-4.722-1.72h-.07zm.256 1.862a.5.5 0 00-.012 1c1.012.01 1.798.306 2.332.792.534.486.832 1.164.856 2.024a.5.5 0 001-.032c-.03-1.078-.422-1.99-1.128-2.632-.704-.642-1.71-1.002-2.906-1.016h-.142zm-3.012.694c-.274-.006-.52.092-.728.222l-.016.01c-.224.164-.424.394-.566.628-.224.372-.336.794-.196 1.198.328.936 1.076 2.592 2.442 4.034 1.212 1.276 3.072 2.584 5.368 3.244l.016.004c.338.092.616.004.862-.124.248-.128.464-.322.628-.558l.032-.044c.206-.286.352-.632.252-.978-.106-.364-.456-.694-.878-.97l-1.166-.708c-.332-.202-.776-.16-1.068.108l-.554.502a.273.273 0 01-.276.054c-.574-.206-1.636-.77-2.33-1.462-.694-.692-1.188-1.654-1.378-2.2a.273.273 0 01.06-.274l.512-.546a.79.79 0 00.124-1.032l-.748-1.146c-.224-.362-.536-.582-.872-.618a1.153 1.153 0 00-.156-.004h-.004zm3.012.63a.5.5 0 00.014 1c.478.006.82.132 1.056.34.236.208.382.518.392.938a.5.5 0 001-.024c-.016-.622-.232-1.15-.632-1.504-.4-.354-.946-.528-1.594-.536h-.236z"/>
    </svg>
  );
}

// ─── ANIMATED COUNTER ───────────────────────────────────────
function AnimatedCounter({ end, duration = 2000, prefix = "", suffix = "", decimals = 0 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}{suffix}
    </span>
  );
}

// ─── SCROLL REVEAL WRAPPER ──────────────────────────────────
function Reveal({ children, delay = 0, className = "" }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── SECTION WRAPPER ────────────────────────────────────────
function Section({ id, bg = C.cream, children, className = "" }) {
  return (
    <section id={id} style={{ background: bg }} className={`py-16 md:py-24 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

// ─── GOLD DIVIDER ───────────────────────────────────────────
function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-6">
      <div style={{ background: C.gold, height: 1, width: 60 }} />
      <div style={{ background: C.gold, width: 6, height: 6, transform: "rotate(45deg)" }} />
      <div style={{ background: C.gold, height: 1, width: 60 }} />
    </div>
  );
}

// ─── MAIN CTA BUTTON ────────────────────────────────────────
function CTAButton({ children, variant = "gold", onClick, href, className = "", size = "lg" }) {
  const styles = {
    gold: {
      background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
      color: C.navy,
      border: "none",
    },
    navy: {
      background: C.navy,
      color: C.gold,
      border: `2px solid ${C.gold}`,
    },
    outline: {
      background: "transparent",
      color: C.white,
      border: `2px solid ${C.gold}`,
    },
    burgundy: {
      background: `linear-gradient(135deg, ${C.burgundy}, #A0002A)`,
      color: C.white,
      border: "none",
    },
    whatsapp: {
      background: `linear-gradient(135deg, ${C.whatsapp}, #1EBE57)`,
      color: C.white,
      border: "none",
    },
    viber: {
      background: `linear-gradient(135deg, ${C.viber}, #8B72FF)`,
      color: C.white,
      border: "none",
    },
  };

  const sizeClasses = size === "lg"
    ? "px-8 py-4 text-base md:text-lg"
    : size === "sm"
    ? "px-5 py-3 text-sm"
    : "px-4 py-2.5 text-xs";

  const commonProps = {
    className: `font-semibold rounded-lg cursor-pointer inline-flex items-center gap-2 ${sizeClasses} ${className}`,
    style: {
      ...styles[variant],
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      letterSpacing: "0.02em",
      textDecoration: "none",
    },
    onMouseEnter: (e) => {
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.3)";
    },
    onMouseLeave: (e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
    },
  };

  if (href) {
    return <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" {...commonProps}>{children}</a>;
  }
  return <button onClick={onClick} {...commonProps}>{children}</button>;
}

// ─── SECTION HEADING ────────────────────────────────────────
function SectionHeading({ eyebrow, title, subtitle, light = false }) {
  return (
    <div className="text-center mb-12 md:mb-16">
      {eyebrow && (
        <p className="text-sm font-semibold tracking-widest uppercase mb-3"
          style={{ color: C.gold, letterSpacing: "0.2em" }}>
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        style={{ color: light ? C.white : C.navy, fontFamily: "'Georgia', 'Times New Roman', serif", lineHeight: 1.2 }}>
        {title}
      </h2>
      <GoldDivider />
      {subtitle && (
        <p className="text-base md:text-lg max-w-2xl mx-auto mt-4"
          style={{ color: light ? "rgba(255,255,255,0.8)" : C.grayDark, lineHeight: 1.7 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
// FLOATING CONTACT WIDGET (Desktop)
// ══════════════════════════════════════════════════════════════
function FloatingContact() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:block"
      style={{ transition: "all 0.4s ease", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}>

      {/* Expanded Card */}
      {expanded && (
        <div className="mb-3 rounded-2xl overflow-hidden shadow-2xl" style={{ background: C.navy, border: `1px solid rgba(212,175,55,0.3)`, width: 300 }}>
          <div className="p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})` }}>
                <User className="w-6 h-6" style={{ color: C.navy }} />
              </div>
              <div>
                <p className="text-sm font-bold" style={{ color: C.white }}>{CONTACT.name}</p>
                <p className="text-xs" style={{ color: C.gold }}>{CONTACT.title}</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{CONTACT.company}</p>
              </div>
            </div>

            <div className="space-y-2">
              <a href={`tel:${CONTACT.phoneRaw}`}
                className="flex items-center gap-3 p-2.5 rounded-lg no-underline transition-all"
                style={{ background: "rgba(255,255,255,0.06)", textDecoration: "none" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}>
                <PhoneCall className="w-4 h-4 flex-shrink-0" style={{ color: C.gold }} />
                <div>
                  <p className="text-xs font-semibold" style={{ color: C.white }}>{CONTACT.phone}</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Tap to call directly</p>
                </div>
              </a>

              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-lg no-underline transition-all"
                style={{ background: "rgba(37,211,102,0.1)", textDecoration: "none" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(37,211,102,0.2)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(37,211,102,0.1)"}>
                <WhatsAppIcon size={16} color={C.whatsapp} />
                <div>
                  <p className="text-xs font-semibold" style={{ color: C.whatsapp }}>WhatsApp Ronnel</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Immediate response</p>
                </div>
              </a>

              <a href={CONTACT.viber}
                className="flex items-center gap-3 p-2.5 rounded-lg no-underline transition-all"
                style={{ background: "rgba(115,96,242,0.1)", textDecoration: "none" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(115,96,242,0.2)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(115,96,242,0.1)"}>
                <ViberIcon size={16} color={C.viber} />
                <div>
                  <p className="text-xs font-semibold" style={{ color: C.viber }}>Viber Ronnel</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Send a message</p>
                </div>
              </a>

              <a href={`mailto:${CONTACT.email1}`}
                className="flex items-center gap-3 p-2.5 rounded-lg no-underline transition-all"
                style={{ background: "rgba(255,255,255,0.06)", textDecoration: "none" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}>
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: C.gold }} />
                <div>
                  <p className="text-xs font-semibold" style={{ color: C.white }}>Email Inquiry</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Detailed consultation</p>
                </div>
              </a>
            </div>

            <div className="mt-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.35)" }}>
                Available 7 days a week for consultations
              </p>
            </div>
          </div>
        </div>
      )}

      {/* FAB Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-14 h-14 rounded-full flex items-center justify-center cursor-pointer border-none shadow-xl"
        style={{
          background: expanded ? C.navy : `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
          border: expanded ? `2px solid ${C.gold}` : "none",
          boxShadow: `0 6px 25px rgba(212,175,55,0.4)`,
          transition: "all 0.3s ease",
        }}
      >
        {expanded
          ? <XIcon className="w-6 h-6" style={{ color: C.gold }} />
          : <MessageCircle className="w-6 h-6" style={{ color: C.navy }} />
        }
      </button>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════════════════════════════
function Navigation({ scrollToSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Location", id: "location" },
    { label: "Solutions", id: "solutions" },
    { label: "Developer", id: "developer" },
    { label: "Amenities", id: "amenities" },
    { label: "Investment", id: "investment" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(10,36,99,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? `1px solid rgba(212,175,55,0.2)` : "none",
          padding: scrolled ? "12px 0" : "20px 0",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", border: `2px solid ${C.gold}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: C.gold, fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 16 }}>SB</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold tracking-wider" style={{ color: C.gold, fontFamily: "Georgia, serif", letterSpacing: "0.15em" }}>
                SHANG BAUHINIA
              </p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em" }}>RESIDENCES</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium cursor-pointer bg-transparent border-none"
                style={{ color: "rgba(255,255,255,0.8)", letterSpacing: "0.05em", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = C.gold}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.8)"}>
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://shangbauhiniaresidences.com/wp-content/themes/sbr2025/assets/img/floorplans/Brochure_Shang-Bauhinia-Residences.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
              style={{
                background: "rgba(212,175,55,0.1)",
                color: C.gold,
                border: `1px solid rgba(212,175,55,0.3)`,
                textDecoration: "none",
              }}
            >
              <BookOpen className="w-4 h-4" />
              Brochure
            </a>
            <CTAButton variant="gold" size="sm" onClick={() => scrollToSection("booking")}>
              <Calendar className="w-4 h-4" /> Book a Visit
            </CTAButton>
            <button className="lg:hidden bg-transparent border-none cursor-pointer p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <XIcon className="w-6 h-6" style={{ color: C.gold }} /> : <Menu className="w-6 h-6" style={{ color: C.white }} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 pt-20 px-6"
          style={{ background: "rgba(10,36,99,0.98)", backdropFilter: "blur(20px)" }}>
          <div className="flex flex-col gap-4 mt-8">
            {navLinks.map((link) => (
              <button key={link.id}
                onClick={() => { scrollToSection(link.id); setMobileOpen(false); }}
                className="text-left text-xl font-medium py-3 bg-transparent border-none cursor-pointer"
                style={{ color: C.white, borderBottom: `1px solid rgba(212,175,55,0.2)` }}>
                {link.label}
              </button>
            ))}
            <a
              href="https://shangbauhiniaresidences.com/wp-content/themes/sbr2025/assets/img/floorplans/Brochure_Shang-Bauhinia-Residences.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-left text-xl font-medium py-3"
              style={{ color: C.gold, borderBottom: `1px solid rgba(212,175,55,0.2)`, textDecoration: "none", display: "block" }}
            >
              📄 Download Brochure
            </a>
            <div className="mt-4 space-y-3">
              <CTAButton variant="gold" onClick={() => { scrollToSection("booking"); setMobileOpen(false); }} className="w-full justify-center">
                <Calendar className="w-5 h-5" /> Book Your Show Suite Visit
              </CTAButton>
              <CTAButton variant="whatsapp" href={CONTACT.whatsapp} className="w-full justify-center" size="sm">
                <WhatsAppIcon size={16} color="#fff" /> WhatsApp Ronnel
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ══════════════════════════════════════════════════════════════
// HERO SECTION — Updated Headline
// ══════════════════════════════════════════════════════════════
function HeroSection({ scrollToSection }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(160deg, ${C.navy} 0%, #061440 40%, #0A2463 70%, #0E2D75 100%)`,
      }}>
      {/* Ambient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10"
          style={{ background: `radial-gradient(circle, ${C.gold}, transparent)`, filter: "blur(80px)" }} />
        <div className="absolute bottom-40 left-10 w-96 h-96 rounded-full opacity-5"
          style={{ background: `radial-gradient(circle, ${C.sky}, transparent)`, filter: "blur(100px)" }} />
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)`, backgroundSize: "80px 80px" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-24 pb-16">
        {/* Eyebrow */}
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ border: `1px solid rgba(212,175,55,0.4)`, background: "rgba(212,175,55,0.08)" }}>
            <Award className="w-4 h-4" style={{ color: C.gold }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: C.gold, letterSpacing: "0.15em" }}>
              Five-Star Winner — Asia Pacific Property Awards 2025
            </span>
          </div>
        </Reveal>

        {/* Main Headline — UPDATED */}
        <Reveal delay={150}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif", color: C.white, lineHeight: 1.1 }}>
            Discover Cebu's First
            <br />
            <span style={{ color: C.gold }}>Luxury Vertical Gated Village</span>
          </h1>
        </Reveal>

        {/* Subheadline — Updated */}
        <Reveal delay={300}>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-4" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
            Signature exclusivity. Gated privacy. Elevated living. Where Country Club prestige meets
            vertical village privacy—powered by 38 years of proven delivery and The Kuok Group, the same group behind Shangri-La Hotels and Resorts.
          </p>
        </Reveal>

        {/* Trust Badges */}
        <Reveal delay={400}>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
            {[
              { icon: Shield, label: "PSE-Listed Since 1991" },
              { icon: Building2, label: "38-Year Track Record" },
              { icon: Landmark, label: "Part of The Kuok Group" },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <b.icon className="w-4 h-4" style={{ color: C.gold }} />
                <span className="text-xs md:text-sm font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>{b.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Dual CTAs */}
        <Reveal delay={500}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="gold" onClick={() => scrollToSection("booking")}>
              <Calendar className="w-5 h-5" /> Book Your Show Suite Visit
            </CTAButton>
            <CTAButton variant="outline" href={CONTACT.whatsapp}>
              <WhatsAppIcon size={18} color="#fff" /> Message Ronnel on WhatsApp
            </CTAButton>
          </div>
        </Reveal>

        {/* Brochure Download */}
        <Reveal delay={600}>
          <div className="flex items-center justify-center gap-2 mt-6">
            <BookOpen className="w-4 h-4" style={{ color: "rgba(255,255,255,0.5)" }} />
            <a
              href="https://shangbauhiniaresidences.com/wp-content/themes/sbr2025/assets/img/floorplans/Brochure_Shang-Bauhinia-Residences.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium"
              style={{ color: "rgba(255,255,255,0.7)", textDecoration: "underline" }}
            >
              Download Full Brochure (PDF)
            </a>
          </div>
        </Reveal>

        {/* Scroll cue */}
        <Reveal delay={700}>
          <div className="mt-16 flex flex-col items-center gap-2 cursor-pointer" onClick={() => scrollToSection("stats")}>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em" }}>DISCOVER MORE</span>
            <div className="w-6 h-10 rounded-full flex justify-center pt-2" style={{ border: `1px solid rgba(255,255,255,0.3)` }}>
              <div className="w-1.5 h-3 rounded-full" style={{ background: C.gold, animation: "scrollPulse 2s infinite" }} />
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════
// STATS TICKER
// ══════════════════════════════════════════════════════════════
function StatsTicker() {
  const stats = [
    { value: 0, label: "kuok", special: true },
    { value: 38, suffix: " Years", label: "Proven Delivery" },
    { value: 160000, suffix: "+", label: "IT Park Professionals" },
    { value: 5120, suffix: " sqm", label: "Resort Amenities" },
  ];

  return (
    <section id="stats" style={{ background: C.navy, borderTop: `1px solid rgba(212,175,55,0.2)`, borderBottom: `1px solid rgba(212,175,55,0.2)` }}>
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="text-center">
                {s.special ? (
                  <>
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Landmark className="w-7 h-7" style={{ color: C.gold }} />
                    </div>
                    <p className="text-base md:text-lg font-bold" style={{ color: C.gold, fontFamily: "Georgia, serif" }}>
                      The Kuok Group
                    </p>
                    <p className="text-xs md:text-sm mt-1 font-medium tracking-wider uppercase" style={{ color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em" }}>
                      Shangri-La Hotels & Resorts
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: C.gold, fontFamily: "Georgia, serif" }}>
                      <AnimatedCounter end={s.value} prefix={s.prefix || ""} suffix={s.suffix || ""} />
                    </p>
                    <p className="text-xs md:text-sm mt-2 font-medium tracking-wider uppercase" style={{ color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em" }}>
                      {s.label}
                    </p>
                  </>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════
// SEGMENT SELECTOR
// ══════════════════════════════════════════════════════════════
function SegmentSelector({ scrollToSection }) {
  const [active, setActive] = useState(0);

  const segments = [
    {
      tab: "Buying to Live In",
      icon: Home,
      headline: "Your Home Inside Cebu's First Vertical Gated Village",
      desc: "Shang Bauhinia solves Cebu's daily frustrations so you focus on living, not surviving. 100% backup power means your entire unit stays running during brownouts. Water softeners eliminate hard water damage. Walk to IT Park in 3-5 minutes instead of an hour in traffic—all within gated village privacy.",
      points: [
        { icon: Zap, title: "100% Backup Power", text: "AC, WiFi, refrigeration—protected during every brownout" },
        { icon: MapPin, title: "3-5 Min Walk to IT Park", text: "Eliminate 1-2 hours of daily Cebu traffic" },
        { icon: Droplets, title: "Water Softener System", text: "Save ₱100K-₱300K in preventable appliance damage" },
        { icon: Shield, title: "Shangri-La Management", text: "SPMSI preserves your investment value for decades" },
        { icon: Waves, title: "5,120 sqm Amenities", text: "Pools, gym, cinema, playground—actual resort living" },
      ],
      cta: "Speak with Ronnel About Your Home",
    },
    {
      tab: "Buying for Investment",
      icon: TrendingUp,
      headline: "160,000 Tenants Within Walking Distance",
      desc: "IT Park's professionals need walking-distance housing with 24/7 power reliability. Target 6-8% rental yields backed by documented demand. Diversify with three ₱12M studios instead of one ₱36M unit—spread vacancy risk while targeting Cebu's highest-demand rental segment.",
      points: [
        { icon: Shield, title: "PSE-Listed Developer", text: "Eliminates project completion risk—38-year delivery history" },
        { icon: Zap, title: "100% Backup Power", text: "BPO tenants require this—you have it, competitors don't" },
        { icon: Users, title: "160,000+ Tenant Pool", text: "Sustained rental demand from IT Park proximity" },
        { icon: Building2, title: "SPMSI Management", text: "Tenant retention through Shangri-La service standards" },
        { icon: BarChart3, title: "Unit Mix Optimization", text: "850 Studio/1-BR units target highest-demand BPO segment" },
      ],
      cta: "Get Ronnel's Investment Analysis",
    },
    {
      tab: "Signature Exclusivity",
      icon: Crown,
      headline: "The Ultimate Gated Community in the Sky",
      desc: "Signature residents represent 7.6% of Shang Bauhinia—floors 42-51 with exclusive 1,105 sqm Sky Lounge access. Separate elevators create true gated privacy at altitude. 13.6 sqm per unit at Sky Lounge versus 4.1 sqm at Clubhouse. Adjacent to Cebu Country Club with panoramic views.",
      points: [
        { icon: Crown, title: "7.6% of Inventory", text: "81 Signature units with separate elevator system" },
        { icon: MapPin, title: "Country Club Adjacent", text: "Cebu's most prestigious address recognition" },
        { icon: Building2, title: "SPMSI Standards", text: "Shangri-La hospitality preserves decades-long value" },
        { icon: Globe, title: "P&T Group Since 1868", text: "International design pedigree ensuring timeless appeal" },
        { icon: Shield, title: "The Kuok Group Backing", text: "Global conglomerate strength guarantees December 2031 turnover" },
      ],
      cta: "Explore Signature With Ronnel",
    },
  ];

  const seg = segments[active];

  return (
    <Section id="segments" bg={C.cream}>
      <SectionHeading
        eyebrow="Personalized Experience"
        title="What Brings You Here?"
        subtitle="Select your priority. See why Shang Bauhinia delivers differently for your specific needs."
      />

      {/* Tabs */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
        {segments.map((s, i) => (
          <button key={i} onClick={() => setActive(i)}
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm cursor-pointer border-none transition-all duration-300"
            style={{
              background: active === i ? C.navy : C.white,
              color: active === i ? C.gold : C.navy,
              boxShadow: active === i ? "0 4px 20px rgba(10,36,99,0.3)" : "0 2px 8px rgba(0,0,0,0.08)",
            }}>
            <s.icon className="w-5 h-5" />
            {s.tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="rounded-2xl overflow-hidden" style={{ background: C.white, boxShadow: "0 10px 40px rgba(10,36,99,0.08)" }}>
        <div className="p-6 md:p-10">
          <div className="flex items-center gap-2 mb-4">
            <seg.icon className="w-6 h-6" style={{ color: C.gold }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: C.gold, letterSpacing: "0.15em" }}>
              {seg.tab}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: C.navy, fontFamily: "Georgia, serif" }}>
            {seg.headline}
          </h3>
          <p className="text-base mb-8" style={{ color: C.grayDark, lineHeight: 1.7 }}>{seg.desc}</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {seg.points.map((p, i) => (
              <div key={i} className="flex gap-3 p-4 rounded-xl" style={{ background: C.cream }}>
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `rgba(10,36,99,0.06)` }}>
                  <p.icon className="w-5 h-5" style={{ color: C.navy }} />
                </div>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: C.navy }}>{p.title}</p>
                  <p className="text-xs" style={{ color: C.grayDark, lineHeight: 1.5 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton variant="gold" size="sm" onClick={() => scrollToSection("booking")}>
              {seg.cta} <ArrowRight className="w-4 h-4" />
            </CTAButton>
            <CTAButton variant="whatsapp" size="sm" href={CONTACT.whatsapp}>
              <WhatsAppIcon size={16} color="#fff" /> WhatsApp Ronnel
            </CTAButton>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ══════════════════════════════════════════════════════════════
// PROBLEM-SOLUTION CARDS
// ══════════════════════════════════════════════════════════════
function ProblemSolution() {
  const [expanded, setExpanded] = useState(null);

  const cards = [
    {
      icon: Zap,
      problem: "The Brownout Problem",
      stat: "Demand: 1,223 MW vs Capacity: 1,123 MW",
      pain: "May 2024 data confirmed it: Cebu's peak power demand exceeds total plant capacity. In most condos, your ₱15M unit becomes unlivable during brownouts—no AC, no WiFi, no refrigeration. Your home office goes dark. Food spoils. Productivity vanishes.",
      solution: "100% Residential Backup Power",
      result: "Your entire unit stays powered. Seamless transition during every brownout. Work continues. Family comfort maintains. Appliances protect. Competitors only power hallways and elevators—your unit goes dark. Shang Bauhinia powers everything.",
      premium: "₱3,000-₱5,000 monthly rental premium justified through unmatched reliability",
    },
    {
      icon: Droplets,
      problem: "The Hard Water Problem",
      stat: "₱100K-₱300K in preventable damage over 10 years",
      pain: "Cebu's high mineral content water destroys water heaters within 3-5 years. Washing machines fail prematurely. White scale accumulates on fixtures. Skin and hair quality suffers. Standard condos pipe untreated water directly to units—you bear every replacement cost.",
      solution: "Whole-Building Water Softener System",
      result: "Water softener treats entire building supply before reaching your unit. Appliance lifespan extends to 8-12+ years. Fixtures preserve. Bathing comfort improves. Plus two-day water storage capacity versus typical one-day—through a three-tier tank system with emergency truck connection.",
      premium: "Zero marketing visibility—included because developer solves Cebu-specific problems, not aesthetics",
    },
    {
      icon: Clock,
      problem: "The Traffic Problem",
      stat: "1-2 hours daily commute each way",
      pain: "Most Cebu professionals spend 2-4 hours daily trapped in traffic. That's 60-120 hours per month of lost productivity, family time, and personal wellbeing. For BPO shift workers, commuting after overnight shifts creates safety risks and exhaustion.",
      solution: "3-5 Minute Walk to IT Park",
      result: "Bauhinia Drive sits between IT Park's 160,000+ employment base and Cebu Country Club's exclusivity. Walk to work in minutes, not hours. Reclaim 60-120 hours monthly. Ayala Center is 1.7 km for retail. Schools range 1.4-6.9 km. Hospitals 2.0-5.6 km.",
      premium: "Location permanence—everything else renovates, but the address stays fixed forever",
    },
    {
      icon: Building2,
      problem: "The Value Protection Problem",
      stat: "₱3M+ value gap after 10 years of poor management",
      pain: "Most developers outsource to lowest-cost property managers post-turnover. Within five years: amenities deteriorate, building systems fail, property values decline. Your ₱15M investment erodes because someone minimized management costs.",
      solution: "SPMSI Shangri-La Management Standards",
      result: "Wholly-owned subsidiary—Shang Properties' brand reputation depends on management quality. Shangri-La hospitality training applied to residential operations. 24/7 concierge, preventive maintenance programs, rigorous fire safety audits. Year 10: well-maintained property at ₱20M+ resale value versus ₱17M with mediocre management.",
      premium: "₱7,000+ monthly rental income difference compounds over ownership duration",
    },
  ];

  return (
    <Section id="solutions" bg={C.white}>
      <SectionHeading
        eyebrow="Infrastructure Excellence"
        title="Problems Most Developers Ignore"
        subtitle="Premium pricing demands infrastructure differentiation—not just aesthetic superiority. These solutions justify every peso."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {cards.map((card, i) => (
          <Reveal key={i} delay={i * 100}>
            <div
              className="rounded-2xl overflow-hidden cursor-pointer"
              style={{
                background: expanded === i ? C.navy : C.cream,
                boxShadow: expanded === i ? "0 10px 40px rgba(10,36,99,0.2)" : "0 2px 10px rgba(0,0,0,0.05)",
                transition: "all 0.4s ease",
              }}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: expanded === i ? "rgba(212,175,55,0.15)" : "rgba(10,36,99,0.06)" }}>
                      <card.icon className="w-6 h-6" style={{ color: expanded === i ? C.gold : C.navy }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold" style={{ color: expanded === i ? C.white : C.navy }}>
                        {card.problem}
                      </h3>
                      <p className="text-xs font-semibold mt-0.5" style={{ color: C.gold }}>{card.stat}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    {expanded === i
                      ? <ChevronUp className="w-5 h-5" style={{ color: C.gold }} />
                      : <ChevronDown className="w-5 h-5" style={{ color: C.grayDark }} />
                    }
                  </div>
                </div>

                <div style={{
                  maxHeight: expanded === i ? 500 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.5s ease",
                }}>
                  <div className="space-y-4 pb-2">
                    <div className="p-4 rounded-xl" style={{ background: "rgba(128,0,32,0.1)", border: "1px solid rgba(128,0,32,0.2)" }}>
                      <div className="flex items-center gap-2 mb-2">
                        <X className="w-4 h-4" style={{ color: "#dc2626" }} />
                        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#dc2626" }}>The Pain</span>
                      </div>
                      <p className="text-sm" style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>{card.pain}</p>
                    </div>

                    <div className="p-4 rounded-xl" style={{ background: "rgba(45,80,22,0.15)", border: "1px solid rgba(45,80,22,0.3)" }}>
                      <div className="flex items-center gap-2 mb-2">
                        <Check className="w-4 h-4" style={{ color: "#22c55e" }} />
                        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#22c55e" }}>
                          {card.solution}
                        </span>
                      </div>
                      <p className="text-sm" style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>{card.result}</p>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: "rgba(212,175,55,0.1)" }}>
                      <TrendingUp className="w-4 h-4 flex-shrink-0" style={{ color: C.gold }} />
                      <p className="text-xs font-medium" style={{ color: C.gold }}>{card.premium}</p>
                    </div>
                  </div>
                </div>

                {expanded !== i && (
                  <p className="text-sm mt-2" style={{ color: C.grayDark }}>
                    Click to see the problem and our solution →
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

// ══════════════════════════════════════════════════════════════
// MARKET TIER VISUALIZATION
// ══════════════════════════════════════════════════════════════
function MarketTier() {
  const tiers = [
    { name: "Budget", range: "₱90K-₱130K/sqm", pct: 22, color: "#94a3b8" },
    { name: "Mid-Market", range: "₱130K-₱200K/sqm", pct: 50, color: "#64748b" },
    { name: "High-End", range: "₱200K-₱250K/sqm", pct: 23, color: "#475569" },
    { name: "Luxury 5%", range: "₱250K+/sqm", pct: 5, color: C.gold, highlight: true },
  ];

  return (
    <Section id="location" bg={C.navy}>
      <SectionHeading
        eyebrow="Market Intelligence"
        title="Cebu's Luxury 5%"
        subtitle="Only 5% of new Cebu condominiums price above ₱250,000 per square meter. Highest demand. Lowest supply. Shang Bauhinia positions here at ₱290,122-₱429,839/sqm."
        light
      />

      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="space-y-4">
            {tiers.map((t, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-28 text-right flex-shrink-0">
                  <p className="text-sm font-bold" style={{ color: t.highlight ? C.gold : "rgba(255,255,255,0.6)" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{t.range}</p>
                </div>
                <div className="flex-grow h-10 rounded-lg overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div
                    className="h-full rounded-lg flex items-center justify-end pr-3 transition-all duration-1000"
                    style={{
                      width: `${t.pct * 1.8}%`,
                      minWidth: t.highlight ? 120 : 0,
                      background: t.highlight
                        ? `linear-gradient(90deg, ${C.gold}, ${C.goldLight})`
                        : `${t.color}44`,
                      boxShadow: t.highlight ? `0 0 20px rgba(212,175,55,0.3)` : "none",
                    }}
                  >
                    <span className="text-xs font-bold" style={{ color: t.highlight ? C.navy : "rgba(255,255,255,0.5)" }}>
                      {t.pct}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 p-6 rounded-xl text-center" style={{ background: "rgba(212,175,55,0.08)", border: `1px solid rgba(212,175,55,0.2)` }}>
            <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}>
              <span style={{ color: C.gold, fontWeight: 700 }}>Scarcity creates pricing power.</span>
              {" "}Only developers with institutional backing can execute in the luxury tier. Capital requirements eliminate most competitors.
              Luxury properties appreciate 3-7% annually versus 2-4% for mid-market. First buyers access pricing before full market awareness develops.
            </p>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              { val: "7.3%", label: "Annual GDP Growth", sub: "Central Visayas" },
              { val: "$40B", label: "IT-BPM Revenue", sub: "2025 Projected" },
              { val: "7.15M", label: "Tourist Arrivals", sub: "2024, +37.3% YoY" },
              { val: "Top 5%", label: "Luxury Tier", sub: "Shang Bauhinia" },
            ].map((s, i) => (
              <div key={i} className="text-center p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.04)" }}>
                <p className="text-xl md:text-2xl font-bold" style={{ color: C.gold }}>{s.val}</p>
                <p className="text-xs mt-1 font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>{s.label}</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{s.sub}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

// ══════════════════════════════════════════════════════════════
// DEVELOPER TIMELINE
// ══════════════════════════════════════════════════════════════
function DeveloperTimeline() {
  const [activeIdx, setActiveIdx] = useState(5);

  const milestones = [
    { year: "1987", title: "Founded", desc: "Shang Properties begins property development operations" },
    { year: "1991", title: "PSE Listed", desc: "Philippine Stock Exchange listing creates quarterly public accountability" },
    { year: "2005", title: "St. Francis Shangri-La", desc: "Ortigas Center—first major residential delivery establishing track record" },
    { year: "2010", title: "One Shangri-La Place", desc: "Ortigas Center—continuing consistent luxury residential delivery" },
    { year: "2012", title: "Shang Salcedo & The Rise", desc: "Makati—expanding portfolio with two simultaneous deliveries" },
    { year: "2014", title: "Horizon Homes", desc: "BGC—premier location proving institutional execution capability" },
    { year: "2025", title: "Aurelia Residences", desc: "BGC—latest delivery confirming 38-year track record continues" },
    { year: "2026", title: "Shang Bauhinia", desc: "Cebu's first Shang Properties project—you are here", highlight: true },
    { year: "2031", title: "Guaranteed Turnover", desc: "December 2031—backed by The Kuok Group's financial strength, not deposit collection" },
  ];

  return (
    <Section id="developer" bg={C.cream}>
      <SectionHeading
        eyebrow="38 Years of Proof"
        title="Track Record Replaces Promises"
        subtitle="Pre-selling carries inherent completion risk. Undercapitalized developers depend on deposits to fund construction. Shang Properties eliminates that risk through The Kuok Group backing."
      />

      <Reveal>
        <div className="relative overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-0 min-w-max justify-center">
            {milestones.map((m, i) => (
              <div key={i} className="flex flex-col items-center cursor-pointer group" style={{ width: 120, flexShrink: 0 }}
                onClick={() => setActiveIdx(i)}>
                <p className="text-sm font-bold mb-2 transition-colors"
                  style={{ color: i === activeIdx ? C.gold : m.highlight ? C.navy : C.grayDark }}>
                  {m.year}
                </p>
                <div className="relative flex items-center w-full">
                  {i > 0 && <div className="flex-grow h-0.5" style={{ background: i <= activeIdx ? C.gold : C.gray }} />}
                  <div className="w-4 h-4 rounded-full flex-shrink-0 transition-all border-2"
                    style={{
                      background: i === activeIdx ? C.gold : m.highlight ? C.navy : C.white,
                      borderColor: i <= activeIdx ? C.gold : C.gray,
                      boxShadow: i === activeIdx ? `0 0 12px rgba(212,175,55,0.4)` : "none",
                      transform: i === activeIdx ? "scale(1.4)" : "scale(1)",
                    }} />
                  {i < milestones.length - 1 && <div className="flex-grow h-0.5" style={{ background: i < activeIdx ? C.gold : C.gray }} />}
                </div>
                <p className="text-xs mt-2 text-center font-medium px-1 transition-colors"
                  style={{ color: i === activeIdx ? C.navy : C.grayDark, lineHeight: 1.3 }}>
                  {m.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-8 p-6 rounded-xl text-center max-w-lg mx-auto" style={{ background: C.white, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
          <p className="text-2xl font-bold mb-1" style={{ color: C.navy, fontFamily: "Georgia, serif" }}>
            {milestones[activeIdx].year} — {milestones[activeIdx].title}
          </p>
          <p className="text-sm" style={{ color: C.grayDark, lineHeight: 1.6 }}>
            {milestones[activeIdx].desc}
          </p>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="mt-10 p-6 rounded-xl" style={{ background: C.navy }}>
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="flex-shrink-0">
              <Shield className="w-12 h-12" style={{ color: C.gold }} />
            </div>
            <div>
              <p className="text-lg font-bold mb-2" style={{ color: C.white, fontFamily: "Georgia, serif" }}>
                PSE listing since 1991 means quarterly accountability replaces marketing promises.
              </p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                Your December 2031 turnover is based on The Kuok Group's financial strength and construction capability—not deposit collection velocity. The same group behind Shangri-La Hotels and Resorts worldwide backs this development.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

// ══════════════════════════════════════════════════════════════
// SIGNATURE VS PREMIUM
// ══════════════════════════════════════════════════════════════
function SignatureComparison() {
  const [view, setView] = useState("signature");

  const data = [
    { feature: "Units Available", premium: "982 units", signature: "81 units (7.6%)" },
    { feature: "Floor Location", premium: "Levels 8-41", signature: "Levels 42-51" },
    { feature: "Elevator System", premium: "Standard shared", signature: "Separate exclusive" },
    { feature: "Sky Lounge Access", premium: "—", signature: "1,105 sqm exclusive" },
    { feature: "Clubhouse Access", premium: "4,015 sqm shared", signature: "4,015 sqm + Sky Lounge" },
    { feature: "Amenity per Unit", premium: "4.1 sqm/unit", signature: "13.6 sqm/unit at Sky Lounge" },
    { feature: "Kitchen Appliances", premium: "Standard turnkey", signature: "Branded refrigerator, oven, washer/dryer" },
    { feature: "Price Range (2BR)", premium: "₱32.4M-₱43M", signature: "₱45.5M-₱53.3M" },
  ];

  return (
    <Section id="comparison" bg={C.white}>
      <SectionHeading
        eyebrow="Choose Your Tier"
        title="Signature vs Premium"
        subtitle="Genuine exclusivity through operational separation—separate elevator systems, dedicated Sky Lounge, physical floor distinction. Not just marketing differentiation."
      />

      <div className="flex justify-center mb-10">
        <div className="inline-flex rounded-xl overflow-hidden" style={{ background: C.cream, border: `1px solid ${C.gray}` }}>
          {[
            { key: "premium", label: "Premium Floors", icon: Building2 },
            { key: "signature", label: "Signature Floors", icon: Crown },
          ].map((t) => (
            <button key={t.key} onClick={() => setView(t.key)}
              className="flex items-center gap-2 px-6 py-3 text-sm font-semibold cursor-pointer border-none transition-all"
              style={{
                background: view === t.key ? C.navy : "transparent",
                color: view === t.key ? C.gold : C.grayDark,
              }}>
              <t.icon className="w-4 h-4" />
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <Reveal>
        <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
          {data.map((row, i) => (
            <div key={i} className="flex" style={{ borderBottom: i < data.length - 1 ? `1px solid ${C.gray}` : "none" }}>
              <div className="w-1/3 p-4 flex items-center" style={{ background: C.cream }}>
                <p className="text-xs md:text-sm font-semibold" style={{ color: C.navy }}>{row.feature}</p>
              </div>
              <div className="w-1/3 p-4 flex items-center justify-center text-center"
                style={{ background: view === "premium" ? "rgba(10,36,99,0.04)" : C.white }}>
                <p className="text-xs md:text-sm" style={{ color: view === "premium" ? C.navy : C.grayDark, fontWeight: view === "premium" ? 600 : 400 }}>
                  {row.premium}
                </p>
              </div>
              <div className="w-1/3 p-4 flex items-center justify-center text-center"
                style={{ background: view === "signature" ? "rgba(212,175,55,0.06)" : C.white }}>
                <p className="text-xs md:text-sm" style={{ color: view === "signature" ? C.navy : C.grayDark, fontWeight: view === "signature" ? 700 : 400 }}>
                  {row.signature}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={100}>
        <p className="text-center text-sm mt-6" style={{ color: C.grayDark }}>
          Signature residents enjoy <strong style={{ color: C.navy }}>3.3× more exclusive amenity space</strong> per unit. Physical separation creates genuine exclusivity—not a marketing label.
        </p>
      </Reveal>
    </Section>
  );
}

// ══════════════════════════════════════════════════════════════
// AMENITIES SHOWCASE
// ══════════════════════════════════════════════════════════════
function AmenitiesShowcase() {
  const [activeAmenity, setActiveAmenity] = useState(null);

  const amenities = [
    { icon: Waves, name: "Tropical Pool & Jacuzzi", desc: "Urban oasis design with integrated jacuzzi zones, dedicated kids splash zone, and poolside lounges throughout the Clubhouse.", tier: "all" },
    { icon: Dumbbell, name: "345 sqm Fitness Center", desc: "State-of-the-art cardio equipment, core and strength training, dedicated yoga/Pilates studio with views. Larger than standalone commercial gyms.", tier: "all" },
    { icon: Sun, name: "Cold Plunge & Sauna", desc: "Recovery facilities including cold plunge pools and sauna—wellness amenities typically found in dedicated spa facilities.", tier: "all" },
    { icon: UtensilsCrossed, name: "Bauhinia Ballroom", desc: "Accommodates 140+ guests with soaring chandeliers and high ceilings. Covered terrace for events. Private function rooms seat up to 14 guests.", tier: "all" },
    { icon: Film, name: "Private Cinema", desc: "Large format screen with streaming integration. Comfortable seating for private screenings—your personal theater within your residence.", tier: "all" },
    { icon: BookOpen, name: "Library & Co-Working", desc: "Formal and informal meeting areas with flexible co-working desks and quiet spaces for focused work. Remote work without leaving home.", tier: "all" },
    { icon: Baby, name: "Indoor & Outdoor Play", desc: "Dedicated children's play zones with indoor and outdoor areas, family game room, and multi-purpose court for pickleball, badminton, basketball.", tier: "all" },
    { icon: TreePine, name: "Gardens & Al Fresco", desc: "Lush gardenscapes with al fresco lounge seating, cozy cabanas, and verdant lawn spaces. Quiet retreat within the development.", tier: "all" },
    { icon: Crown, name: "Sky Lounge Infinity Pool", desc: "Rooftop infinity pool with panoramic skyline views, integrated jacuzzi, cold plunge, and private cabanas. Signature residents only—81 units sharing 1,105 sqm.", tier: "signature" },
    { icon: Sparkles, name: "Private Fitness & Spa", desc: "Exclusive Sky Lounge fitness center with premium equipment, private massage room, and sauna. Additional privacy beyond the Clubhouse gym.", tier: "signature" },
    { icon: Star, name: "Sky Lounge Gathering", desc: "Sophisticated indoor and outdoor lounge spaces with intricately furnished gathering areas. State-of-the-art function rooms with breathtaking views.", tier: "signature" },
    { icon: Eye, name: "Panoramic Views", desc: "Floors 42-52 capture golf course, hills, and coastline panoramas. Cebu Country Club greenery, mountain backdrop, and sea horizon in one vista.", tier: "signature" },
  ];

  return (
    <Section id="amenities" bg={C.cream}>
      <SectionHeading
        eyebrow="5,120 Square Meters"
        title="Resort Living, Not Just Amenity Lists"
        subtitle="Typical Cebu luxury condos provide 2,000-3,000 sqm amenities. Shang Bauhinia delivers 5,120 sqm—71% larger—across two distinct tiers of access."
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {amenities.map((a, i) => (
          <Reveal key={i} delay={i * 50}>
            <div
              className="relative p-5 rounded-xl cursor-pointer transition-all duration-300"
              style={{
                background: activeAmenity === i ? C.navy : C.white,
                boxShadow: activeAmenity === i ? "0 8px 30px rgba(10,36,99,0.2)" : "0 2px 8px rgba(0,0,0,0.04)",
                border: a.tier === "signature" ? `1px solid ${C.gold}` : "1px solid transparent",
              }}
              onClick={() => setActiveAmenity(activeAmenity === i ? null : i)}
            >
              {a.tier === "signature" && (
                <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded text-xs font-bold"
                  style={{ background: C.gold, color: C.navy, fontSize: 9, letterSpacing: "0.05em" }}>
                  SIGNATURE
                </div>
              )}
              <a.icon className="w-7 h-7 mb-3" style={{ color: activeAmenity === i ? C.gold : C.navy }} />
              <p className="text-sm font-bold mb-1" style={{ color: activeAmenity === i ? C.white : C.navy }}>
                {a.name}
              </p>
              {activeAmenity === i ? (
                <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>{a.desc}</p>
              ) : (
                <p className="text-xs" style={{ color: C.grayDark }}>Tap to explore</p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

// ══════════════════════════════════════════════════════════════
// INVESTMENT CALCULATOR
// ══════════════════════════════════════════════════════════════
function InvestmentCalculator({ scrollToSection }) {
  const [unitType, setUnitType] = useState(0);

  const units = [
    { name: "Studio", price: 12000000, sqm: 35.33, rent: 35330 },
    { name: "1-Bedroom", price: 20000000, sqm: 57, rent: 57000 },
    { name: "2-BR Typical", price: 37000000, sqm: 99, rent: 99000 },
    { name: "2-BR Signature", price: 49000000, sqm: 117, rent: 117000 },
    { name: "3-BR Signature", price: 78000000, sqm: 204, rent: 204000 },
  ];

  const u = units[unitType];
  const annualRent = u.rent * 12;
  const grossYield = ((annualRent / u.price) * 100).toFixed(1);
  const appreciation5yr = Math.round(u.price * 1.25);
  const totalReturn5yr = Math.round(appreciation5yr + annualRent * 5 - u.price);
  const pricePerSqm = Math.round(u.price / u.sqm).toLocaleString();

  return (
    <Section id="investment" bg={C.navy}>
      <SectionHeading
        eyebrow="Investment Analysis"
        title="Numbers That Justify Decisions"
        subtitle="Pre-selling pricing today. Turnover value December 2031. Access Shang Properties' first Cebu project at market entry before brand premium fully prices in."
        light
      />

      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {units.map((u, i) => (
              <button key={i} onClick={() => setUnitType(i)}
                className="px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer border-none transition-all"
                style={{
                  background: unitType === i ? C.gold : "rgba(255,255,255,0.06)",
                  color: unitType === i ? C.navy : "rgba(255,255,255,0.7)",
                }}>
                {u.name}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: C.gold, fontFamily: "Georgia, serif" }}>
                {u.name} — ₱{(u.price / 1000000).toFixed(1)}M
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Unit Size", value: `${u.sqm} sqm` },
                  { label: "Price per sqm", value: `₱${pricePerSqm}` },
                  { label: "Est. Monthly Rent", value: `₱${u.rent.toLocaleString()}` },
                  { label: "Annual Rental Income", value: `₱${annualRent.toLocaleString()}` },
                  { label: "Gross Rental Yield", value: `${grossYield}%`, highlight: true },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-2"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{row.label}</span>
                    <span className="text-sm font-bold" style={{ color: row.highlight ? C.gold : C.white }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl" style={{ background: "rgba(212,175,55,0.06)", border: `1px solid rgba(212,175,55,0.2)` }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: C.gold, fontFamily: "Georgia, serif" }}>5-Year Projection</h3>
              <div className="space-y-3">
                {[
                  { label: "Purchase Price (2026)", value: `₱${(u.price / 1000000).toFixed(1)}M` },
                  { label: "Est. Value at Turnover (2031)", value: `₱${(appreciation5yr / 1000000).toFixed(1)}M`, note: "~25% appreciation" },
                  { label: "5-Year Rental Income", value: `₱${((annualRent * 5) / 1000000).toFixed(1)}M` },
                  { label: "Total Estimated Return", value: `₱${(totalReturn5yr / 1000000).toFixed(1)}M`, highlight: true },
                ].map((row, i) => (
                  <div key={i} className="py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="flex justify-between items-center">
                      <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{row.label}</span>
                      <span className="text-sm font-bold" style={{ color: row.highlight ? C.gold : C.white }}>{row.value}</span>
                    </div>
                    {row.note && <p className="text-xs mt-0.5 text-right" style={{ color: "rgba(255,255,255,0.4)" }}>{row.note}</p>}
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 rounded-lg" style={{ background: "rgba(45,80,22,0.15)" }}>
                <p className="text-xs text-center" style={{ color: "#86efac", lineHeight: 1.5 }}>
                  💡 <strong>Investor Strategy:</strong> Instead of one ₱{(u.price / 1000000).toFixed(0)}M unit, consider {Math.max(1, Math.floor(u.price / 12000000))} studio(s) at ₱12M each—diversify vacancy risk across multiple cash flows.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-8 p-5 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="text-center md:text-left">
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>Manila Shang Properties</p>
              <p className="text-2xl font-bold" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "line-through" }}>₱500K+/sqm</p>
            </div>
            <ArrowRight className="w-5 h-5 hidden md:block" style={{ color: C.gold }} />
            <div className="text-center md:text-left">
              <p className="text-sm" style={{ color: C.gold }}>Shang Bauhinia Cebu — Market Entry</p>
              <p className="text-2xl font-bold" style={{ color: C.gold }}>₱290K-₱430K/sqm</p>
            </div>
            <CTAButton variant="gold" size="sm" href={CONTACT.whatsapp}>
              Ask Ronnel for Full Analysis <ArrowRight className="w-4 h-4" />
            </CTAButton>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <p className="text-xs text-center mt-4" style={{ color: "rgba(255,255,255,0.4)" }}>
            Projections based on historical luxury tier appreciation rates of 3-7% annually and documented market rental yields. Actual returns may vary. Consult a licensed financial advisor for investment decisions.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

// ══════════════════════════════════════════════════════════════
// LOCATION ADVANTAGES
// ══════════════════════════════════════════════════════════════
function LocationAdvantage() {
  const locations = [
    { icon: Building2, name: "IT Park", distance: "3-5 min walk", detail: "160,000+ professionals, BPO employment center" },
    { icon: TreePine, name: "Cebu Country Club", distance: "Adjacent", detail: "Immediate prestige positioning, golf course views" },
    { icon: ShoppingBag, name: "Ayala Center Cebu", distance: "1.7 km", detail: "Premier retail, dining, entertainment" },
    { icon: Building2, name: "Cebu Business Park", distance: "1.9 km", detail: "Secondary employment and commercial center" },
    { icon: GraduationCap, name: "Major Schools", distance: "1.4-6.9 km", detail: "CIS, Sacred Heart, Bright Academy access" },
    { icon: Stethoscope, name: "Medical Facilities", distance: "2.0-5.6 km", detail: "Cebu Doctors, Chong Hua, UCMed" },
  ];

  return (
    <Section id="locationmap" bg={C.white}>
      <SectionHeading
        eyebrow="The Permanent Asset"
        title="Everything Else Renovates. The Address Stays."
        subtitle="Bauhinia Drive delivers what most Cebu professionals sacrifice one for: either prestige OR convenience. Here you have both."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {locations.map((loc, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="p-5 rounded-xl transition-all duration-300 hover:shadow-lg" style={{ background: C.cream }}>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(10,36,99,0.06)" }}>
                  <loc.icon className="w-5 h-5" style={{ color: C.navy }} />
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: C.navy }}>{loc.name}</p>
                  <p className="text-sm font-semibold" style={{ color: C.gold }}>{loc.distance}</p>
                  <p className="text-xs mt-1" style={{ color: C.grayDark }}>{loc.detail}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={300}>
        <div className="mt-10 text-center p-6 rounded-xl" style={{ background: C.cream }}>
          <p className="text-sm" style={{ color: C.grayDark, lineHeight: 1.7 }}>
            <strong style={{ color: C.navy }}>3-5 minutes to work versus 1-2 hours in traffic.</strong> For IT Park's 160,000+ professionals,
            location isn't a luxury—it's daily quality of life. For investors, this proximity creates sustained rental demand that outlasts market cycles.
          </p>
        </div>
      </Reveal>

      <Reveal delay={400}>
        <div className="mt-6 p-6 rounded-2xl text-center" style={{ background: C.navy }}>
          <div className="flex items-center justify-center gap-2 mb-3">
            <MapPin className="w-5 h-5" style={{ color: C.gold }} />
            <p className="text-sm font-bold tracking-wider uppercase" style={{ color: C.gold, letterSpacing: "0.15em" }}>Project Address</p>
          </div>
          <p className="text-base font-medium" style={{ color: C.white, lineHeight: 1.6 }}>
            Gov. Cuenco Ave. Corner Bauhinia Drive<br />
            Brgy. Kasambagan, Cebu City, 6000<br />
            Philippines
          </p>
          <a
            href="https://maps.google.com/?q=Gov.+Cuenco+Ave.+Corner+Bauhinia+Drive,+Cebu+City"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sm font-medium"
            style={{ color: C.gold, textDecoration: "none" }}
          >
            <ExternalLink className="w-4 h-4" />
            View on Google Maps
          </a>
        </div>
      </Reveal>
    </Section>
  );
}

// ══════════════════════════════════════════════════════════════
// DESIGN PEDIGREE
// ══════════════════════════════════════════════════════════════
function DesignPedigree() {
  return (
    <Section id="design" bg={C.navy}>
      <SectionHeading
        eyebrow="Timeless Over Trendy"
        title="Design Heritage Since 1868"
        subtitle="International design pedigree targets 20-30 year appreciation cycles. Trend-chasing condos date within 5-10 years. P&T Group's 1972 Hong Kong skyscrapers still command premium rents."
        light
      />

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            firm: "P&T Group International",
            location: "Hong Kong",
            since: "Heritage since 1868",
            desc: "Southeast Asia's oldest major architectural firm. 1,600+ specialists across 70+ cities. Jardine House (1972) still commands premium rents—proving timeless design across 50+ years.",
            icon: Globe,
          },
          {
            firm: "FM Architettura",
            location: "Milan, Italy",
            since: "Global luxury capital",
            desc: "150+ distinctive projects worldwide including luxury residential, hospitality, and superyacht design. Timeless elegance philosophy—design that appreciates, never dates.",
            icon: Sparkles,
          },
          {
            firm: "P Landscape Co.",
            location: "Thailand",
            since: "Regional expertise",
            desc: "Raffles Sentosa ultra-luxury resort. One Bangkok award-winning design. Tropical landscape expertise with resort-integrated approach specific to Southeast Asian climates.",
            icon: TreePine,
          },
        ].map((d, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="p-6 rounded-2xl h-full" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <d.icon className="w-8 h-8 mb-4" style={{ color: C.gold }} />
              <h3 className="text-lg font-bold mb-1" style={{ color: C.white }}>{d.firm}</h3>
              <p className="text-xs mb-1" style={{ color: C.gold }}>{d.location} — {d.since}</p>
              <p className="text-sm mt-3" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>{d.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={300}>
        <p className="text-center text-sm mt-8" style={{ color: "rgba(255,255,255,0.5)" }}>
          The 2040 test: When trend-chasing condos look dated, international design pedigree still commands premiums.
        </p>
      </Reveal>
    </Section>
  );
}

// ══════════════════════════════════════════════════════════════
// OBJECTION PRE-EMPTION FAQ
// ══════════════════════════════════════════════════════════════
function ObjectionFAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "Pre-selling seems risky. How do I know this will actually get built?",
      a: "Valid concern—Cebu has pre-selling horror stories. Shang Properties is categorically different. PSE-listed since 1991 with quarterly public reporting. 38 years of consistent project delivery—St. Francis Shangri-La (2005), One Shangri-La (2010), The Rise (2012), Horizon Homes (2014), Aurelia Residences (2025). Part of The Kuok Group—the same conglomerate behind Shangri-La Hotels and Resorts, with global operations spanning hospitality, real estate, and shipping. They don't need your deposit to fund construction—December 2031 turnover is guaranteed by The Kuok Group's financial strength, not deposit collection velocity.",
    },
    {
      q: "Why does it cost more than other Cebu condos?",
      a: "Premium pricing requires justification—here's what competitors don't offer. 100% residential backup power (they only cover hallways). Building-wide water softeners preventing ₱100K-₱300K in appliance damage. SPMSI Shangri-La management protecting your 2035 resale value. International design team (P&T Group since 1868). These are infrastructure solutions creating competitive moats, not just aesthetic differences. The pricing reflects tangible differentiation at ₱290K-₱430K/sqm versus Manila Shang properties exceeding ₱500K/sqm.",
    },
    {
      q: "6-7 years is a long wait for turnover. Isn't that too long?",
      a: "Standard timeline for a 52-story institutional-quality development. Shang Properties' PSE accountability and The Kuok Group backing ensure adherence—construction quality drives the schedule, not sales velocity. Every Shang project in 38 years delivered as promised. Compare this to developers who promise 3-4 year timelines then delay repeatedly because they depend on deposit velocity to fund construction.",
    },
    {
      q: "Can't I just buy a resale unit that's ready now?",
      a: "You can—but you'll pay today's pricing instead of tomorrow's value. Pre-selling buyers in Manila's St. Francis Shangri-La accessed pricing that seems impossible now. Cebu's first Shang project presents the same window. Pre-selling also means choosing your preferred floor, orientation, and unit type. And resale units won't have Shang Bauhinia's infrastructure—100% backup power and water softeners aren't retrofit-able.",
    },
    {
      q: "Is Cebu's luxury market really that limited?",
      a: "Documented data: only 5% of new Cebu condominiums price above ₱250,000 per square meter. The luxury tier combines highest demand with lowest supply—scarcity creates pricing power. Central Visayas grows 7.3% annually (fastest Philippine region). IT-BPM sector generates $38 billion in revenue. Tourism reached 7.15 million arrivals in 2024, up 37.3% year-over-year.",
    },
    {
      q: "What happens to property value after turnover?",
      a: "This depends entirely on management quality—the most underrated factor in real estate investment. Most developers outsource to lowest-cost property managers. Within five years: amenities deteriorate, values decline. SPMSI is wholly-owned by Shang Properties with Shangri-La training standards. The 10-year comparison: excellent management creates ₱20M+ resale value versus ₱17M with mediocre management—a ₱3M+ gap that compounds.",
    },
  ];

  return (
    <Section id="faq" bg={C.cream}>
      <SectionHeading
        eyebrow="Informed Decisions"
        title="Questions Sophisticated Buyers Ask"
        subtitle="We address concerns with evidence, not deflection. Every answer verifies through source materials and independent market research."
      />

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, i) => (
          <Reveal key={i} delay={i * 60}>
            <div
              className="rounded-xl overflow-hidden cursor-pointer transition-all duration-300"
              style={{
                background: C.white,
                boxShadow: openIdx === i ? "0 4px 20px rgba(10,36,99,0.1)" : "0 1px 4px rgba(0,0,0,0.04)",
              }}
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
            >
              <div className="flex items-center justify-between p-5">
                <p className="font-bold text-sm md:text-base pr-4" style={{ color: C.navy }}>{faq.q}</p>
                <div className="flex-shrink-0">
                  {openIdx === i
                    ? <ChevronUp className="w-5 h-5" style={{ color: C.gold }} />
                    : <ChevronDown className="w-5 h-5" style={{ color: C.grayDark }} />
                  }
                </div>
              </div>
              <div style={{ maxHeight: openIdx === i ? 400 : 0, overflow: "hidden", transition: "max-height 0.4s ease" }}>
                <div className="px-5 pb-5">
                  <div style={{ height: 1, background: C.gray, marginBottom: 16 }} />
                  <p className="text-sm" style={{ color: C.grayDark, lineHeight: 1.8 }}>{faq.a}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Contact CTA after FAQ */}
      <Reveal delay={300}>
        <div className="max-w-3xl mx-auto mt-10 p-6 rounded-xl text-center" style={{ background: C.white, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
          <p className="text-sm mb-4" style={{ color: C.grayDark }}>
            Have a question not listed here? <strong style={{ color: C.navy }}>Ronnel can arrange your private consultation this week.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <CTAButton variant="whatsapp" size="sm" href={CONTACT.whatsapp}>
              <WhatsAppIcon size={16} color="#fff" /> Message Ronnel on WhatsApp
            </CTAButton>
            <CTAButton variant="navy" size="sm" href={`tel:${CONTACT.phoneRaw}`}>
              <PhoneCall className="w-4 h-4" /> Call {CONTACT.phone}
            </CTAButton>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

// ══════════════════════════════════════════════════════════════
// BOOKING / FINAL CTA SECTION
// ══════════════════════════════════════════════════════════════
function BookingSection() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", date: "", type: "show-suite", buyer: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Section id="booking" bg={C.navy}>
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Experience the Difference"
          title="Visit Our Show Suite. Understand the Difference."
          subtitle="Ronnel can arrange your private Show Suite tour this week. See full-scale unit mock-ups, materials, and finishes."
          light
        />

        {!submitted ? (
          <Reveal>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: Value Props + Contact */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold" style={{ color: C.gold, fontFamily: "Georgia, serif" }}>
                  What You'll Experience
                </h3>
                {[
                  { icon: Eye, text: "Full-scale unit mock-ups with actual materials and finishes" },
                  { icon: BarChart3, text: "Personalized investment analysis tailored to your goals" },
                  { icon: Users, text: "One-on-one consultation with Ronnel, your dedicated specialist" },
                  { icon: MapPin, text: "Neighborhood tour of IT Park and Country Club proximity" },
                  { icon: Building2, text: "Detailed infrastructure walkthrough (backup power, water systems)" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: C.gold }} />
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>{item.text}</p>
                  </div>
                ))}

                {/* Contact methods */}
                <div className="pt-4 space-y-3" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                  <p className="text-xs font-bold tracking-widest uppercase" style={{ color: C.gold, letterSpacing: "0.15em" }}>
                    Or Contact Ronnel Directly
                  </p>

                  <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg no-underline"
                    style={{ background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.25)", textDecoration: "none" }}>
                    <WhatsAppIcon size={20} color={C.whatsapp} />
                    <div>
                      <p className="text-sm font-semibold" style={{ color: C.whatsapp }}>WhatsApp — Immediate Response</p>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{CONTACT.phone}</p>
                    </div>
                  </a>

                  <a href={CONTACT.viber}
                    className="flex items-center gap-3 p-3 rounded-lg no-underline"
                    style={{ background: "rgba(115,96,242,0.1)", border: "1px solid rgba(115,96,242,0.25)", textDecoration: "none" }}>
                    <ViberIcon size={20} color={C.viber} />
                    <div>
                      <p className="text-sm font-semibold" style={{ color: C.viber }}>Viber — Send a Message</p>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{CONTACT.phone}</p>
                    </div>
                  </a>

                  <a href={`tel:${CONTACT.phoneRaw}`}
                    className="flex items-center gap-3 p-3 rounded-lg no-underline"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none" }}>
                    <PhoneCall className="w-5 h-5" style={{ color: C.gold }} />
                    <div>
                      <p className="text-sm font-semibold" style={{ color: C.white }}>Call Directly</p>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{CONTACT.phone} — Available 7 days</p>
                    </div>
                  </a>

                  <a href={`mailto:${CONTACT.email1}`}
                    className="flex items-center gap-3 p-3 rounded-lg no-underline"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none" }}>
                    <Mail className="w-5 h-5" style={{ color: C.gold }} />
                    <div>
                      <p className="text-sm font-semibold" style={{ color: C.white }}>Email Inquiry</p>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{CONTACT.email1}</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right: Form */}
              <form onSubmit={handleSubmit} className="p-6 rounded-2xl space-y-4"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>

                <div className="flex gap-3">
                  {[
                    { key: "show-suite", label: "Show Suite Visit", icon: MapPin },
                    { key: "online", label: "Online Presentation", icon: Play },
                  ].map((t) => (
                    <button key={t.key} type="button"
                      onClick={() => setFormData({ ...formData, type: t.key })}
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold cursor-pointer border-none"
                      style={{
                        background: formData.type === t.key ? C.gold : "rgba(255,255,255,0.06)",
                        color: formData.type === t.key ? C.navy : "rgba(255,255,255,0.6)",
                      }}>
                      <t.icon className="w-4 h-4" />
                      {t.label}
                    </button>
                  ))}
                </div>

                {[
                  { key: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                  { key: "phone", label: "Mobile Number", type: "tel", placeholder: "+63 9XX XXX XXXX" },
                  { key: "email", label: "Email", type: "email", placeholder: "you@email.com" },
                  { key: "date", label: "Preferred Date & Time", type: "text", placeholder: "e.g. Feb 15, 2pm" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.key]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      className="w-full p-3 rounded-lg text-sm outline-none"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: C.white,
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.5)" }}>
                    I'm interested as...
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["End-User", "Investor", "Signature Buyer"].map((type) => (
                      <button key={type} type="button"
                        onClick={() => setFormData({ ...formData, buyer: type })}
                        className="px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer border-none"
                        style={{
                          background: formData.buyer === type ? C.gold : "rgba(255,255,255,0.06)",
                          color: formData.buyer === type ? C.navy : "rgba(255,255,255,0.6)",
                        }}>
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <button type="submit"
                  className="w-full py-4 rounded-lg text-base font-bold cursor-pointer border-none flex items-center justify-center gap-2"
                  style={{
                    background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
                    color: C.navy,
                    boxShadow: "0 4px 15px rgba(212,175,55,0.3)",
                  }}>
                  <Calendar className="w-5 h-5" />
                  Confirm My Appointment with Ronnel
                </button>

                <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.4)" }}>
                  No obligation. Personalized consultation with your dedicated property specialist.
                </p>
              </form>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <div className="text-center py-12 px-6 rounded-2xl" style={{ background: "rgba(45,80,22,0.15)", border: "1px solid rgba(45,80,22,0.3)" }}>
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: "rgba(34,197,94,0.2)" }}>
                <Check className="w-8 h-8" style={{ color: "#22c55e" }} />
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: C.white, fontFamily: "Georgia, serif" }}>
                Appointment Confirmed
              </h3>
              <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.8)" }}>
                Thank you, {formData.name || "valued guest"}. Ronnel will contact you within 24 hours to finalize your {formData.type === "show-suite" ? "Show Suite visit" : "online presentation"}.
              </p>
              <p className="text-xs mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
                Preparing your personalized {formData.buyer || "investment"} analysis...
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <CTAButton variant="whatsapp" size="sm" href={CONTACT.whatsapp}>
                  <WhatsAppIcon size={16} color="#fff" /> Message Ronnel Now
                </CTAButton>
                <CTAButton variant="outline" size="sm" href={`tel:${CONTACT.phoneRaw}`}>
                  <PhoneCall className="w-4 h-4" /> Call {CONTACT.phone}
                </CTAButton>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </Section>
  );
}

// ══════════════════════════════════════════════════════════════
// DISCLAIMER
// ══════════════════════════════════════════════════════════════
function Disclaimer() {
  return (
    <div style={{ background: "#F5F5F5", borderTop: "1px solid #E0E0E0", borderBottom: "1px solid #E0E0E0" }}>
      <div className="max-w-6xl mx-auto px-4 py-5">
        <p style={{ color: "#666666", fontSize: 13, lineHeight: 1.7, textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
          This website is an independently created presentation for informational purposes only. It is not an official website of Shang Properties, Inc. All images, renderings, descriptions, and information are subject to change without prior notice and do not constitute a contractual offer. For official information, please refer to authorized materials from{" "}
          <a href="https://www.shangproperties.com" target="_blank" rel="noopener noreferrer"
            style={{ color: C.navy, textDecoration: "underline" }}>
            Shang Properties, Inc.
          </a>
        </p>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
// FOOTER — Enhanced with Contact + Quick Links + Disclaimer
// ══════════════════════════════════════════════════════════════
function Footer({ scrollToSection }) {
  return (
    <footer style={{ background: "#050E2B" }}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Left: Contact Info */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: C.gold, letterSpacing: "0.15em" }}>
              Your Property Specialist
            </p>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})` }}>
                <User className="w-7 h-7" style={{ color: C.navy }} />
              </div>
              <div>
                <p className="text-base font-bold" style={{ color: C.white }}>{CONTACT.name}</p>
                <p className="text-xs" style={{ color: C.gold }}>{CONTACT.title}</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{CONTACT.company}</p>
              </div>
            </div>

            <div className="space-y-2">
              <a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center gap-2 no-underline" style={{ textDecoration: "none" }}>
                <PhoneCall className="w-4 h-4" style={{ color: C.gold }} />
                <span className="text-sm" style={{ color: C.white }}>{CONTACT.phone}</span>
              </a>
              <a href={`mailto:${CONTACT.email1}`} className="flex items-center gap-2 no-underline" style={{ textDecoration: "none" }}>
                <Mail className="w-4 h-4" style={{ color: C.gold }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{CONTACT.email1}</span>
              </a>
              <a href={`mailto:${CONTACT.email2}`} className="flex items-center gap-2 no-underline" style={{ textDecoration: "none" }}>
                <Mail className="w-4 h-4" style={{ color: "rgba(255,255,255,0.3)" }} />
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{CONTACT.email2}</span>
              </a>
            </div>

            <div className="flex gap-2 mt-4">
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center no-underline"
                style={{ background: "rgba(37,211,102,0.15)", textDecoration: "none" }}>
                <WhatsAppIcon size={18} color={C.whatsapp} />
              </a>
              <a href={CONTACT.viber}
                className="w-10 h-10 rounded-lg flex items-center justify-center no-underline"
                style={{ background: "rgba(115,96,242,0.15)", textDecoration: "none" }}>
                <ViberIcon size={18} color={C.viber} />
              </a>
              <a href={`tel:${CONTACT.phoneRaw}`}
                className="w-10 h-10 rounded-lg flex items-center justify-center no-underline"
                style={{ background: "rgba(212,175,55,0.15)", textDecoration: "none" }}>
                <Phone className="w-4 h-4" style={{ color: C.gold }} />
              </a>
            </div>

            <p className="text-xs mt-3" style={{ color: "rgba(255,255,255,0.3)" }}>
              Licensed and accredited by Shang Properties, Inc.<br />
              Available 7 days a week for consultations
            </p>
          </div>

          {/* Center: Quick Links */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: C.gold, letterSpacing: "0.15em" }}>
              Quick Links
            </p>
            <div className="space-y-2.5">
              <a
                href="https://shangbauhiniaresidences.com/wp-content/themes/sbr2025/assets/img/floorplans/Brochure_Shang-Bauhinia-Residences.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold"
                style={{ color: C.gold, textDecoration: "none" }}
              >
                <BookOpen className="w-4 h-4" />
                Download Brochure (PDF)
              </a>
              {[
                { label: "Market Overview", id: "location" },
                { label: "Infrastructure Solutions", id: "solutions" },
                { label: "Developer Track Record", id: "developer" },
                { label: "Signature vs Premium", id: "comparison" },
                { label: "Resort Amenities", id: "amenities" },
                { label: "Investment Calculator", id: "investment" },
                { label: "FAQ", id: "faq" },
                { label: "Book a Visit", id: "booking" },
              ].map((link) => (
                <button key={link.id} onClick={() => scrollToSection(link.id)}
                  className="block text-sm bg-transparent border-none cursor-pointer text-left"
                  style={{ color: "rgba(255,255,255,0.6)", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = C.gold}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}>
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Brand + CTA */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: C.gold, letterSpacing: "0.15em" }}>
              Shang Bauhinia Residences
            </p>
            <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
              Cebu's first luxury vertical gated village. 52 stories of signature exclusivity between IT Park and Cebu Country Club.
            </p>
            <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}>
              <p>Gov. Cuenco Ave. Corner Bauhinia Drive</p>
              <p>Brgy. Kasambagan, Cebu City, 6000</p>
              <p>Philippines</p>
            </div>
            <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>Developed by Shang Properties, Inc. (PSE: SHNG)</p>

            <div className="space-y-3">
              <CTAButton variant="gold" size="xs" href={CONTACT.whatsapp} className="w-full justify-center">
                <WhatsAppIcon size={14} color={C.navy} /> Message Ronnel on WhatsApp
              </CTAButton>
              <CTAButton variant="outline" size="xs" onClick={() => scrollToSection("booking")} className="w-full justify-center">
                <Calendar className="w-4 h-4" /> Book Show Suite Visit
              </CTAButton>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {["PSE-Listed", "38-Year Record", "The Kuok Group", "Five-Star Award"].map((badge) => (
                <span key={badge} className="text-xs px-2 py-1 rounded"
                  style={{ background: "rgba(212,175,55,0.08)", color: "rgba(212,175,55,0.6)", border: "1px solid rgba(212,175,55,0.15)" }}>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "0 0 16px 0" }} />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © 2026 Shang Properties, Inc. All rights reserved. PSE-listed since 1991. Part of The Kuok Group. | Property Specialist: {CONTACT.name}
          </p>
          <button onClick={() => scrollToSection("hero")}
            className="flex items-center gap-1 text-sm bg-transparent border-none cursor-pointer"
            style={{ color: "rgba(255,255,255,0.4)" }}>
            <ArrowUp className="w-4 h-4" /> Back to top
          </button>
        </div>
      </div>

      {/* Mobile sticky CTA — Enhanced with two actions */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40"
        style={{ background: "rgba(10,36,99,0.97)", backdropFilter: "blur(20px)", borderTop: `1px solid rgba(212,175,55,0.3)` }}>
        <div className="flex gap-2 p-3">
          <a href={`tel:${CONTACT.phoneRaw}`}
            className="flex-1 py-3.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 border-none cursor-pointer no-underline"
            style={{ background: C.navy, color: C.gold, border: `1px solid ${C.gold}`, textDecoration: "none" }}>
            <PhoneCall className="w-4 h-4" /> Call Ronnel
          </a>
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
            className="flex-1 py-3.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 border-none cursor-pointer no-underline"
            style={{ background: `linear-gradient(135deg, ${C.whatsapp}, #1EBE57)`, color: C.white, textDecoration: "none" }}>
            <WhatsAppIcon size={16} color="#fff" /> WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}

// ══════════════════════════════════════════════════════════════
// MAIN LANDING PAGE
// ══════════════════════════════════════════════════════════════
export default function ShangBauhiniaLanding() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
        ::selection { background: ${C.gold}33; color: ${C.navy}; }
        input::placeholder { color: rgba(255,255,255,0.3); }
        a { text-decoration: none; }
      `}</style>

      <Navigation scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <StatsTicker />
      <SegmentSelector scrollToSection={scrollToSection} />
      <ProblemSolution />
      <MarketTier />
      <LocationAdvantage />
      <DeveloperTimeline />
      <SignatureComparison />
      <AmenitiesShowcase />
      <DesignPedigree />
      <InvestmentCalculator scrollToSection={scrollToSection} />
      <ObjectionFAQ />
      <BookingSection />
      <Disclaimer />
      <Footer scrollToSection={scrollToSection} />
      <FloatingContact />

      {/* Bottom padding for mobile sticky bar */}
      <div className="md:hidden" style={{ height: 70 }} />
    </div>
  );
}
