import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Define the type for each FAQ item
type FAQItem = {
  question: string;
  answer: string;
};

// Type the array
const faqs: FAQItem[] = [
  {
    question: 'How does the 14-day trial work?',
    answer:
      'Your trial begins as soon as you create an account. You will have full access to all features for 14 days, with no credit card required. At the end of your trial, you can choose to subscribe to a paid plan or downgrade to our limited free tier.',
  },
  {
    question: 'Can I change my plan later?',
    answer:
      'Yes, you can upgrade, downgrade, or cancel your plan at any time. If you upgrade, you\'ll be charged the prorated difference for the remainder of your billing cycle. If you downgrade, you\'ll receive credit toward your next billing cycle.',
  },
  {
    question: 'How do you count monthly events?',
    answer:
      'An event is any tracked action taken by a user in your product. This includes page views, clicks, form submissions, and any custom events you define. We count each instance of these events toward your monthly limit.',
  },
  {
    question: 'Do you offer discounts for annual billing?',
    answer:
      'Yes, we offer a 20% discount when you choose annual billing on any of our paid plans. This discount will be applied automatically when you select the annual billing option during signup or when changing your billing cycle in account settings.',
  },
  {
    question: 'Is there a limit to the number of products I can track?',
    answer:
      'No, all plans allow you to track unlimited products or applications. Your event limit is shared across all your tracked products, so you can distribute your allocation however works best for your needs.',
  },
  {
    question: 'What kind of support do you provide?',
    answer:
      'All plans include email support with varying response times. Our Professional plan includes priority support with responses within 24 hours. Enterprise plans receive dedicated support with responses within 4 hours and the option for scheduled video calls.',
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-600">
            Have questions? We're here to help. If you don't see your question here, please reach out to our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-0"
            >
              <button
                className="w-full flex items-center justify-between py-6 text-left font-medium text-gray-900 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="#"
            className="inline-flex items-center bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
