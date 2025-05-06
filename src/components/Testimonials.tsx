import React from 'react';

const testimonials = [
  {
    quote:
      "Insight has transformed how we understand our product usage. We were flying blind before, but now we can see exactly what our users are doing and make better decisions.",
    author: "Sarah Chen",
    title: "Product Manager at Flowbase",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    companyLogo: "FB"
  },
  {
    quote:
      "The implementation was incredibly simple, and the insights we've gained have been invaluable. Our team is now aligned around the same metrics and making data-driven decisions.",
    author: "Marcus Johnson",
    title: "CTO at TechFlow",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    companyLogo: "TF"
  },
  {
    quote:
      "We've been able to increase our conversion rate by 32% by identifying key drop-off points in our user journey. Insight paid for itself within the first month.",
    author: "Jessica Williams",
    title: "Growth Lead at Rampup",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    companyLogo: "RU"
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Loved by product teams everywhere
          </h2>
          <p className="text-lg text-gray-600">
            See how teams of all sizes use Insight to build better products with data.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md flex flex-col h-full"
            >
              <div className="flex-grow">
                <div className="text-violet-600 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
                <div className="ml-auto">
                  <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center font-bold text-violet-600">
                    {testimonial.companyLogo}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8">
          <p className="text-lg font-medium text-gray-700">Trusted by innovative companies:</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {['Acme Inc.', 'TechFlow', 'Rampup', 'Flowbase', 'Stackly'].map((company, index) => (
              <div key={index} className="text-gray-400 font-semibold">{company}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;