import React, { useState, useRef, useEffect } from 'react';
import { useDesktop } from '../contexts/DesktopContext';

function Window({ id, title, children, isActive }) {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [size, setSize] = useState({ width: 600, height: 400 });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const windowRef = useRef(null);
  const { closeWindow, focusWindow } = useDesktop();

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - windowRef.current.offsetWidth / 2,
          y: e.clientY - 20,
        });
      } else if (isResizing) {
        setSize({
          width: e.clientX - position.x,
          height: e.clientY - position.y,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, position]);

  return (
    <div
      ref={windowRef}
      className={`absolute bg-white rounded-lg overflow-hidden window-shadow ${
        isActive ? 'z-10' : 'z-0'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
      }}
      onClick={() => focusWindow(id)}
    >
      <div
        className="bg-[#0078D7] p-2 cursor-move flex justify-between items-center text-white"
        onMouseDown={() => setIsDragging(true)}
      >
        <h2 className="text-sm font-semibold">{title}</h2>
        <div className="flex space-x-2">
          <button className="w-3 h-3 bg-yellow-400 rounded-full" onClick={() => {}}>
          </button>
          <button className="w-3 h-3 bg-green-400 rounded-full" onClick={() => {}}>
          </button>
          <button
            className="w-3 h-3 bg-red-400 rounded-full"
            onClick={() => closeWindow(id)}
          >
          </button>
        </div>
      </div>
      <div className="p-4 overflow-auto" style={{ height: 'calc(100% - 40px)' }}>
        {children}
      </div>
      <div
        className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
        onMouseDown={() => setIsResizing(true)}
      />
    </div>
  );
}

export default Window;

