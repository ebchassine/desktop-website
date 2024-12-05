import React from 'react';
import Taskbar from './Taskbar';
import DesktopIcon from './DesktopIcon';
import Window from './Window';
import { useDesktop } from '../contexts/DesktopContext';
import AboutMe from './apps/AboutMe';
import Projects from './apps/Projects';
import Blog from './apps/Blog';
import SnakeGame from './apps/SnakeGame';
import MusicPlayer from './apps/MusicPlayer';
import Browser from './apps/Browser';
import Paint from './apps/Paint';

const apps = [
  { id: 'about', title: 'About Me', icon: '👤', component: AboutMe },
  { id: 'projects', title: 'Projects', icon: '💼', component: Projects },
  { id: 'blog', title: 'Blog', icon: '📝', component: Blog },
  { id: 'snake', title: 'Snake Game', icon: '🐍', component: SnakeGame },
  { id: 'music', title: 'MP3 Player', icon: '🎶', component: MusicPlayer},
  { id: 'browser', title: 'Browser', icon: '😈', component: Browser},
  { id: 'paint', title: 'Paint', icon: '☕️', component: Paint},
];

function Desktop() {
  const { openWindows, activeWindow, openWindow } = useDesktop();

  return (
    <div className="relative h-full w-full p-4" style={{ backgroundImage: "url('/images/wallpaper.jpg')", backgroundSize: 'cover' }}>
      <div className="grid grid-cols-12 gap-4">
        {apps.map((app, index) => (
          <div key={app.id} className={`col-span-1 ${index < 6 ? 'row-start-1' : 'row-start-2'}`}>
            <DesktopIcon
              icon={app.icon}
              title={app.title}
              onClick={() => openWindow(app)}
            />
          </div>
        ))}
      </div>
      {openWindows.map((app) => (
        <Window
          key={app.id}
          id={app.id}
          title={app.title}
          isActive={activeWindow === app.id}
        >
          <app.component />
        </Window>
      ))}
      <Taskbar />
    </div>
  );
}

export default Desktop;

