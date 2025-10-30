
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center mb-8">
      <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">
        Cinematic Cover Art
      </h1>
      <p className="mt-2 text-lg text-gray-400">
        Bring your creative vision to life with AI-powered art generation.
      </p>
    </header>
  );
};
