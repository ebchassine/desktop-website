import React from 'react';

function Browser() {
  return (
    <div className="p-4 border rounded shadow h-[500px]">
      <h2 className="text-xl font-bold mb-2">Browser</h2>
      <iframe
        src="https://www.google.com"
        title="Google Browser"
        className="w-full h-full border-0"
      ></iframe>
    </div>
  );
}

export default Browser;
