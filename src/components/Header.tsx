import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Details", href: "#details" },
  { label: "FAQ", href: "#faq" },
  { label: "Supporters", href: "#supporters" },
];

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  // For anchor links, only scroll if on homepage, else go to home with hash
  const getLink = (href: string) =>
    isHome ? href : "/" + href;

  return (
    <header className="sticky top-0 z-30 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-fuchsia-100 dark:border-fuchsia-900 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center shadow border-2 border-white dark:border-slate-900">
            <span className="text-lg font-extrabold text-white tracking-tight drop-shadow">SPS</span>
          </div>
          <span className="font-bold text-lg text-fuchsia-700 dark:text-fuchsia-300 group-hover:text-indigo-600 transition-colors">SMM Panel Script</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={getLink(link.href)}
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Link to="/auth">
          <Button className="bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-semibold shadow hover:from-indigo-500 hover:to-fuchsia-500 px-5">
            Sign Up
          </Button>
        </Link>
      </div>
    </header>
  );
}