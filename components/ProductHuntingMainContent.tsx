"use client";

import React from 'react';

const ProductHuntingMainContent: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Find <span className="text-blue-400">Winning Products</span> Before Your Competitors
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our data-driven product hunting methodology combines market analysis, trend identification, 
              and competitor research to discover high-potential products that drive massive sales.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Trend Analysis</h3>
                  <p className="text-gray-300">
                    Identify emerging trends and viral products before they hit mainstream markets.
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
                    Analyze successful competitors to find product gaps and untapped opportunities.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Market Validation</h3>
                  <p className="text-gray-300">
                    Validate product potential with real market data and consumer demand analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-gray-800">
              <div className="space-y-6">
                <div className="bg-black/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold mb-2">Hot Products This Week</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Smart Fitness Tracker</span>
                      <span className="text-green-400 text-sm">+340% searches</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Eco-Friendly Phone Case</span>
                      <span className="text-green-400 text-sm">+280% searches</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Portable Car Vacuum</span>
                      <span className="text-green-400 text-sm">+220% searches</span>
                    </div>
                  </div>
                </div>
                <div className="bg-black/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold mb-2">Market Opportunities</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Pet Accessories</span>
                      <span className="text-blue-400 text-sm">Low competition</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Home Organization</span>
                      <span className="text-blue-400 text-sm">High demand</span>
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

export default ProductHuntingMainContent;
