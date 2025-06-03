import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, Rocket, Shield, Zap, Server, Globe, LayoutDashboard, Palette, Repeat, CreditCard, Plug, RefreshCcw, Bell, Users, DollarSign, Gift, BarChart2, Link2, UserPlus, ArrowDownCircle, XCircle, Timer, CalendarCheck2 } from "lucide-react";
import { SupporterModal } from "@/components/SupporterModal";
import { ContactModal } from "@/components/ContactModal";
import { Link } from "react-router-dom";

// ...features, detailFeatures, faqs, supporters arrays remain unchanged...

const Index = () => {
  const pricingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Free SMM Panel Script - Launch Your SMM Panel Today!";
    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent = "Launch your own SMM panel in minutes with Free SMM Panel Script. No coding, no hidden fees—just your brand, your rules, your panel. Try it free today!";
    if (metaDesc) {
      metaDesc.setAttribute("content", descContent);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = descContent;
      document.head.appendChild(meta);
    }
  }, []);

  const scrollToPricing = () => {
    if (pricingRef.current) {
      pricingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f0fdfa] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0e172a] transition-colors duration-500">
      {/* ...rest of the component remains unchanged... */}
      {/* (All content and style preserved) */}
    </div>
  );
};

export default Index;