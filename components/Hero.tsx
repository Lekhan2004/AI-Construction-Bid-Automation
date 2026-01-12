import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, PlayCircle, BarChart3, Database, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-40 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-neutral-200 dark:bg-neutral-800/50 rounded-full blur-[100px] transition-colors duration-700" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neutral-100 dark:bg-neutral-900/50 rounded-full blur-[120px] transition-colors duration-700" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-[10px] md:text-xs font-bold text-neutral-600 dark:text-neutral-400 mb-8 tracking-wider uppercase transition-colors">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Next-Gen Construction Intelligence
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1] dark:text-white text-neutral-950">
            Stop Reading PDFs.<br />
            <span className="text-neutral-400 dark:text-neutral-600">Start Bidding.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-12 font-medium leading-relaxed">
            Automate the tedious process of finding and estimating government bids. Our Multi-Agent AI parses hundreds of pages in seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-neutral-950 dark:bg-white text-white dark:text-black px-10 py-5 rounded-full font-black text-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all group shadow-xl shadow-black/10 dark:shadow-white/10">
              View Daily Bids
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#how-it-works" className="w-full sm:w-auto bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white px-10 py-5 rounded-full font-black text-lg flex items-center justify-center gap-2 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all border-b-4">
              <PlayCircle size={20} />
              See How it Works
            </a>
          </div>
        </motion.div>

        {/* Dashboard Mockup Visual */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 relative"
        >
          <div className="glass rounded-[2rem] overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl dark:shadow-black/60 shadow-neutral-200/50">
            <div className="h-12 border-b border-neutral-200 dark:border-neutral-800 flex items-center px-6 gap-3 bg-neutral-100/30 dark:bg-neutral-900/40">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-neutral-200 dark:bg-neutral-800" />
                <div className="w-3.5 h-3.5 rounded-full bg-neutral-200 dark:bg-neutral-800" />
                <div className="w-3.5 h-3.5 rounded-full bg-neutral-200 dark:bg-neutral-800" />
              </div>
              <div className="mx-auto text-[10px] text-neutral-400 dark:text-neutral-500 font-bold uppercase tracking-[0.3em]">AutoBid Workspace 2.0</div>
            </div>
            
            <div className="flex flex-col md:flex-row h-[450px] md:h-[550px]">
              {/* Sidebar: Bids List */}
              <div className="w-full md:w-80 border-r border-neutral-200 dark:border-neutral-800 p-6 bg-neutral-50/20 dark:bg-neutral-950/20 overflow-hidden text-left">
                <div className="text-[10px] text-neutral-500 dark:text-neutral-500 font-black mb-6 uppercase tracking-widest flex items-center justify-between">
                  Live Tenders
                  <span className="flex items-center gap-1.5 text-green-600 dark:text-green-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    Real-time
                  </span>
                </div>
                {[
                  { agency: 'NYC DOT', title: 'Roadwork - BQE Exp.', date: 'Today' },
                  { agency: 'MTA', title: 'Grand Central Masonry', date: '2h ago' },
                  { agency: 'DASNY', title: 'Public School 42 - Renovation', date: '4h ago' },
                  { agency: 'OGS', title: 'Plaza Reconstruction', date: 'Yesterday' }
                ].map((bid, i) => (
                  <div key={i} className={`p-4 rounded-xl mb-3 border transition-all cursor-default ${i === 1 ? 'bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 shadow-md translate-x-1' : 'border-transparent opacity-50 hover:opacity-100'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[9px] font-black px-2 py-0.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded uppercase">{bid.agency}</span>
                      <span className="text-[9px] text-neutral-400 font-bold">{bid.date}</span>
                    </div>
                    <div className="text-sm font-bold text-neutral-800 dark:text-neutral-200 truncate">{bid.title}</div>
                  </div>
                ))}
              </div>

              {/* Main Area */}
              <div className="flex-1 p-8 flex flex-col text-left overflow-hidden">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-neutral-950 dark:bg-white rounded-2xl flex items-center justify-center text-white dark:text-neutral-900 shadow-lg">
                      <BarChart3 size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-black dark:text-white text-neutral-950 leading-tight">Bill of Quantities</h3>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 font-bold uppercase tracking-wide">AI Extraction: MTA-8821-B</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                     <span className="text-[10px] text-neutral-600 dark:text-neutral-400 font-black px-3 py-1.5 bg-neutral-100 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">ACCURACY: 99.2%</span>
                  </div>
                </div>

                <div className="flex-1 overflow-auto custom-scrollbar">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-neutral-200 dark:border-neutral-800 text-[10px] text-neutral-400 dark:text-neutral-500 font-black uppercase tracking-widest">
                        <th className="pb-4">CODE</th>
                        <th className="pb-4">SCOPE DESCRIPTION</th>
                        <th className="pb-4 text-right">QTY</th>
                        <th className="pb-4 text-right">UNIT PRICE</th>
                      </tr>
                    </thead>
                    <tbody className="text-neutral-700 dark:text-neutral-300">
                      {[
                        { code: '02.10', desc: 'Structure Demolition & Hauling', qty: '1,200 SF', price: '$14.20' },
                        { code: '03.20', desc: 'Concrete Formwork (Columns)', qty: '850 LF', price: '$48.50' },
                        { code: '04.15', desc: 'Masonry Reinforcement (Steel)', qty: '4,500 LBS', price: '$3.15' },
                        { code: '04.80', desc: 'Exterior Stone Cladding (Granite)', qty: '2,100 SF', price: '$92.00' },
                        { code: '07.20', desc: 'Thermal Rigid Insulation', qty: '2,400 SF', price: '$7.45' }
                      ].map((row, i) => (
                        <motion.tr 
                          key={i} 
                          className="border-b border-neutral-50 dark:border-neutral-900/30"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + (i * 0.1) }}
                        >
                          <td className="py-4 font-mono text-neutral-400 text-xs">{row.code}</td>
                          <td className="py-4 font-bold text-sm">{row.desc}</td>
                          <td className="py-4 text-right text-sm font-medium">{row.qty}</td>
                          <td className="py-4 text-right text-neutral-950 dark:text-white font-black text-sm">{row.price}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex gap-6">
                    <div className="flex items-center gap-2 text-neutral-400 dark:text-neutral-500 text-[10px] font-black uppercase">
                      <FileText size={14} className="text-neutral-300 dark:text-neutral-700" /> 312 DOCS PARSED
                    </div>
                    <div className="flex items-center gap-2 text-neutral-400 dark:text-neutral-500 text-[10px] font-black uppercase">
                      <Database size={14} className="text-neutral-300 dark:text-neutral-700" /> WAGE SCALE SYNCED
                    </div>
                  </div>
                  <div className="text-lg font-black dark:text-white text-neutral-950">TOTAL: $324,540.00</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating interactive badge */}
          <motion.div 
            animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-4 md:-right-10 p-5 glass rounded-2xl border border-neutral-200 dark:border-neutral-700 hidden lg:block shadow-2xl transition-colors duration-500"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center">
                <ChevronRight size={20} />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">Wage Engine</div>
                <div className="text-sm font-black dark:text-white text-neutral-900">MTA Prevailing Wage Applied</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;