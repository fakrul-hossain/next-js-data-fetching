import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

export const getPosts = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts',)
    const data = await res.json();
    return data;
}




export default async function Posts () {

      const posts = await getPosts()
    return (
      
        <div>
        <h1 className='text-3xl text-center mt-6 font-bold mb-3'>Posts</h1>
        <div className='grid mx-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {posts.map((post)=>  
            
            <div className='bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow details-content:hover:shadow-lg' key={post.id}>
                <h2 className='text-xl font-black mb-2'> {post.title}</h2>
                <p className='text-gray-500 mb-4'>{post.body}</p>
                <Button className='bg-indigo-600 text-white px-4 py-2 rounded-2xl hover:bg-indigo-500 transition-colors'>
                   <Link href={`/posts/${post.id}`}>
                   Read More

                        </Link>               </Button>
            </div>
            )}
        </div>
        </div>
    );
};

