import React, { useState } from 'react';
import { useDesktop } from '../contexts/DesktopContext';

function Taskbar() {
  const [search, setSearch] = useState('');
  const { openWindows, focusWindow } = useDesktop();

  const handleSearch = (e) => {
    setSearch(e.target.value);
    // TO DO - SEARCH FUNCTION
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-[#0078D7] text-white p-1 flex items-center taskbar-shadow">
      <button className="px-4 py-2 hover:bg-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </button>
      <input
        type="text"
        placeholder="Search"
        className="bg-white text-black px-2 py-1 rounded ml-2 w-64"
        value={search}
        onChange={handleSearch}
      />
      <div className="flex space-x-1 ml-2">
        {openWindows.map((window) => (
          <button
            key={window.id}
            className="px-2 py-1 bg-blue-600 rounded hover:bg-blue-700 text-xs"
            onClick={() => focusWindow(window.id)}
          >
            {window.title}
          </button>
        ))}
      </div>
      <div className="ml-auto flex items-center space-x-4">
        <span className="text-sm">11:55 PM</span>
        <span className="text-sm">11/4/2024</span>
      </div>
    </div>
  );
}

export default Taskbar;

