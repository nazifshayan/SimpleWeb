import React from 'react'

const HeroSection = () => {
    return (
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gray-50">
        <h1 className="text-5xl font-bold mb-4">Title</h1>
        <p className="text-lg text-gray-600 mb-8">Subtitle</p>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-gray-200 text-black rounded-xl">Button</button>
          <button className="px-6 py-3 bg-black text-white rounded-xl">Button</button>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  