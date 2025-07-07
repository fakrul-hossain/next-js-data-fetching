import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';


// Function to fetch a single post by ID
export const getSinglePost = async (post_id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
  const data = await res.json();
  return data;
};

export default async function SinglePost({ params }) {
  const post = await getSinglePost(params.id);
  console.log(post.title);
  

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Post Details</h1>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h2 className="text-2xl font-semibold mb-2 text-indigo-700">{post.title}</h2>
        <p className="text-gray-600">{post.body}</p>
        <div className="mt-4">
          <Link href="/posts" className="text-blue-500 hover:underline">
            ← Back to Posts
          </Link>
          
        </div>
      </div>
    </div>
  );
}
