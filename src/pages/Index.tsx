import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, Rocket, Shield, Zap, Server, Globe, LayoutDashboard, Palette, Repeat, CreditCard, Plug, RefreshCcw, Bell, Users, DollarSign, Gift, BarChart2, Link2, UserPlus, ArrowDownCircle, XCircle, Timer, CalendarCheck2 } from "lucide-react";
import { SupporterModal } from "@/components/SupporterModal";
import { ContactModal } from "@/components/ContactModal";
import { useRef } from "react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Zap className="w-7 h-7 text-white" />,
    title: "Totally Free Script",
    description: "Yep, you read that right. No hidden fees, no catch. Get your SMM panel up and running for free.",
    color: "from-fuchsia-500 to-indigo-500",
  },
  {
    icon: <Rocket className="w-7 h-7 text-white" />,
    title: "Lightning Fast",
    description: "Nobody likes waiting. Our script is built for speed, so your users never have to twiddle their thumbs.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: <Server className="w-7 h-7 text-white" />,
    title: "Hosting Included",
    description: "Don’t stress about servers. We handle the hosting, so you can focus on growing your panel.",
    color: "from-emerald-500 to-teal-400",
  },
  {
    icon: <Globe className="w-7 h-7 text-white" />,
    title: "Custom Domain",
    description: "Bring your own domain and make your panel truly yours. No weird subdomains here.",
    color: "from-sky-500 to-blue-500",
  },
  {
    icon: <LayoutDashboard className="w-7 h-7 text-white" />,
    title: "Powerful Admin Dashboard",
    description: "All your controls in one place. Manage orders, users, and more without breaking a sweat.",
    color: "from-indigo-500 to-fuchsia-500",
  },
  {
    icon: <Palette className="w-7 h-7 text-white" />,
    title: "Theme Customizer",
    description: "Make your panel match your vibe. Change colors, logos, and more in a snap.",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: <Repeat className="w-7 h-7 text-white" />,
    title: "Automated Order Processing",
    description: "Orders process themselves. You just sit back and watch the magic happen.",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: <CreditCard className="w-7 h-7 text-white" />,
    title: "Multiple Payment Methods",
    description: "Let your users pay however they want—cards, crypto, you name it.",
    color: "from-orange-400 to-yellow-500",
  },
  {
    icon: <Plug className="w-7 h-7 text-white" />,
    title: "1-Click API Import",
    description: "Add new API providers in seconds. No tech headaches required.",
    color: "from-cyan-500 to-blue-400",
  },
];

const detailFeatures = [
  {
    icon: <RefreshCcw className="w-6 h-6 text-fuchsia-500" />,
    title: "Automated Status Updates",
    description: "Keep your users in the loop with real-time order status via API.",
  },
  {
    icon: <ArrowDownCircle className="w-6 h-6 text-indigo-500" />,
    title: "Drip Feed",
    description: "Deliver services gradually—perfect for natural growth.",
  },
  {
    icon: <CalendarCheck2 className="w-6 h-6 text-emerald-500" />,
    title: "Subscriptions",
    description: "Set it and forget it! Users can subscribe to get services automatically whenever they post something new.",
  },
  {
    icon: <Repeat className="w-6 h-6 text-emerald-500" />,
    title: "Refill",
    description: "Easily refill orders with a click. No more manual juggling.",
  },
  {
    icon: <XCircle className="w-6 h-6 text-red-500" />,
    title: "Cancel Button",
    description: "Let users cancel orders themselves (if you want).",
  },
  {
    icon: <Timer className="w-6 h-6 text-yellow-500" />,
    title: "Average Time",
    description: "Show users how long orders usually take—set expectations, avoid headaches.",
  },
  {
    icon: <Bell className="w-6 h-6 text-pink-500" />,
    title: "Notifications",
    description: "Get notified about what matters—orders, payments, and more.",
  },
  {
    icon: <Plug className="w-6 h-6 text-blue-500" />,
    title: "Integrations",
    description: "Connect with your favorite tools and providers, hassle-free.",
  },
  {
    icon: <LayoutDashboard className="w-6 h-6 text-purple-500" />,
    title: "Child Panels",
    description: "Let others resell your services with their own branded panels.",
  },
  {
    icon: <UserPlus className="w-6 h-6 text-green-500" />,
    title: "Affiliate Program",
    description: "Reward users for spreading the word. Everyone wins.",
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-indigo-400" />,
    title: "Reports",
    description: "See what’s working (and what’s not) with clear, simple reports.",
  },
  {
    icon: <Users className="w-6 h-6 text-fuchsia-400" />,
    title: "User Management",
    description: "Ban, unban, promote, demote—manage your community with ease.",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-amber-500" />,
    title: "Custom Rates",
    description: "Set your own prices for every service. Maximize your profits.",
  },
  {
    icon: <Link2 className="w-6 h-6 text-cyan-500" />,
    title: "API for Users",
    description: "Let your users connect their own panels or tools via API.",
  },
  {
    icon: <Gift className="w-6 h-6 text-pink-400" />,
    title: "Bonuses & Discounts",
    description: "Run promos, give bonuses, and keep your users coming back.",
  },
];

const faqs = [
  {
    q: "Is it really free?",
    a: "Absolutely! You can use SMMPanelScript for free until you hit $5,000 in revenue. After that, we just take a tiny cut to keep the lights on.",
  },
  {
    q: "Do I need to know how to code?",
    a: "Nope! If you can click a mouse and type, you can run your own SMM panel with us. No tech wizardry required.",
  },
  {
    q: "Can I use my own domain?",
    a: "Of course! Your brand, your rules. Bring your own domain and make your panel truly yours.",
  },
  {
    q: "What happens if I go over $5,000 in revenue?",
    a: "Congrats! We’ll only take 2% up to $10k, and just 1% after that. No sneaky fees, ever.",
  },
  {
    q: "How do I get paid?",
    a: "You choose how you want to get paid—cards, crypto, whatever works for you. We don’t touch your money.",
  },
  {
    q: "Can I import API providers?",
    a: "Yes! Add new API providers with just one click. No headaches, no complicated setup.",
  },
  {
    q: "Is hosting really included?",
    a: "Yep. We handle the servers so you can focus on growing your business, not fighting with cPanel.",
  },
  {
    q: "What if I need help?",
    a: "We’re here for you! Reach out anytime and we’ll get you sorted. No robots, just real people.",
  },
  {
    q: "Can I customize the look of my panel?",
    a: "Totally! Change colors, logos, and more to match your vibe. Make it yours.",
  },
];

const supporters = [
  {
    name: "SMMPanelScript",
    url: "https://smmpanelscript.org",
    desc: "The project that keeps it all running.",
    logo: null,
  },
  {
    name: "TheYTLab",
    url: "https://theytlab.com",
    desc: "YouTube SMM provider, trusted by thousands.",
    logo: null,
  },
  {
    name: "SMMStone",
    url: "https://smmstone.com",
    desc: "Telegram SMM provider, rock solid.",
    logo: null,
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
      {/* Hero Section */}
      <header className="relative w-full py-20 px-4 flex flex-col items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          aria-hidden="true"
        >
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-br from-indigo-400 via-fuchsia-400 to-sky-400 opacity-30 blur-3xl rounded-full animate-pulse" />
        </div>
        <div className="relative z-10 flex flex-col items-center">
          {/* Logo */}
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center shadow-2xl mb-6 border-4 border-white dark:border-slate-900">
            <span className="text-3xl font-extrabold text-white tracking-tight drop-shadow-lg">SPS</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 text-center tracking-tight drop-shadow-lg">
            Free SMM Panel Script
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 text-center max-w-2xl font-medium">
            Want to run your own SMM panel? We make it ridiculously easy (and free). No tech headaches, no hidden fees—just your brand, your rules, your panel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="px-8 py-5 text-lg font-semibold shadow-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500 transition-colors duration-300 text-white"
              onClick={scrollToPricing}
            >
              See Pricing
            </Button>
            <Link to="/auth">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-5 text-lg font-semibold border-fuchsia-500 text-fuchsia-700 dark:text-fuchsia-300 hover:bg-fuchsia-50 dark:hover:bg-fuchsia-900/20 transition-colors duration-200"
              >
                Sign Up Free
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="w-full max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 tracking-tight bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
          Everything You Need (And Then Some)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="relative group bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-0 shadow-xl hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
            >
              <CardContent className="flex flex-col items-center py-10 px-4">
                <div
                  className={`mb-5 w-16 h-16 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-center text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center text-base font-medium">
                  {feature.description}
                </p>
              </CardContent>
              {/* Glow effect */}
              <div className={`absolute -inset-1 rounded-2xl z-[-1] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${feature.color} blur-lg`} />
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" ref={pricingRef} className="w-full max-w-3xl mx-auto px-4 py-12">
        <div className="relative rounded-2xl p-10 flex flex-col items-center bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl shadow-2xl border border-fuchsia-200 dark:border-fuchsia-800 overflow-hidden">
          {/* Glassmorphism gradient accent */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-fuchsia-400 to-indigo-400 opacity-30 blur-2xl rounded-full z-0" />
          <div className="relative z-10 flex flex-col items-center w-full">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
              Pricing That Makes Sense
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-5 text-center text-lg font-medium">
              No subscriptions, no nonsense. You grow, we grow.
            </p>
            <Table className="mb-4 w-full max-w-lg mx-auto border rounded-lg overflow-hidden">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">Revenue</TableHead>
                  <TableHead className="text-center">You Pay</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-center font-semibold">$0 – $5,000</TableCell>
                  <TableCell className="text-center font-bold text-emerald-600">Free</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center font-semibold">$5,000 – $10,000</TableCell>
                  <TableCell className="text-center font-bold text-fuchsia-600">2%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center font-semibold">$10,000+</TableCell>
                  <TableCell className="text-center font-bold text-indigo-600">1%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-fuchsia-500 text-fuchsia-700 dark:text-fuchsia-300 font-semibold hover:bg-fuchsia-50 dark:hover:bg-fuchsia-900/20 transition-colors duration-200"
            >
              See Full Pricing Details
            </Button>
          </div>
        </div>
      </section>

      {/* In-Detail Features Section */}
      <section id="details" className="w-full max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 tracking-tight bg-gradient-to-r from-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
          Dive Into The Details
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {detailFeatures.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center bg-white/80 dark:bg-slate-900/80 rounded-2xl shadow-lg p-8 hover:scale-[1.02] transition-transform duration-200"
            >
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-lg font-semibold mb-1 text-center">{feature.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-center text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 tracking-tight bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white/80 dark:bg-slate-900/80 rounded-xl shadow p-6">
              <div className="flex items-start gap-3">
                <span className="font-bold text-fuchsia-600 dark:text-fuchsia-400">Q:</span>
                <span className="font-semibold">{faq.q}</span>
              </div>
              <div className="flex items-start gap-3 mt-2">
                <span className="font-bold text-indigo-600 dark:text-indigo-400">A:</span>
                <span>{faq.a}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

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
              className="flex flex-col items-center bg-white/80 dark:bg-slate-900/80 rounded-xl shadow p-6 hover:scale-105 transition-transform duration-200 min-w-[180px]"
            >
              <div className="mb-2 text-lg font-bold text-fuchsia-600 dark:text-fuchsia-400">{s.name}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 text-center">{s.desc}</div>
            </a>
          ))}
        </div>
        <div className="flex justify-center">
          <SupporterModal />
        </div>
      </section>

      {/* Sleek CTA at Bottom */}
      <section className="w-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 py-12 px-4 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 text-center drop-shadow-lg">
          Ready to launch your SMM panel?
        </h2>
        <p className="text-lg text-white/90 mb-6 text-center max-w-xl">
          Whether you have questions or want to get started, we're here to help. Reach out or sign up and join the SMMPanelScript family!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <ContactModal
            triggerLabel="Contact Us"
            title="Contact Us"
            description="Have a question or want to chat? Fill out the form and we'll get back to you!"
            buttonClass="bg-white text-fuchsia-700 font-semibold border-0 shadow hover:bg-fuchsia-100"
          />
          <Link to="/auth">
            <Button
              size="lg"
              className="bg-white text-fuchsia-700 font-semibold shadow hover:bg-fuchsia-100"
            >
              Sign Up Free
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;