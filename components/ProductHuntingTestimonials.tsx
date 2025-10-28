"use client";

import React from 'react';

const ProductHuntingTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Alex Thompson",
      role: "E-commerce Entrepreneur",
      company: "Trendy Products Co",
      content: "The product hunting service is game-changing. They found a product that became our #1 seller, generating $2M in the first 6 months. Their research is incredibly thorough.",
      rating: 5,
      results: "$2M in 6 months"
    },
    {
      name: "Sarah Kim",
      role: "Dropshipping Expert",
      company: "Global Dropship",
      content: "I've tried other product research services, but none compare to Shark Retail. They consistently find winning products before they hit mainstream. My revenue increased 300%.",
      rating: 5,
      results: "300% revenue increase"
    },
    {
      name: "Mike Johnson",
      role: "Amazon Seller",
      company: "Amazon Empire",
      content: "Their weekly reports are gold. I've launched 15 products based on their recommendations, and 12 of them became profitable. The ROI is incredible.",
      rating: 5,
      results: "80% success rate"
    },
    {
      name: "Lisa Chen",
      role: "Shopify Store Owner",
      company: "Fashion Forward",
      content: "The viral product alerts are amazing. I was able to capitalize on a trending product before my competitors even knew it existed. Made $500K in 3 months.",
      rating: 5,
      results: "$500K in 3 months"
    },
    {
      name: "David Wilson",
      role: "E-commerce Consultant",
      company: "Digital Ventures",
      content: "Their market analysis is incredibly detailed. They don't just find products, they provide complete market intelligence. This service pays for itself.",
      rating: 5,
      results: "Complete market intelligence"
    },
    {
      name: "Emma Davis",
      role: "Product Manager",
      company: "Innovation Labs",
      content: "The custom research package was exactly what we needed. They identified a gap in the market that we filled, resulting in a $3M product line.",
      rating: 5,
      results: "$3M product line"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="text-blue-400">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what entrepreneurs and business owners say 
            about our product hunting services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-black/50 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </blockquote>
              
              <div className="border-t border-gray-700 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-blue-400">{testimonial.company}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-green-400">{testimonial.results}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-gray-300">Successful Products</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">87%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">450%</div>
            <div className="text-gray-300">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-gray-300">Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHuntingTestimonials;
