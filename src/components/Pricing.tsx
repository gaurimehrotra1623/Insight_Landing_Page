import React from 'react';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$49',
    period: 'per month',
    description: 'Perfect for startups and small teams just getting started with analytics.',
    features: [
      'Up to 10,000 monthly events',
      '3 team members',
      'Basic analytics dashboard',
      'Event tracking',
      '30-day data retention',
      'Email support',
    ],
    cta: 'Get started',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$99',
    period: 'per month',
    description: 'For growing teams that need more advanced analytics capabilities.',
    features: [
      'Up to 100,000 monthly events',
      '10 team members',
      'Advanced analytics dashboard',
      'Custom events',
      'User path analysis',
      'Retention tracking',
      '90-day data retention',
      'Priority support',
    ],
    cta: 'Get started',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For larger organizations with unique requirements and high-volume needs.',
    features: [
      'Unlimited monthly events',
      'Unlimited team members',
      'Custom analytics solutions',
      'Advanced segmentation',
      'Data warehousing',
      'Dedicated account manager',
      '12-month data retention',
      '24/7 support',
      'SLA guarantee',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-600">
            Choose the plan that's right for your team. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg ${
                plan.highlighted
                  ? 'shadow-md border-2 border-violet-500 relative'
                  : 'shadow-sm border border-gray-100'
              }`}
            >
              {plan.highlighted && (
                <div className="bg-violet-500 text-white text-center text-sm font-medium py-1">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-500 ml-2">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <a
                  href="#"
                  className={`block text-center py-2 px-6 rounded-lg font-medium transition-colors duration-300 ${
                    plan.highlighted
                      ? 'bg-violet-600 hover:bg-violet-700 text-white'
                      : 'border border-gray-300 hover:border-gray-400 text-gray-700'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
              <div className="bg-gray-50 p-8">
                <p className="font-medium text-gray-700 mb-4">What's included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;