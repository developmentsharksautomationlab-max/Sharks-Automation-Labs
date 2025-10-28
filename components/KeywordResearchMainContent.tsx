"use client";

import React from 'react';

const KeywordResearchMainContent: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Data-Driven Keyword Research That <span className="text-blue-400">Converts</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our advanced keyword research methodology combines market analysis, competitor intelligence, 
              and search volume data to identify high-value opportunities that drive organic traffic and sales.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Market Analysis</h3>
                  <p className="text-gray-300">
                    Deep dive into your niche to understand search patterns, user intent, and market opportunities.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Competitor Intelligence</h3>
                  <p className="text-gray-300">
                    Analyze competitor strategies to find gaps and opportunities they're missing.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Long-tail Opportunities</h3>
                  <p className="text-gray-300">
                    Identify low-competition, high-conversion long-tail keywords for faster ranking.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-gray-800">
              <div className="space-y-6">
                <div className="bg-black/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold mb-2">Primary Keywords</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">amazon fba products</span>
                      <span className="text-blue-400 text-sm">12,100 searches</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">dropshipping suppliers</span>
                      <span className="text-blue-400 text-sm">8,900 searches</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">ecommerce automation</span>
                      <span className="text-blue-400 text-sm">6,500 searches</span>
                    </div>
                  </div>
                </div>
                <div className="bg-black/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold mb-2">Long-tail Keywords</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">best amazon fba products 2024</span>
                      <span className="text-green-400 text-sm">Low competition</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">shopify dropshipping suppliers usa</span>
                      <span className="text-green-400 text-sm">Low competition</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeywordResearchMainContent;
