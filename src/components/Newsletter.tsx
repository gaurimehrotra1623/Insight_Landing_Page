import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically be where you'd integrate with a service like Mailchimp
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-violet-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Stay up to date with our latest features
          </h2>
          <p className="text-lg text-indigo-100 mb-8">
            Join our newsletter to get product updates, analytics tips, and insights delivered to your inbox.
          </p>

          {isSubmitted ? (
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-2xl mb-2">✓</div>
              <h3 className="text-xl font-semibold mb-2">Thanks for subscribing!</h3>
              <p className="text-indigo-100">
                We've sent a confirmation email to your inbox. Please check your email to complete the subscription process.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-900"
              />
              <button
                type="submit"
                className="bg-white text-violet-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="mt-4 text-sm text-indigo-200">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;