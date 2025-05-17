import React from 'react';

export default function Logo() {
  return (
    <div className="text-white font-bold text-2xl flex items-center">
      <span className="mr-2">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z" fill="url(#paint0_linear_1_2)"/>
          <path d="M14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24Z" fill="#1D0D3A"/>
          <path d="M16.5 11L11.5 16.5M11.5 11L16.5 16.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <defs>
            <linearGradient id="paint0_linear_1_2" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7B33BB"/>
              <stop offset="1" stopColor="#4F1B89"/>
            </linearGradient>
          </defs>
        </svg>
      </span>
      Home
    </div>
  );
} 