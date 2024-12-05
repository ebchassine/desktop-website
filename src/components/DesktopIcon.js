import React from 'react';

function DesktopIcon({ icon, title, onClick }) {
  return (
    <div
      className="flex flex-col items-center justify-center p-2 cursor-pointer hover:bg-white hover:bg-opacity-20 rounded text-white"
      onClick={onClick}
    >
      <div className="text-4xl mb-1">{icon}</div>
      <div className="text-xs text-center">{title}</div>
    </div>
  );
}

export default DesktopIcon;

