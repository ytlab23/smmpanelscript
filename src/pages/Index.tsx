import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, Rocket, Shield, Zap, Server, Globe, LayoutDashboard, Palette, Repeat, CreditCard, Plug, RefreshCcw, Bell, Users, DollarSign, Gift, BarChart2, Link2, UserPlus, ArrowDownCircle, XCircle, Timer, CalendarCheck2 } from "lucide-react";
import { SupporterModal } from "@/components/SupporterModal";
import { ContactModal } from "@/components/ContactModal";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// ...features, detailFeatures, faqs unchanged...

const supporters = [
  {
    name: "ScriptSMMPanel",
    url: "https://scriptsmmpanel.com/",
    desc: "Resource about SMM panel scripts & premium script provider.",
    logo: "/scriptsmmpanel-logo.png",
    alt: "ScriptSMMPanel logo - premium SMM panel script provider",
    title: "ScriptSMMPanel Logo",
  },
  {
    name: "TheYTLab",
    url: "https://theytlab.com/",
    desc: "YouTube SMM provider, trusted by thousands.",
    logo: "/logo-theytlab.webp",
    alt: "TheYTLab logo - YouTube SMM provider",
    title: "TheYTLab Logo",
  },
  {
    name: "SMMStone",
    url: "https://smmstone.com/",
    desc: "Telegram SMM provider, rock solid.",
    logo: "/stonesmm-logo.png",
    alt: "SMMStone logo - Telegram SMM provider",
    title: "SMMStone Logo",
  },
];

const Index = () => {
  const pricingRef = useRef<HTMLDivElement>(null);

  const scrollToPricing = () => {
    if (pricingRef.current) {
      pricingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f0fdfa] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0e172a] transition-colors duration-500">
      <Helmet>
        <title>Free SMM Panel Script | SMMPanelScript.org</title>
        <meta name="description" content="Launch your own SMM panel for free with SMMPanelScript. No coding required, no hidden fees. Hosting included, custom domain, and more!" />
      </Helmet>
      {/* Hero Section */}
      {/* ...rest of the code unchanged... */}
      {/* Supporters Section */}
      <section id="supporters" className="w-full max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 tracking-tight bg-gradient-to-r from-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
          Supported By
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {supporters.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-white/80 dark:bg-slate-900/80 rounded-xl shadow p-6 hover:scale-105 transition-transform duration-200 min-w-[180px] cursor-pointer"
              title={s.title}
            >
              <img
                src={s.logo}
                alt={s.alt}
                title={s.title}
                className="mb-2 w-24 h-16 object-contain"
                loading="lazy"
              />
              <div className="mb-2 text-lg font-bold text-fuchsia-600 dark:text-fuchsia-400">{s.name}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 text-center">{s.desc}</div>
            </a>
          ))}
        </div>
        <div className="flex justify-center">
          <SupporterModal />
        </div>
      </section>
      {/* ...rest of the code unchanged... */}
    </div>
  );
};

export default Index;