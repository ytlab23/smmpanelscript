import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Rocket, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: <Rocket className="w-7 h-7 text-white" />,
    title: "Lightning Fast",
    description: "Our SMM panel script is optimized for speed and performance, ensuring your business runs smoothly.",
    color: "from-fuchsia-500 to-indigo-500",
  },
  {
    icon: <Shield className="w-7 h-7 text-white" />,
    title: "Secure & Reliable",
    description: "Built with security in mind, your data and your customers are always protected.",
    color: "from-emerald-500 to-teal-400",
  },
  {
    icon: <Zap className="w-7 h-7 text-white" />,
    title: "Easy Customization",
    description: "Easily tailor the panel to your brand with our flexible and intuitive interface.",
    color: "from-yellow-400 to-orange-500",
  },
];

const Index = () => {
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
            <span className="text-3xl font-extrabold text-white tracking-tight drop-shadow-lg">SP</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 text-center tracking-tight drop-shadow-lg">
            smmpanelscript.org
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 text-center max-w-2xl font-medium">
            The <span className="bg-gradient-to-r from-fuchsia-500 to-indigo-500 bg-clip-text text-transparent font-bold">ultimate SMM panel script</span> for your business. Launch your own social media marketing panel with <span className="font-semibold text-indigo-600 dark:text-fuchsia-400">ease</span>, <span className="font-semibold text-fuchsia-600 dark:text-indigo-400">speed</span>, and <span className="font-semibold text-emerald-600 dark:text-emerald-400">security</span>.
          </p>
          <Button
            size="lg"
            className="px-10 py-6 text-lg font-semibold shadow-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500 transition-colors duration-300 text-white"
          >
            Get Started
          </Button>
        </div>
      </header>

      {/* Features Section */}
      <section className="flex-1 w-full max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 tracking-tight bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
          Why Choose smmpanelscript.org?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="relative group bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg border-0 shadow-xl hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
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

      {/* Pricing Teaser */}
      <section className="w-full max-w-3xl mx-auto px-4 py-12">
        <div className="relative rounded-2xl p-10 flex flex-col items-center bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl shadow-2xl border border-fuchsia-200 dark:border-fuchsia-800 overflow-hidden">
          {/* Glassmorphism gradient accent */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-fuchsia-400 to-indigo-400 opacity-30 blur-2xl rounded-full z-0" />
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-5 text-center text-lg font-medium">
              Get started for as low as{" "}
              <span className="font-extrabold text-3xl text-fuchsia-600 dark:text-fuchsia-400 drop-shadow-lg">$49</span>
              . No hidden fees, no surprises.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-fuchsia-500 text-fuchsia-700 dark:text-fuchsia-300 font-semibold hover:bg-fuchsia-50 dark:hover:bg-fuchsia-900/20 transition-colors duration-200"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto">
        <div className="border-t-2 border-gradient-to-r from-fuchsia-400 to-indigo-400 dark:from-fuchsia-700 dark:to-indigo-700 py-8 flex flex-col items-center bg-gradient-to-r from-white/80 to-slate-100/80 dark:from-slate-900/80 dark:to-slate-800/80">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-emerald-500" />
            <span className="text-base text-gray-700 dark:text-gray-300 font-medium">
              Trusted by SMM businesses worldwide
            </span>
          </div>
          <span className="text-xs text-gray-400 mb-2">
            &copy; {new Date().getFullYear()} smmpanelscript.org. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Index;