import React from 'react';
import { LineChart, Users, Zap, Layers, BarChart, Clock } from 'lucide-react';

const features = [
  {
    icon: <LineChart className="w-6 h-6 text-violet-600" />,
    title: 'Real-time analytics',
    description:
      'Track user behavior as it happens with our lightning-fast event tracking and visualization tools.',
  },
  {
    icon: <Users className="w-6 h-6 text-violet-600" />,
    title: 'User journeys',
    description:
      'Understand how users move through your product with detailed funnel and path analysis.',
  },
  {
    icon: <Zap className="w-6 h-6 text-violet-600" />,
    title: 'Fast implementation',
    description:
      'Get up and running in minutes with our simple SDK and intuitive dashboard.',
  },
  {
    icon: <Layers className="w-6 h-6 text-violet-600" />,
    title: 'Custom events',
    description:
      'Track any action or behavior that matters to your business with custom event definitions.',
  },
  {
    icon: <BarChart className="w-6 h-6 text-violet-600" />,
    title: 'Cohort analysis',
    description:
      'Group users by behavior or attributes to understand different segments of your audience.',
  },
  {
    icon: <Clock className="w-6 h-6 text-violet-600" />,
    title: 'Retention tracking',
    description:
      'Measure how well you retain users over time and identify opportunities to improve engagement.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to understand your users
          </h2>
          <p className="text-lg text-gray-600">
            Our comprehensive analytics platform gives you all the tools you need to make
            data-driven decisions and build better products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md"
            >
              <div className="inline-flex items-center justify-center p-3 bg-violet-100 rounded-lg mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center text-violet-600 hover:text-violet-700 font-medium"
          >
            <span>Learn more about our features</span>
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;