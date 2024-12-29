"use client"
import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [activities] = useState([
    { id: '001', title: 'New Article Published', state: 'Completed', date: '2023-10-01' },
    { id: '002', title: 'User Account Created', state: 'Pending', date: '2023-10-02' },
    { id: '003', title: 'Password Reset Requested', state: 'In Progress', date: '2023-10-03' },
    { id: '004', title: 'Article Updated', state: 'Completed', date: '2023-10-04' },
    { id: '005', title: 'User Profile Updated', state: 'Completed', date: '2023-10-05' },
    { id: '006', title: 'New Comment Posted', state: 'Pending', date: '2023-10-06' },
    { id: '007', title: 'User Account Deactivated', state: 'Completed', date: '2023-10-07' },
  ]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Dashboard</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>
      <div className="flex h-screen">
        <aside className="w-1/5 bg-white p-4 shadow-md">
          <div className="text-2xl font-bold mb-8">IKMS</div>
          <nav>
            <ul>
              <li className="mb-4">
              <Link href="/Dashbaord">  <div  className="flex items-center text-blue-500">
                  <i className="fas fa-tachometer-alt mr-2"></i> Dashboard
                </div></Link>
              </li>
              <li className="mb-4">
           <Link href="/Articles">   <div  className="flex items-center text-gray-600">
                  <i className="fas fa-newspaper mr-2"></i> Articles
                  </div></Link>
              </li>
              <li className="mb-4">
              <Link href="/Users">  <div className="flex items-center text-gray-600">
                  <i className="fas fa-users mr-2"></i> Users
                </div></Link>
              </li>
              <li className="mb-4">
              <Link href="/Audit">  <div  className="flex items-center text-gray-600">
                  <i className="fas fa-history mr-2"></i> Audit logs
                </div></Link>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-8">
          <header className="flex justify-between items-center mb-8">
            <nav className="flex space-x-4">
            <Link href="/Dashboard">  <div  className="text-blue-500 border-b-2 border-blue-500 pb-2">Dashboard</div></Link>
             <Link href="/Articles"> <div className="text-gray-600">Articles</div></Link>
           <Link href="/Users">  <div  className="text-gray-600">Users</div></Link> 
             <Link href="/Audit"> <div  className="text-gray-600">Audit Logs</div></Link>
            </nav>
            <div className="space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Manage Users</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Article</button>
            </div>
          </header>
          <section className="grid grid-cols-3 gap-8 mb-8">
            <DashboardCard icon="newspaper" label="Total Articles" count="1500" change="+5% this week" />
            <DashboardCard icon="users" label="Total Users" count="1,250" change="+5% from last week" />
            <DashboardCard icon="hand-pointer" label="Active Sessions" count="150" change="+5%" />
          </section>
          <RecentActivity activities={activities} />
        </main>
      </div>
    </div>
  );
}

function DashboardCard({ icon, label, count, change }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <div className="flex items-center mb-4">
        <i className={`fas fa-${icon} text-blue-500 text-2xl mr-4`}></i>
        <div>
          <div className="text-gray-600">{label}</div>
          <div className="text-2xl font-bold">{count}</div>
          <div className="text-green-500">{change}</div>
        </div>
      </div>
    </div>
  );
}

function RecentActivity({ activities }) {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Recent Activity Log</h2>
      <Link href="/ManageArt">  <button className="bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded">
          Manage Articles
        </button></Link>
      </div>
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="py-2 px-4">Activity ID</th>
            <th className="py-2 px-4">Title</th>
            <th className="py-2 px-4">State</th>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity.id} className="border-t">
              <td className="py-2 px-4">{activity.id}</td>
              <td className="py-2 px-4">{activity.title}</td>
              <td className="py-2 px-4">{activity.state}</td>
              <td className="py-2 px-4">{activity.date}</td>
              <td className="py-2 px-4 space-x-2">
                <Link href="/ManageArt"> <button className="bg-blue-500 text-white px-4 py-1 rounded">View</button></Link>
                <button className="bg-blue-500 text-white px-4 py-1 rounded">Edit</button>
                <button className="bg-blue-500 text-white px-4 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
