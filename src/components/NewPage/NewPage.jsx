import React from 'react'
import Card from '../Card/Card';

function NewPage() {
    return (
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Heading</h1>
            <p className="text-gray-600 text-lg">Subheading</p>
          </div>

          <div className="space-y-6">
            <Card
              title="Title"
              description="Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
            />
            <Card
              title="Title"
              description="Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
            />
            <Card
              title="Title"
              description="Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
            />
          </div>
        </div>
      );
}

export default NewPage