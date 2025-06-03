import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Rocket, Shield, Zap } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const features = [
  {
    icon: <Rocket className="w-6 h-6 text-primary" />,
    title: "Lightning Fast",
    description: "Our SMM panel script is optimized for speed and performance, ensuring your business runs smoothly.",
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Secure & Reliable",
    description: "Built with security in mind, your data and your customers are always protected.",
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Easy Customization",
    description: "Easily tailor the panel to your brand with our flexible and intuitive interface.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-slate-100 dark:from-background dark:to-slate-900">
      {/* Hero Section */}
      <header className="w-full py-12 px-4 flex flex-col items-center justify-center">
        <div className="mb-6">
          {/* Logo Placeholder */}
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg mb-4">
            <span className="text-2xl font-bold text-white">SM</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 text-center">
          SMMScript.io
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 text-center max-w-xl">
          The ultimate SMM panel script for your business. Launch your own social media marketing panel with ease, speed, and security.
        </p>
        <Button size="lg" className="px-8 py-6 text-lg shadow-md">
          Get Started
        </Button>
      </header>

      {/* Features Section */}
      <section className="flex-1 w-full max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Why Choose SMMScript.io?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="flex flex-col items-center py-8">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="w-full max-w-3xl mx-auto px-4 py-8">
        <div className="bg-primary/5 rounded-xl p-8 flex flex-col items-center">
          <h3 className="text-xl font-bold mb-2">Simple, Transparent Pricing</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
            Get started for as low as <span className="font-bold text-primary">$49</span>. No hidden fees, no surprises.
          </p>
          <Button variant="outline" size="lg">
            View Pricing
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto">
        <div className="border-t border-gray-200 dark:border-gray-700 py-6 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm text-gray-500 dark:text-gray-400">Trusted by SMM businesses worldwide</span>
          </div>
          <span className="text-xs text-gray-400">&copy; {new Date().getFullYear()} SMMScript.io. All rights reserved.</span>
          <MadeWithDyad />
        </div>
      </footer>
    </div>
  );
};

export default Index;