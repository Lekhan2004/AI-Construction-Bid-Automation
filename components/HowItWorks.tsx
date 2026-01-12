
import React from 'react';
import { motion } from 'framer-motion';
import { Database, BrainCircuit, FileSpreadsheet, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "We Scrape",
      description: "Our agents monitor agency sites 24/7. When a new RFP hits, we pull every PDF, blueprint, and spec automatically.",
      icon: <Database className="w-8 h-8" />,
      tag: "Monitoring"
    },
    {
      title: "AI Analyzes",
      description: "Multi-Agent AI parses the docs. Agent A finds scope, Agent B calculates quantities, Agent C checks compliance.",
      icon: <BrainCircuit className="w-8 h-8" />,
      tag: "Extraction"
    },
    {
      title: "You Bid",
      description: "Review the pre-filled BOQ. Adjust your margins, hit export, and submit your bid in record time.",
      icon: <FileSpreadsheet className="w-8 h-8" />,
      tag: "Winning"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 dark:text-white text-black">How it Works</h2>
          <p className="text-neutral-500 font-medium">Bidding automation in three simple steps.</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-24 left-0 w-full h-px bg-neutral-200 dark:bg-neutral-800 hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-white dark:bg-black border-2 border-neutral-200 dark:border-neutral-800 rounded-full flex items-center justify-center mb-8 relative transition-colors">
                   <div className="absolute -top-2 -right-2 px-2 py-1 bg-black dark:bg-white text-white dark:text-black text-[10px] font-black rounded uppercase shadow-md transition-colors">
                     0{i + 1}
                   </div>
                   <div className="text-black dark:text-white transition-colors">
                     {step.icon}
                   </div>
                </div>
                
                <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-600 uppercase tracking-[0.2em] mb-4">
                  {step.tag}
                </span>
                <h3 className="text-2xl font-bold mb-4 dark:text-white text-black">{step.title}</h3>
                <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-sm">
                  {step.description}
                </p>

                {i < steps.length - 1 && (
                  <div className="mt-8 lg:hidden text-neutral-300 dark:text-neutral-700">
                    <ArrowRight size={24} className="rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
