import React from 'react';
import Link from 'next/link';
import Logo from '../components/Logo';
import WhitepaperContent from '../components/WhitepaperContent';

export default function Whitepaper() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-black text-white">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-6">
          <div className="flex items-center">
            <Logo />
          </div>
          <Link href="/" className="button button-primary px-4 py-2 rounded-md bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            Back to Home
          </Link>
        </nav>
        
        <main className="py-8 max-w-5xl mx-auto">
          <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 md:p-10 shadow-2xl mb-16">
            <WhitepaperContent />
          </div>
        </main>
        
        <footer className="py-8 text-center text-white/60 text-sm">
          <p>© 2025 ORC Protocol. All rights reserved.</p>
          <p className="mt-2">The definitive standard for Bitcoin tokenization</p>
        </footer>
      </div>
    </div>
  );
} 