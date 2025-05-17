import React from 'react';

const HistoryPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">History</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700">
          Historical content will be displayed here.
        </p>
      </div>
    </div>
  );
};

export default HistoryPage;