"use client";

import React from 'react';
import Image from 'next/image';

const KeywordResearchProof: React.FC = () => {
  const results = [
    {
      metric: "Keywords Researched",
      value: "50,000+",
      description: "Keywords analyzed across various niches"
    },
    {
      metric: "Average Ranking Improvement",
      value: "340%",
      description: "Average improvement in search rankings"
    },
    {
      metric: "Organic Traffic Increase",
      value: "285%",
      description: "Average organic traffic growth"
    },
    {
      metric: "Conversion Rate Boost",
      value: "156%",
      description: "Average conversion rate improvement"
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Store Keyword Strategy",
      description: "Identified 2,500+ high-value keywords for a fashion e-commerce store",
      results: [
        "Organic traffic increased by 420%",
        "Top 3 rankings for 150+ keywords",
        "Revenue growth of $180K in 6 months"
      ],
      image: "/images/keyword-research-proof-1.jpg"
    },
    {
      title: "SaaS Company Content Strategy",
      description: "Developed comprehensive keyword strategy for B2B SaaS platform",
      results: [
        "Generated 15,000+ monthly organic visitors",
        "Ranked #1 for target industry keywords",
        "Lead generation increased by 300%"
      ],
      image: "/images/keyword-research-proof-2.jpg"
    },
    {
      title: "Local Business SEO Success",
      description: "Local keyword research for service-based business",
      results: [
        "Local search visibility improved by 250%",
        "Google My Business optimization",
        "Phone calls increased by 180%"
      ],
      image: "/images/keyword-research-proof-3.jpg"
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
            Our keyword research strategies have helped hundreds of businesses dominate their markets 
            and achieve unprecedented organic growth.
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <p className="text-gray-400">Case Study Visualization</p>
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
              "Shark Retail's keyword research completely transformed our organic traffic. 
              We went from struggling to rank for basic terms to dominating our entire niche. 
              The ROI has been incredible - 300% increase in organic revenue in just 6 months."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">JS</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">John Smith</div>
                <div className="text-gray-400 text-sm">CEO, TechStart Inc.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeywordResearchProof;
