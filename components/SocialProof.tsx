import React from 'react';

const SocialProof: React.FC = () => {
  const agencies = [
    'NYC DOT', 'MTA', 'DASNY', 'NYCHA', 'PANYNJ', 'SCA'
  ];

  return (
    <section className="py-16 border-y border-neutral-100 dark:border-neutral-800/50 bg-neutral-50/20 dark:bg-neutral-950/20 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.4em] mb-12">
          Analyzing bids from major agencies daily
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-24 opacity-30 hover:opacity-100 grayscale transition-all duration-700">
          {agencies.map((agency) => (
            <span key={agency} className="text-2xl md:text-3xl font-black tracking-tighter text-neutral-950 dark:text-white pointer-events-none">
              {agency}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;