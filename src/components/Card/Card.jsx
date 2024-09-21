import React from 'react'

function Card({ title, description }) {
    return (
        <div className="border rounded-lg p-4 flex space-x-4 mb-6">
          <div className="bg-gray-200 h-[120px] w-[120px] flex-none rounded-md"></div>
          
          <div className="flex-grow">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600 mt-2">{description}</p>
            
            <button className="mt-4 px-4 py-2 text-gray-700 border border-gray-300 rounded bg-gray-200 rounded-lg">
              Button
            </button>
          </div>
        </div>
      );
}

export default Card