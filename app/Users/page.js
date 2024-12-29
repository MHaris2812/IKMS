import React from 'react';
import Head from 'next/head';


export default function UserList() {
    const users = [
        { name: "John Doe", email: "johndoe@example.com", role: "Admin" },
        { name: "Jane Smith", email: "janesmith@example.com", role: "User" },
        { name: "Michael Johnson", email: "michaelj@example.com", role: "Moderator" },
        { name: "Emily Brown", email: "emilyb@example.com", role: "User" },
        { name: "David Wilson", email: "davidw@example.com", role: "Admin" },
        { name: "Sarah White", email: "sarahw@example.com", role: "User" },
        { name: "Kevin Lee", email: "kevinl@example.com", role: "Moderator" },
    ];

    return (
        <>
            <Head>
                <title>User List</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            </Head>
            <div className="min-h-screen bg-gray-100 flex flex-col items-center">
                <header className="w-full bg-white shadow-md p-4 flex justify-between items-center">
                    <div className="flex items-center">
                       
                        <h1 className="ml-2 text-xl font-bold">IKMS</h1>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">LOGOUT</button>
                </header>
                <main className="w-full max-w-6xl mt-8 p-4 bg-white shadow-md rounded">
                    <h2 className="text-2xl font-semibold mb-4">User List</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">User Name</th>
                                    <th className="py-2 px-4 border-b">Email</th>
                                    <th className="py-2 px-4 border-b">Role</th>
                                    <th className="py-2 px-4 border-b">Edit Role</th>
                                    <th className="py-2 px-4 border-b">Remove User</th>
                                    <th className="py-2 px-4 border-b">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index}>
                                        <td className="py-2 px-4 border-b">{user.name}</td>
                                        <td className="py-2 px-4 border-b">{user.email}</td>
                                        <td className="py-2 px-4 border-b">{user.role}</td>
                                        <td className="py-2 px-4 border-b">
                                            <button className="bg-blue-500 text-white px-4 py-1 rounded">Edit</button>
                                        </td>
                                        <td className="py-2 px-4 border-b">
                                            <button className="bg-blue-500 text-white px-4 py-1 rounded">Remove</button>
                                        </td>
                                        <td className="py-2 px-4 border-b">Manage</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </>
    );
}
