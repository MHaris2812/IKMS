"use client"
import { useState } from 'react';

const logs = [
    { id: 1, action: 'Login', user: 'John Doe', date: '2024-12-01', state: 'Success' },
    { id: 2, action: 'File Upload', user: 'Jane Smith', date: '2024-12-02', state: 'Failure' },
    { id: 3, action: 'Password Change', user: 'Michael Lee', date: '2024-12-03', state: 'Pending' },
    { id: 4, action: 'Data Export', user: 'Emma Brown', date: '2024-12-04', state: 'Resolved' },
    { id: 5, action: 'Logout', user: 'John Doe', date: '2024-12-05', state: 'Success' },
];

const totalPages = 11;
const visiblePages = 5;

const getPageNumbers = (currentPage) => {
    const pages = [];
    let start = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let end = Math.min(totalPages, start + visiblePages - 1);

    if (end - start + 1 < visiblePages) {
        start = Math.max(1, end - visiblePages + 1);
    }

    for (let i = start; i <= end; i++) {
        pages.push(i);
    }
    return pages;
};

const getStateColor = (state) => {
    switch (state) {
        case 'Success': return 'bg-green-100 text-green-600';
        case 'Failure': return 'bg-red-100 text-red-600';
        case 'Pending': return 'bg-yellow-100 text-yellow-600';
        case 'Resolved': return 'bg-blue-100 text-blue-600';
        default: return 'bg-gray-100 text-gray-600';
    }
};

export default function AuditLogs() {
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');

    const filteredLogs = logs.filter(log =>
        log.action.toLowerCase().includes(search.toLowerCase()) ||
        log.state.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md">
                <div className="p-6 text-xl font-semibold">Audit Logs</div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 p-6 overflow-x-auto">
                <input
                    type="text"
                    placeholder="Search logs..."
                    className="mb-4 p-2 border border-gray-300 rounded-md w-full"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <table className="min-w-full bg-white border rounded-lg">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Action</th>
                            <th className="py-2 px-4 border-b">User</th>
                            <th className="py-2 px-4 border-b">Date</th>
                            <th className="py-2 px-4 border-b">State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredLogs.map((log) => (
                            <tr key={log.id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">{log.action}</td>
                                <td className="py-2 px-4 border-b">{log.user}</td>
                                <td className="py-2 px-4 border-b">{log.date}</td>
                                <td className="py-2 px-4 border-b">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded ${getStateColor(log.state)}`}>
                                        {log.state}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="flex justify-center mt-4">
                    {getPageNumbers(currentPage).map(page => (
                        <button
                            key={page}
                            className={`px-4 py-2 mx-1 border rounded-md ${currentPage === page ? 'bg-purple-500 text-white' : 'bg-white text-gray-500'} hover:bg-gray-100`}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
