'use client';

import { useState } from 'react';
import {
  CheckCheck,
  BadgeCheck,
  ShieldCheck,
  ChevronUp,
  ChevronDown,
  PackageCheck,
  MessageCircleQuestion,
} from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

type AccordionItem = {
  title: string;
  icon: React.ElementType;
  content: string[] | FAQItem[];
  isFAQ?: boolean;
};

const items: AccordionItem[] = [
  {
    title: 'Authenticated',
    icon: CheckCheck,
    content: [
      'Our legit check system is fast & effective to ensure each pair is 100% authentic, along with legit check reports & proof of purchase.',
      'All products are brand new in mint condition and arrive with original packaging. Tags and materials from the brand.',
      'Authenticity is the foundation of our business, and every item we sell is inspected by our expert team. Our authenticators are the most experienced and highly trained in the business.',
      'In addition, we source our products only from trusted suppliers. Learn More About Our Verification Process',
    ],
  },
  {
    title: 'Culture Circle Verified',
    icon: BadgeCheck,
    content: [
      'All verified sellers are KYCed, reference checked & approved after an internal due diligence on legitimacy to ensure authenticity, every time.',
      'Culture Circle Verified is the tag given to only the suppliers that meet our rigorous verification standards and we source all products only from these trusted suppliers for you.',
      "Rest assured our promise is that If there is a concern with any of the items, we'll make it right for you. Learn More About Our Verification Process",
    ],
  },
  {
    title: 'Our Promise',
    icon: ShieldCheck,
    content: [
      "We strive to keep your trust with mechanisms to ensure only legitimate items across all categories on our marketplace. Rest assured, If there is a concern with any of the items, we'll make it right.",
      'You do not have to deal with any suppliers. We manage all the sourcing with guaranteed shipping and authentication.',
      'Our team of experts uses a rigorous, multi-step verification process involving machine learning, embedded technologies and a manual quality assurance finally. Read Our Reviews',
    ],
  },
  {
    title: 'Shippings & EMIs',
    icon: PackageCheck,
    content: [
      'Orders are typically shipped within 7–12 days, undergoing a thorough verification process, with our dedicated team ensuring timely delivery; however, certain ETA pairs may take 21–25 days for shipping. ✈️',
      'You can also enjoy the convenience of No-Cost EMIs on our website and app, allowing you to pay in three easy installments at no extra cost for a seamless shopping experience. 💰',
    ],
  },
  {
    title: 'FAQ',
    icon: MessageCircleQuestion,
    isFAQ: true,
    content: [
      {
        question: 'Can I cancel my order?',
        answer: 'Yes, orders can be cancelled within 24 hours of placement unless already shipped. Contact support for help.',
      },
      {
        question: 'When will I receive my order?',
        answer: 'Most orders arrive within 7–12 days. ETA pairs might take 21–25 days.',
      },
      {
        question: 'Do you accept returns?',
        answer: 'Yes, we accept returns within 7 days of delivery under specific conditions. Check our return policy for more.',
      },
      {
        question: 'When will I receive my refund?',
        answer: 'Refunds are processed within 5–7 business days after return verification.',
      },
    ],
  },
];

export default function InfoAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
    setFaqOpenIndex(null); // close FAQs when switching section
  };

  const toggleFAQ = (index: number) => {
    setFaqOpenIndex(faqOpenIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const Icon = item.icon;

        return (
          <div key={index} className="border border-gray-200 rounded-md shadow-sm">
            <button
              onClick={() => toggle(index)}
              className={`flex items-center justify-between w-full p-4 transition-all ${
                isOpen ? 'bg-white' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <div
                className={`flex items-center gap-2 font-semibold ${
                  isOpen ? 'text-blue-700' : 'text-gray-700'
                }`}
              >
                <Icon className={isOpen ? 'text-blue-700' : 'text-gray-700'} size={20} />
                <span>{item.title}</span>
              </div>
              {isOpen ? (
                <ChevronUp className="text-blue-700" size={18} />
              ) : (
                <ChevronDown className="text-gray-700" size={18} />
              )}
            </button>

            {isOpen && (
              <div className="p-4 border-t border-gray-200 text-sm text-gray-800 space-y-2">
                {item.isFAQ
                  ? (item.content as FAQItem[]).map((faq, i) => (
                      <div key={i} className="border-t py-4 px-2">
                        <button
                          onClick={() => toggleFAQ(i)}
                          className="flex justify-between w-full text-sm font-semibold text-left"
                        >
                          <span>{faq.question}</span>
                          {faqOpenIndex === i ? (
                            <ChevronUp className="text-blue-700" size={16} />
                          ) : (
                            <ChevronDown className="text-gray-600" size={16} />
                          )}
                        </button>
                        {faqOpenIndex === i && (
                          <p className="mt-3 text-gray-700">{faq.answer}</p>
                        )}
                      </div>
                    ))
                  : (item.content as string[]).map((line, i) => (
                      <div key={i} className="flex gap-2 items-start">
                        <div className="mt-1 w-1 h-1 rounded-full bg-gray-800" />
                        <span>{line}</span>
                      </div>
                    ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
