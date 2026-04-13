"use client";
import Button from './ui/Button';
import { UserData } from '@/types/User';
import UserTable from './components/UserDataTable';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<UserData[]>([]);
  const [searchUserName, setuserName] = useState<string>("");
  const [filteredData, setFilteredData] = useState<UserData[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data: UserData[] = await response.json();
        setUsers(data);
        setFilteredData(data);
      } catch (error) {
        console.error("Failed to fetch Users");
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const filteredUser = searchUserName === "" 
      ? users 
      : users.filter((u) => u.username.toLowerCase().includes(searchUserName.toLowerCase()));
    setFilteredData(filteredUser);
  }, [searchUserName, users]);

  return (
    <main className="min-h-screen bg-[#fcfcfc] pb-20">
      
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 pt-16 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-gray-900 font-extrabold md:text-6xl text-4xl tracking-tight mb-4">
           User Directory <span className="text-blue-600">Dashboard</span>
          </h1>
          <p className="text-gray-500 md:text-lg text-base max-w-2xl mx-auto leading-relaxed">
          List of User fecthed from JSON PUBLIC API . Click any row to dive into their full profile — contact details, location, and company info all in one view.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 -mt-8">
        {/* Toolbar Area */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Network Directory</h2>
            <p className="text-sm text-gray-400">{filteredData.length} users active</p>
          </div>

          <div className="relative w-full md:w-80">
            {/* Search Icon */}
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text"
              placeholder="Search by username..."
              value={searchUserName} 
              onChange={(e) => setuserName(e.target.value)}
              className="block w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="mt-8">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-400 font-medium">Syncing database...</p>
            </div>
          ) : filteredData.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
              <p className="text-gray-500 text-lg">No users match<span className="font-semibold">{searchUserName}</span></p>
              <Button 
              buttonLabel="Clear Input"
            backgroundColor="blue"
                onClick={() => setuserName("")}/>
          
            </div>
          ) : (
            <UserTable users={{ users: filteredData }} />
          )}
        </div>
      </section>
    </main>
  );
}