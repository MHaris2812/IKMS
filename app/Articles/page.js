"use client"
import React from 'react';

const articles = [
  {
    title: 'Himalayan Journey',
    date: '2023-10-01',
    description: 'Explore the majestic Himalayan mountains and their breathtaking beauty.'
  },
  {
    title: 'Diversity Matters',
    date: '2023-09-15',
    description: 'The importance of diversity in modern workplaces.'
  },
  {
    title: 'Vegan Delights',
    date: '2023-09-10',
    description: 'Discover the best vegan recipes to try at home.'
  },
  {
    title: 'Futuristic Cities',
    date: '2023-08-28',
    description: 'How technology is reshaping urban landscapes.'
  },
  {
    title: 'Yoga for Mind',
    date: '2023-08-20',
    description: 'The benefits of yoga for mental health and well-being.'
  },
  {
    title: 'Roses and Cultures',
    date: '2023-08-05',
    description: 'The cultural significance of roses around the world.'
  }
];

export default function ArticlesPage() {
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">IKMS</h1>
        <nav className="space-x-4">
          <a href="#" className="text-blue-600 border-b-2 border-blue-600">Home</a>
          <a href="#" className="text-gray-600">About Us</a>
          <a href="#" className="text-gray-600">Services</a>
          <a href="#" className="text-gray-600">Portfolio</a>
          <a href="#" className="text-gray-600">Contact Us</a>
        </nav>
      </header>
      <div className="flex justify-center my-4">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            className="w-full border rounded-full py-2 px-4"
            placeholder="Search articles..."
          />
          <button className="absolute right-2 top-2 text-blue-600">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className="text-gray-500">Published: {article.date}</p>
            <p className="mt-2 text-gray-700">{article.description}</p>
            <div className="flex space-x-2 mt-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Edit</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
