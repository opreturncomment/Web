import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ORC Protocol Roadmap',
  description: 'View the development roadmap for the ORC Protocol on Bitcoin',
};

export default function RoadmapPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">ORC Protocol Roadmap</h1>

          <div className="flex flex-col items-center">
            {/* Timeline line */}
            <div className="absolute h-full w-[2px] bg-[#3b187a] left-1/2 -translate-x-1/2 z-0 md:block hidden" style={{ top: '300px', bottom: '100px' }}></div>

            {/* Phase 1 */}
            <div className="relative mb-32 w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {/* Phase 1 Box */}
              <div className="md:col-span-1 border border-white/10 rounded-lg overflow-hidden">
                <div 
                  className="h-full w-full relative flex items-center justify-center p-12" 
                  style={{ 
                    background: 'linear-gradient(to bottom, #3b187a 0%, #1c103c 100%)',
                    boxShadow: '0 0 30px rgba(59, 24, 122, 0.3)'
                  }}
                >
                  <h2 className="text-5xl md:text-6xl font-bold text-white z-10">Phase 1</h2>
                  <div className="absolute inset-0 bg-[#1c103c] opacity-20">
                    <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
                      {Array.from({ length: 144 }).map((_, i) => (
                        <div key={i} className="border border-[#3b187a]/30"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 1 Content */}
              <div className="md:col-span-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">Ecosystem Creation</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Core concept validation and early protocol architecture</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Internal platform testnet deployments and simulation tools</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Initial marketing campaign and brand setup</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Tokenomics finalization</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Publishing our White-Paper</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">$gUP Token Launch with stealth fair launch format</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Smart Contract Audit</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Scrappy Ai (POC Beta Bot Release)</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">CMC & CoinGecko listings for visibility and credibility</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Dot connector */}
            <div className="w-8 h-8 bg-[#3b82f6] rounded-full mb-8 z-20 md:block hidden"></div>

            {/* Phase 2 */}
            <div className="relative mb-32 w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {/* Phase 2 Box */}
              <div className="md:col-span-1 border border-white/10 rounded-lg overflow-hidden order-1 md:order-2">
                <div 
                  className="h-full w-full relative flex items-center justify-center p-12" 
                  style={{ 
                    background: 'linear-gradient(to bottom, #3b187a 0%, #1c103c 100%)',
                    boxShadow: '0 0 30px rgba(59, 24, 122, 0.3)'
                  }}
                >
                  <h2 className="text-5xl md:text-6xl font-bold text-white z-10">Phase 2</h2>
                  <div className="absolute inset-0 bg-[#1c103c] opacity-20">
                    <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
                      {Array.from({ length: 144 }).map((_, i) => (
                        <div key={i} className="border border-[#3b187a]/30"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 2 Content */}
              <div className="md:col-span-1 order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">Technology Rollout and Initial Adoption</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">GearUp Factory (developer backend) internal testing and closed rollout</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">First batch of pre-built smart contract templates</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Marketplace smart contract framework development begins</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Community onboarding campaigns and builder support</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Referral campaigns and token-based incentives</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Open Source Repository published</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Initial audit cycles for templates and Studio engine</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Dot connector */}
            <div className="w-8 h-8 bg-[#3b82f6] rounded-full mb-8 z-20 md:block hidden"></div>

            {/* Phase 3 */}
            <div className="relative mb-16 w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {/* Phase 3 Box */}
              <div className="md:col-span-1 border border-white/10 rounded-lg overflow-hidden">
                <div 
                  className="h-full w-full relative flex items-center justify-center p-12" 
                  style={{ 
                    background: 'linear-gradient(to bottom, #3b187a 0%, #1c103c 100%)',
                    boxShadow: '0 0 30px rgba(59, 24, 122, 0.3)'
                  }}
                >
                  <h2 className="text-5xl md:text-6xl font-bold text-white z-10">Phase 3</h2>
                  <div className="absolute inset-0 bg-[#1c103c] opacity-20">
                    <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
                      {Array.from({ length: 144 }).map((_, i) => (
                        <div key={i} className="border border-[#3b187a]/30"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3 Content */}
              <div className="md:col-span-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">Ecosystem Expansion</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">GearUp Studio public release</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Full marketplace functionality launch</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Advanced AI integration for contract building</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Expansion to additional blockchain networks</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Enterprise partnerships and solutions</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Developer ecosystem growth initiatives</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Global community expansion</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 