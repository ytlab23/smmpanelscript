import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Details", href: "#details" },
  { label: "FAQ", href: "#faq" },
  { label: "Supporters", href: "#supporters" },
];

export function Footer() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const getLink = (href: string) =>
    isHome ? href : "/" + href;

  return (
    <footer className="w-full border-t-2 border-gradient-to-r from-fuchsia-400 to-indigo-400 dark:from-fuchsia-700 dark:to-indigo-700 py-8 bg-gradient-to-r from-white/80 to-slate-100/80 dark:from-slate-900/80 dark:to-slate-800/80">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center shadow border-2 border-white dark:border-slate-900">
            <span className="text-base font-extrabold text-white tracking-tight">SPS</span>
          </div>
          <span className="font-bold text-base text-fuchsia-700 dark:text-fuchsia-300">SMM Panel Script</span>
        </div>
        <nav className="flex flex-wrap items-center gap-4">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={getLink(link.href)}
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Link to="/auth">
          <Button
            size="sm"
            className="bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-semibold shadow hover:from-indigo-500 hover:to-fuchsia-500 px-4"
          >
            Sign Up
          </Button>
        </Link>
      </div>
      <div className="text-center text-xs text-gray-400 mt-4">
        &copy; {new Date().getFullYear()} smmpanelscript.org. All rights reserved.
      </div>
    </footer>
  );
}