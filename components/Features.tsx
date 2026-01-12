import React from 'react';
import { motion } from 'framer-motion';
import { Search, Cpu, Scale, Download, MousePointer2, ShieldCheck } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Automated Discovery",
      description: "We scrape 12+ government portals 24/7. When a bid matches your specialty, you get an instant alert.",
      icon: <Search size={22} />
    },
    {
      title: "Multi-Agent Extraction",
      description: "Our proprietary AI pipeline reads blueprints and specs better than human estimators, identifying trade-specific risks.",
      icon: <Cpu size={22} />
    },
    {
      title: "Smart Wage Sync",
      description: "Auto-mapping of Dept of Labor (DOL) wage rates to specific scope items and trade classifications.",
      icon: <Scale size={22} />
    },
    {
      title: "Pro-Format Export",
      description: "Download ready-to-submit bids in Excel, PDF, or CSV formatted exactly to the agency's strict standards.",
      icon: <Download size={22} />
    },
    {
      title: "One-Click Analysis",
      description: "Instantly cross-check new quantities against your firm's historical project data and profit margins.",
      icon: <MousePointer2 size={22} />
    },
    {
      title: "Compliance Validator",
      description: "AI-powered checks verify that totals and units align across every single page of the tender package.",
      icon: <ShieldCheck size={22} />
    }
  ];

  return (
    <section id="features" className="py-24 md:py-32 px-6 bg-neutral-50/50 dark:bg-neutral-900/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20 text-left">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 dark:text-white text-neutral-950 leading-tight">Heavy-duty automation for<br/>high-stakes contractors.</h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg md:text-xl font-medium leading-relaxed">Built by industry veterans who know exactly how painful bidding is. We automated the manual grind so you can focus on winning work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-10 glass rounded-[2.5rem] border border-neutral-200 dark:border-neutral-800 hover:border-neutral-950 dark:hover:border-neutral-100 transition-all hover:bg-white dark:hover:bg-neutral-900/40 text-left shadow-sm hover:shadow-2xl"
            >
              <div className="w-14 h-14 bg-neutral-100 dark:bg-neutral-900 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-neutral-950 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-neutral-950 transition-all shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-black mb-4 dark:text-white text-neutral-950 leading-tight">{feature.title}</h3>
              <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium transition-colors group-hover:text-neutral-800 dark:group-hover:text-neutral-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;