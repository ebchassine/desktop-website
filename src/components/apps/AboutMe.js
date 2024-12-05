import React from 'react';

function AboutMe() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <img src="/images/profile.png" alt="Profile" className="w-32 h-32 rounded-full mx-auto" />
      <p className="text-center">
        Hi, I'm Ethan, a passionate developer blah blah blah
      </p>
      <div>
        <h3 className="text-xl font-semibold mb-2">Skills</h3>
        <ul className="list-disc list-inside">
          <li>React.js</li>
          <li>Next.js</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5 & CSS3</li>
          <li>Tailwind CSS</li>
          <li>All of those were a lie</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Experience</h3>
        <p>
          I have 200,000 years of experience , working on various projects ranging from small business websites to large-scale web applications. (GPT gen text for filler)
        </p>
      </div>
    </div>
  );
}

export default AboutMe;

