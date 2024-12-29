// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Head>
        <title>Modern Furniture Designs</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>

      <header className="flex justify-between items-center p-6">
        <h1 className="text-xl font-bold">IKMS</h1>
        <div className="space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Edit Article
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Delete Article
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">
          Exploring Modern Furniture Designs
        </h2>
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-2">
            Introduction to Modern Furniture
          </h3>
          <p className="mb-4">
            Modern furniture design often emphasizes simplicity, functionality,
            and clean lines. This article explores various modern furniture
            pieces, detailing their unique features and benefits.
          </p>
          <img
            src="/fur.jpeg"
            alt="Modern furniture in a living room setting"
            className="w-full rounded"
          />
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-4">Recommended Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: 'Beach Escapes',
                description: 'Explore the best beach destinations for your next vacation.',
              },
              {
                title: 'Mountain Adventures',
                description: 'Discover thrilling mountain adventures around the world.',
              },
              {
                title: 'City Nights',
                description: 'Experience the vibrant nightlife of the world\'s top cities.',
              },
              {
                title: 'Forest Retreats',
                description: 'Find peace and tranquility in these lush forest retreats.',
              },
            ].map((article, index) => (
              <div key={index} className="border p-4 rounded">
                <h4 className="font-bold">{article.title}</h4>
                <p>{article.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
