import React from 'react';
import Link from 'next/link';

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="py-6 border-b border-white/10 sticky top-0 backdrop-blur-sm bg-black/60 z-30">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link href="/" className="text-white font-bold text-lg hover:text-purple-400 transition-colors">
            ORC Protocol
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              
            </ul>
          </nav>
        </div>
      </header>
      {children}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 text-center text-white/50">
          <p>© {new Date().getFullYear()} ORC Protocol. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 