import React from 'react';
import { Check, Zap, Rocket, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  const plans = [
    {
      title: "Basic Pilot",
      price: "Free",
      period: "/Beta",
      description: "Explore AI-powered bidding.",
      features: [
        "10 AI Estimates per month",
        "2 Daily Portal Scrapes",
        "Standard CSV Export",
        "Community Support",
        "Public Beta Access"
      ],
      icon: <Zap size={24} />,
      accent: false,
      cta: "Start Free"
    },
    {
      title: "Plus Pro",
      price: "$249",
      period: "/mo",
      description: "For firms bidding every week.",
      features: [
        "50 AI Estimates per month",
        "Unlimited Portal Access",
        "Excel & PDF Export Support",
        "Wage Mapping Engine",
        "Priority Email Support",
        "Custom Trade Profiles"
      ],
      icon: <Rocket size={24} />,
      accent: true,
      cta: "Get Early Access"
    },
    {
      title: "Enterprise",
      price: "Custom",
      period: "",
      description: "Intelligence suite for large teams.",
      features: [
        "Unlimited AI Estimates",
        "Multi-User Team Accounts",
        "Dedicated Account Lead",
        "API Data Integration",
        "Blueprint Bulk Processing",
        "White-glove Onboarding"
      ],
      icon: <ShieldCheck size={24} />,
      accent: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-24 md:py-40 px-6 bg-white dark:bg-neutral-950 relative overflow-hidden transition-colors duration-500">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-neutral-100/50 dark:bg-white/[0.03] rounded-full blur-[160px] -z-10 pointer-events-none transition-all duration-700" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 dark:text-white text-neutral-950">Scale your bidding.</h2>
          <p className="text-neutral-500 dark:text-neutral-500 font-bold max-w-xl mx-auto text-lg">Predictable plans designed for high-performance contractors.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col p-10 rounded-[2.5rem] border transition-all duration-500 hover:translate-y-[-10px] ${
                plan.accent 
                  ? 'bg-neutral-950 dark:bg-neutral-900 border-neutral-950 dark:border-white shadow-2xl scale-105 z-10' 
                  : 'bg-white dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 shadow-xl'
              }`}
            >
              {plan.accent && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-5 py-2 bg-green-500 text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                  plan.accent ? 'bg-white text-black' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-950 dark:text-neutral-400'
                }`}>
                  {plan.icon}
                </div>
                <h3 className={`text-xl font-black ${plan.accent ? 'text-white' : 'dark:text-white text-neutral-950'}`}>{plan.title}</h3>
              </div>

              <div className="mb-8">
                <div className="flex items-end gap-1.5">
                  <span className={`text-5xl font-black ${plan.accent ? 'text-white' : 'dark:text-white text-neutral-950'}`}>{plan.price}</span>
                  <span className={`text-base font-bold pb-1.5 ${plan.accent ? 'text-neutral-400' : 'text-neutral-500 dark:text-neutral-500'}`}>{plan.period}</span>
                </div>
                <p className={`text-sm mt-3 font-medium ${plan.accent ? 'text-neutral-400' : 'text-neutral-500 dark:text-neutral-400'}`}>{plan.description}</p>
              </div>

              <div className="space-y-5 mb-12 flex-1">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-sm ${
                      plan.accent ? 'bg-green-400' : 'bg-neutral-900 dark:bg-white'
                    }`}>
                      <Check size={12} className={plan.accent ? 'text-black' : 'text-white dark:text-black'} strokeWidth={3} />
                    </div>
                    <span className={`text-sm font-bold ${plan.accent ? 'text-neutral-200' : 'text-neutral-700 dark:text-neutral-300'}`}>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-3xl font-black text-lg transition-all active:scale-[0.98] shadow-xl ${
                plan.accent 
                  ? 'bg-white text-black hover:bg-neutral-100 shadow-white/5' 
                  : 'bg-neutral-950 dark:bg-white text-white dark:text-black hover:opacity-90 shadow-black/10 dark:shadow-white/5'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
        
        <p className="mt-16 text-center text-[10px] text-neutral-400 dark:text-neutral-600 font-black uppercase tracking-[0.3em]">
          Empowering Contractors in New York, Chicago, and LA • Cancel Anytime
        </p>
      </div>
    </section>
  );
};

export default Pricing;