import React from 'react'

function Card2() {
    return (
        <div className="border p-4 rounded-lg shadow-sm">
          <div className="bg-gray-200 h-40 w-[200px] mb-4 rounded-lg"></div>
          <h2 className="text-lg font-semibold mb-2">Title</h2>
          <p className="text-gray-600">
            Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.
          </p>
        </div>
    );
}

export default Card2