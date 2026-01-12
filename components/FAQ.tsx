import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-100 dark:border-neutral-800 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-7 flex items-center justify-between text-left group transition-all"
      >
        <span className="text-lg font-bold text-neutral-800 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white transition-colors pr-8 leading-tight">
          {question}
        </span>
        <div className={`p-2 rounded-full transition-all ${isOpen ? 'bg-neutral-900 dark:bg-white text-white dark:text-black' : 'bg-neutral-50 dark:bg-neutral-900 text-neutral-400'}`}>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[400px] pb-8' : 'max-h-0'}`}>
        <p className="text-neutral-500 dark:text-neutral-500 leading-relaxed font-semibold pr-10">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How accurate is the AI-generated Bill of Quantities?",
      answer: "AutoBid uses a multi-agent validation step where different AI engines cross-check each other's work against the blueprints and technical specs. While our tests show 99%+ accuracy on most general construction scopes, we always provide a 'Confidence Score' and allow you to override any line item manually before export."
    },
    {
      question: "Which government agencies are supported?",
      answer: "We currently monitor and scrape portals for NYC DOT, MTA, DASNY, NYCHA, OGS, and the Port Authority of NY & NJ. We are expanding to Illinois (IDOT) and California (Caltrans) in Q4 2026."
    },
    {
      question: "Does the AI handle prevailing wage requirements?",
      answer: "Yes. AutoBid automatically synchronizes with Department of Labor prevailing wage schedules. When the AI identifies a specific trade or task in a bid, it maps the correct worker classification and base rate/fringes to your estimate automatically."
    },
    {
      question: "Is my proprietary bidding data secure?",
      answer: "Your estimates and historical bid data are yours alone. We use bank-level encryption (AES-256) and never use your private pricing information to train public AI models. Your competitive edge is safe with us."
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-40 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-16 text-center dark:text-white text-neutral-950">Questions & Answers</h2>
        <div className="glass border border-neutral-200 dark:border-neutral-800 rounded-[2.5rem] p-8 md:p-14 shadow-2xl transition-all duration-500">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;