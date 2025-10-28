"use client";

import React from 'react';

const ProductHuntingServices: React.FC = () => {
  const services = [
    {
      title: "Weekly Product Reports",
      description: "Get weekly reports with 20+ trending products across multiple niches with detailed analysis.",
      features: [
        "20+ trending products weekly",
        "Market analysis for each product",
        "Competition level assessment",
        "Profit margin estimates"
      ],
      price: "Starting at $197/month"
    },
    {
      title: "Custom Product Research",
      description: "Targeted product research for your specific niche with in-depth market validation.",
      features: [
        "Niche-specific product research",
        "Market size analysis",
        "Competitor product analysis",
        "Launch strategy recommendations"
      ],
      price: "Starting at $497"
    },
    {
      title: "Viral Product Alerts",
      description: "Real-time alerts for products going viral on social media and trending platforms.",
      features: [
        "Real-time viral alerts",
        "Social media trend analysis",
               "Early opportunity detection",
        "Quick action recommendations"
      ],
      price: "Starting at $297/month"
    },
    {
      title: "Complete Product Package",
      description: "End-to-end product hunting service with research, validation, and launch strategy.",
      features: [
        "Comprehensive product research",
        "Supplier identification",
        "Market validation",
        "Launch timeline & strategy"
      ],
      price: "Starting at $1,497"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-blue-400">Product Hunting</span> Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect product hunting package for your business needs. 
            All packages include detailed analysis and actionable insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-black/50 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-blue-400">{service.price}</div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-300 mb-6">
              We offer custom product hunting packages tailored to your specific business needs and budget.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200">
              Contact Us for Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHuntingServices;
