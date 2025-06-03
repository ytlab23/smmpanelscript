import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, Rocket, Shield, Zap, Server, Globe, LayoutDashboard, Palette, Repeat, CreditCard, Plug, RefreshCcw, Bell, Users, DollarSign, Gift, BarChart2, Link2, UserPlus, ArrowDownCircle, XCircle, Timer, CalendarCheck2 } from "lucide-react";
import { SupporterModal } from "@/components/SupporterModal";
import { ContactModal } from "@/components/ContactModal";
import { useRef } from "react";
import { Link } from "react-router-dom";

// ... (rest of the code remains unchanged)

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
        <title>Free SMM Panel Script - Launch Your SMM Panel Today!</title>
        <meta
          name="description"
          content="Launch your own SMM panel with our Free SMM Panel Script. No tech headaches, no hidden fees—just your brand, your rules, your panel."
        />
      </Helmet>
      {/* Hero Section */}
      {/* ...rest of the component remains unchanged */}
      {/* (All content and styles are preserved) */}
    </div>
  );
};

export default Index;