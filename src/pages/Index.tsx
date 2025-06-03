import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, Rocket, Shield, Zap, Server, Globe, LayoutDashboard, Palette, Repeat, CreditCard, Plug, RefreshCcw, Bell, Users, DollarSign, Gift, BarChart2, Link2, UserPlus, ArrowDownCircle, XCircle, Timer, CalendarCheck2 } from "lucide-react";
import { SupporterModal } from "@/components/SupporterModal";
import { ContactModal } from "@/components/ContactModal";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Meta } from "@/components/Meta";

const features = [
  // ... unchanged ...
];

const detailFeatures = [
  // ... unchanged ...
];

const faqs = [
  // ... unchanged ...
];

const supporters = [
  {
    name: "ScriptSMMPanel",
    url: "https://scriptsmmpanel.com/",
    desc: "Resource about SMM panel scripts & premium script provider.",
    logo: "/scriptsmmpanel logo.png",
    alt: "ScriptSMMPanel logo - premium SMM panel script provider",
    title: "ScriptSMMPanel Logo",
  },
  {
    name: "TheYTLab",
    url: "https://theytlab.com/",
    desc: "YouTube SMM provider, trusted by thousands.",
    logo: "/logo theytlab.webp",
    alt: "TheYTLab logo - YouTube SMM provider",
    title: "TheYTLab Logo",
  },
  {
    name: "SMMStone",
    url: "https://smmstone.com/",
    desc: "Telegram SMM provider, rock solid.",
    logo: "/stonesmm logo.png",
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
      <Meta
        title="Free SMM Panel Script - Launch Your Own SMM Panel Instantly"
        description="Get your own SMM panel for free with SMMPanelScript. No coding, no hidden fees. Hosting included, custom domain, and powerful admin dashboard. Start now!"
      />
      {/* ... rest of the page ... */}
      {/* (no changes to the rest of the file) */}
      {/* ... */}
    </div>
  );
};

export default Index;