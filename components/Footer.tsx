
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-neutral-200 dark:border-neutral-800/50 bg-neutral-50 dark:bg-black px-6 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-20 text-left">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-black dark:bg-white rounded-sm flex items-center justify-center transition-colors">
                <div className="w-3 h-3 bg-white dark:bg-black rotate-45 transition-colors" />
              </div>
              <span className="text-lg font-black tracking-tighter uppercase dark:text-white text-black">AutoBid</span>
            </div>
            <p className="text-neutral-500 dark:text-neutral-500 text-sm font-medium leading-relaxed">
              Industrial-grade AI for the construction industry. Automating government bids from scraping to BOQ.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-neutral-800 dark:text-white mb-6">Product</h4>
              <ul className="space-y-4 text-sm font-medium text-neutral-400 dark:text-neutral-500">
                <li><a href="#features" className="hover:text-black dark:hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-black dark:hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#pricing" className="hover:text-black dark:hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-neutral-800 dark:text-white mb-6">Company</h4>
              <ul className="space-y-4 text-sm font-medium text-neutral-400 dark:text-neutral-500">
                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-xs font-black uppercase tracking-widest text-neutral-800 dark:text-white mb-6">Contact</h4>
              <ul className="space-y-4 text-sm font-medium text-neutral-400 dark:text-neutral-500">
                <li><a href="mailto:hello@autobid.ai" className="hover:text-black dark:hover:text-white transition-colors">hello@autobid.ai</a></li>
                <li><span className="text-neutral-400 dark:text-neutral-700">New York, NY</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-neutral-400 dark:text-neutral-600 uppercase tracking-widest">
            &copy; 2026 AutoBid Automation Platform. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-[10px] font-bold text-neutral-400 dark:text-neutral-600 uppercase tracking-widest">
             <a href="#" className="hover:text-black dark:hover:text-neutral-400 transition-colors">Twitter</a>
             <a href="#" className="hover:text-black dark:hover:text-neutral-400 transition-colors">LinkedIn</a>
             <a href="#" className="hover:text-black dark:hover:text-neutral-400 transition-colors">Github</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
