import React from 'react';

function Blog() {
  const posts = [
    { id: 1, title: 'Getting Started with React Hooks', excerpt: 'Learn how to use React Hooks to simplify your components and manage state more efficiently.', date: '2023-04-15' },
    { id: 2, title: 'Building Responsive Layouts with Tailwind CSS', excerpt: 'Discover how to create beautiful, responsive layouts quickly using Tailwind CSS utility classes.', date: '2023-04-10' },
    { id: 3, title: 'Optimizing React Performance', excerpt: 'Explore techniques to improve the performance of your React applications, including memoization and code splitting.', date: '2023-04-05' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Blog</h2>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="border-b pb-4">
            <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-2">{post.excerpt}</p>
            <span className="text-sm text-gray-500">{post.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;

