import React from 'react';
import { ArrowRight, BarChart2, PieChart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Product analytics for the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                modern team
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Understand your users, build better products. Get actionable insights about how users interact with your product in minutes, not days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#"
                className="flex items-center justify-center sm:justify-start gap-2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 text-center sm:text-left"
              >
                <span>Get started free</span>
                <ArrowRight size={18} />
              </a>
              <a
                href="#"
                className="flex items-center justify-center sm:justify-start gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors duration-300 text-center sm:text-left"
              >
                <span>Book a demo</span>
              </a>
            </div>
            <p className="flex items-center text-sm text-gray-500 gap-2">
              <span className="inline-block w-4 h-4 bg-green-500 rounded-full animate-pulse"></span>
              No credit card required • Free 14-day trial
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
              <div className="bg-gradient-to-br from-violet-50 to-indigo-50 p-6 rounded-xl">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="bg-gray-800 py-3 px-4 flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-gray-400 text-sm">insight.app</div>
                  </div>
                  <div className="p-4">
                    <div className="mb-6">
                      <h3 className="text-gray-700 font-semibold mb-3">User Engagement</h3>
                      <div className="flex items-center justify-between">
                        <div className="bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">
                          +24% from last week
                        </div>
                        <div className="text-gray-500 text-sm">Last 30 days</div>
                      </div>
                    </div>
                    <div className="h-64 grid grid-cols-7 gap-2">
                      {Array(28).fill(null).map((_, index) => (
                        <div 
                          key={index} 
                          className="rounded-md bg-violet-100" 
                          style={{ 
                            height: `${Math.floor(Math.random() * 80) + 20}%`,
                            opacity: 0.5 + Math.random() * 0.5
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <BarChart2 size={20} />
            <span>8,000+ active users</span>
          </div>
          <div className="flex items-center gap-2">
            <PieChart size={20} />
            <span>50M+ events tracked daily</span>
          </div>
          <div className="flex items-center">
            <span>Trusted by 500+ companies worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;