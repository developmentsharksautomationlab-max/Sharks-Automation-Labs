"use client";

import React from 'react';

const KeywordResearchTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Director",
      company: "Fashion Forward",
      content: "The keyword research strategy Shark Retail provided was game-changing. We identified 500+ long-tail keywords our competitors missed, and our organic traffic tripled in just 4 months.",
      rating: 5,
      results: "300% traffic increase"
    },
    {
      name: "Mike Chen",
      role: "Marketing Manager",
      company: "TechSolutions Pro",
      content: "Their competitor analysis was incredibly detailed. We found gaps in our competitors' strategies and capitalized on them. Our conversion rate improved by 180% after implementing their recommendations.",
      rating: 5,
      results: "180% conversion boost"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder",
      company: "LocalBiz Services",
      content: "As a local business, we needed targeted local keywords. Shark Retail's local keyword research helped us dominate our local market. We're now ranking #1 for all our target terms.",
      rating: 5,
      results: "#1 local rankings"
    },
    {
      name: "David Thompson",
      role: "SEO Manager",
      company: "Global Enterprises",
      content: "The depth of their keyword research is unmatched. They provided insights we never would have found on our own. Our organic revenue increased by $2M in the first year.",
      rating: 5,
      results: "$2M revenue increase"
    },
    {
      name: "Lisa Wang",
      role: "Content Director",
      company: "Digital Marketing Co",
      content: "Their keyword clustering and content strategy mapping was brilliant. We created a content calendar based on their research and saw 400% growth in organic leads.",
      rating: 5,
      results: "400% lead growth"
    },
    {
      name: "Robert Martinez",
      role: "VP Marketing",
      company: "SaaS Innovations",
      content: "The technical keyword research for our B2B SaaS was incredibly thorough. We're now ranking for high-value commercial intent keywords that drive qualified leads.",
      rating: 5,
      results: "Qualified lead growth"
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
            Don't just take our word for it. Here's what business owners and marketers say 
            about our keyword research services.
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
            <div className="text-gray-300">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">98%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">250%</div>
            <div className="text-gray-300">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-gray-300">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeywordResearchTestimonials;
