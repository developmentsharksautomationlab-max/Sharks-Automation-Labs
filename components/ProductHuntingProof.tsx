"use client";

import React from 'react';

const ProductHuntingProof: React.FC = () => {
  const results = [
    {
      metric: "Products Discovered",
      value: "10,000+",
      description: "Winning products identified"
    },
    {
      metric: "Success Rate",
      value: "87%",
      description: "Products that became profitable"
    },
    {
      metric: "Average ROI",
      value: "450%",
      description: "Average return on investment"
    },
    {
      metric: "Time to Market",
      value: "14 days",
      description: "Average time from discovery to launch"
    }
  ];

  const caseStudies = [
    {
      title: "Fitness Accessories Success",
      description: "Identified trending fitness accessories before they went viral",
      results: [
        "Generated $2.5M in sales",
        "Launched 3 months before competitors",
        "Achieved 600% ROI in first year"
      ],
      image: "/images/product-hunting-proof-1.jpg"
    },
    {
      title: "Pet Products Discovery",
      description: "Found untapped pet product niche with massive potential",
      results: [
        "Built $1.8M business in 8 months",
        "Captured 40% market share",
        "Expanded to 15+ product lines"
      ],
      image: "/images/product-hunting-proof-2.jpg"
    },
    {
      title: "Home Organization Trend",
      description: "Early detection of home organization trend",
      results: [
        "First to market with 5 products",
        "Generated $3.2M revenue",
        "Sold business for $8M after 18 months"
      ],
      image: "/images/product-hunting-proof-3.jpg"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Proven <span className="text-blue-400">Results</span> That Speak for Themselves
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our product hunting strategies have helped hundreds of entrepreneurs discover 
            winning products and build million-dollar businesses.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {results.map((result, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-400 mb-2">
                {result.value}
              </div>
              <div className="text-lg font-semibold mb-2">{result.metric}</div>
              <div className="text-sm text-gray-400">{result.description}</div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">{study.title}</h3>
                <p className="text-gray-300 mb-6">{study.description}</p>
                <ul className="space-y-3">
                  {study.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-gray-800">
                  <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <p className="text-gray-400">Product Success Story</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-gray-800 max-w-4xl mx-auto">
            <div className="text-6xl text-blue-400 mb-4">"</div>
            <blockquote className="text-xl text-gray-300 mb-6 italic">
              "Shark Retail's product hunting service is absolutely incredible. They found a product 
              that became our best-seller, generating over $5M in revenue. Their research is thorough 
              and their recommendations are spot-on. Worth every penny!"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">MR</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">Maria Rodriguez</div>
                <div className="text-gray-400 text-sm">Founder, SuccessStore</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHuntingProof;
