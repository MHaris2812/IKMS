"use client";
import React from 'react';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';

export default function Home() {
    return (
        <div className=" flex items-center justify-center bg-white">
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="md:w-1/2">
                    <img 
                        src="/log.jpg" width={400}
                        alt="A person with curly hair and a red line on their face" 
                        className="w-full  object-cover"
                    />
                </div>

                <div className="md:w-1/2 p-8">
                    <h1 className="text-3xl font-bold mb-4">Sign up</h1>
                    <p className="text-gray-600 mb-6">Get started with IKMS platform now</p>
                    <form className="space-y-4">
                        <input 
                            type="text" 
                            placeholder="Your username" 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        <input 
                            type="email" 
                            placeholder="Enter your email address" 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        <input 
                            type="password" 
                            placeholder="Choose a password" 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        <input 
                            type="password" 
                            placeholder="Confirm your password" 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                className="mr-2"
                            />
                            <span className="text-gray-600">By signing up, you agree to our policies.</span>
                        </div>
                        <Link href="/Dashboard">  <div className="bg-blue-500 text-center text-white font-bold p-4">Login </div>  </Link> 
                    </form>
                    <div className="mt-4 text-center">
                     <Link href="/Dashboard">  <div className="text-gray-600">Login </div>  </Link> 
                    </div>
                    <div className="mt-2 text-center">
                        <a href="#" className="text-gray-600">Already a member? Log in</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
