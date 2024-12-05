import React, { createContext, useState, useContext } from 'react';

const DesktopContext = createContext();

export const useDesktop = () => useContext(DesktopContext);

export const DesktopProvider = ({ children }) => {
  const [openWindows, setOpenWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);

  const openWindow = (app) => {
    setOpenWindows((prev) => [...prev, app]);
    setActiveWindow(app.id);
  };

  const closeWindow = (id) => {
    setOpenWindows((prev) => prev.filter((window) => window.id !== id));
    setActiveWindow(null);
  };

  const focusWindow = (id) => {
    setActiveWindow(id);
  };

  return (
    <DesktopContext.Provider
      value={{ openWindows, activeWindow, openWindow, closeWindow, focusWindow }}
    >
      {children}
    </DesktopContext.Provider>
  );
};

