import React from 'react';
import { motion } from 'framer-motion';
import { X, Clock, FileWarning, Search, Zap, CheckCircle2, AlertCircle } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section id="comparison" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 dark:text-white text-neutral-950 leading-tight">The Evolution of Bidding</h2>
          <p className="text-neutral-500 dark:text-neutral-500 font-semibold max-w-xl mx-auto">From spreadsheet nightmares to instant AI intelligence. See the impact AutoBid makes on your firm.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Traditional Way */}
          <div className="relative group">
            <div className="absolute inset-0 bg-red-500/5 rounded-[2.5rem] blur-3xl group-hover:opacity-100 transition-opacity opacity-0 pointer-events-none" />
            <div className="relative h-full glass rounded-[2.5rem] p-8 md:p-14 border border-neutral-200 dark:border-neutral-800 overflow-hidden text-left">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-500 flex items-center justify-center transition-colors shadow-sm">
                  <AlertCircle size={24} />
                </div>
                <h3 className="text-2xl font-black text-neutral-800 dark:text-neutral-200">The Traditional Process</h3>
              </div>

              <div className="space-y-10">
                {[
                  { icon: <Search size={22} />, text: 'Manual Portal Scouting', detail: 'Hours lost browsing confusing agency sites.' },
                  { icon: <FileWarning size={22} />, text: '300+ Page Reading', detail: 'Human error missing key technical specs.' },
                  { icon: <Clock size={22} />, text: 'Manual Pricing Lookup', detail: 'Updating labor rates via massive PDF tables.' },
                  { icon: <X size={22} />, text: 'Missed Opportunities', detail: 'Can only bid on 20% of matching jobs.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-red-500 dark:text-red-400 mt-1 shrink-0">{item.icon}</div>
                    <div>
                      <div className="text-lg font-black text-neutral-900 dark:text-neutral-200 mb-1">{item.text}</div>
                      <div className="text-sm font-medium text-neutral-500 dark:text-neutral-500">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-14 p-5 bg-neutral-100 dark:bg-red-500/5 border border-neutral-200 dark:border-red-500/10 rounded-2xl text-center">
                <span className="text-[10px] font-black text-red-600 dark:text-red-500 uppercase tracking-[0.2em]">AVG Time Spent: 18-24 Hours / Bid</span>
              </div>
            </div>
          </div>

          {/* AutoBid Way */}
          <div className="relative group">
            <div className="absolute inset-0 bg-neutral-900/5 dark:bg-white/5 rounded-[2.5rem] blur-3xl group-hover:opacity-100 transition-opacity opacity-0 pointer-events-none" />
            <div className="relative h-full glass rounded-[2.5rem] p-8 md:p-14 border-2 border-neutral-950 dark:border-white/30 bg-white/40 dark:bg-neutral-900/40 text-left shadow-2xl">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 rounded-2xl bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center transition-all shadow-xl">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl font-black dark:text-white text-neutral-950">The AutoBid Advantage</h3>
              </div>

              <div className="space-y-10">
                {[
                  { icon: <CheckCircle2 size={22} />, text: 'Zero-Touch Discovery', detail: 'Every matching bid scouts you instantly.' },
                  { icon: <CheckCircle2 size={22} />, text: 'AI-Powered BOQ Engine', detail: 'Line items and qty extracted in minutes.' },
                  { icon: <CheckCircle2 size={22} />, text: 'Auto Wage Mapping', detail: 'Latest DOL rates synced to trade codes.' },
                  { icon: <CheckCircle2 size={22} />, text: 'Scale Your Bidding', detail: 'Submit 5x more bids with same headcount.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.2 + (i * 0.1), type: 'spring' }}
                      viewport={{ once: true }}
                      className="text-neutral-950 dark:text-white mt-1 shrink-0 transition-colors"
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <div className="text-lg font-black dark:text-white text-neutral-950 mb-1">{item.text}</div>
                      <div className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-14 p-5 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 rounded-2xl text-center shadow-lg">
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">AVG Time Spent: 12 Minutes / Bid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;