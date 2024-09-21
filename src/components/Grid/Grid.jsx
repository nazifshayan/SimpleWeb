import React from 'react'
import Card2 from '../Card2/Card2';

function Grid() {
    return (
        <div className="p-8">
          <header className="mb-8">
            <h1 className="text-2xl font-bold">Heading</h1>
            <p className="text-gray-500">Subheading</p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <Card2 key={index} />
            ))}
          </div>
        </div>
      );
}

export default Grid