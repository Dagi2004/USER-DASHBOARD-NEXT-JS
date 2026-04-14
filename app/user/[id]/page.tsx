"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { UserDetail } from '@/types/UserDetail'; // Adjust path as needed
import Button from '@/app/ui/Button';
import { useRouter } from 'next/navigation';

export default function UserDetailPage() {
  const params = useParams();
  const router=useRouter();
  const id = params.id;

  
  const [user, setUser] = useState<UserDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data: UserDetail = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchUser();
  }, [id]);

  if (loading) return <div className="p-20 text-center animate-pulse">Loading Profile...</div>;
  if (!user) return <div className="p-20 text-center text-red-500">User not found</div>;

  return (
    <main className="min-h-screen bg-[#F8F9FB] relative">
    <div 
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '45px 45px' 
        }}
      ></div>
      <section className="container mx-auto px-6 py-12 relative z-10 max-w-6xl">
        <div className='mb-2'>
<Button buttonLabel="Back to User Data"

backgroundColor='gray'
onClick={()=>router.push("/")}/>
        </div>


    {/* User Profile Header */}
        <div className="flex items-center gap-6 mb-12">
          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-600 border border-blue-200 shadow-sm">
            {user.name.charAt(0)}
          </div>
          <div>
            <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">{user.name}</h1>
            <p className="text-gray-400 text-xl font-medium">@{user.username}</p>
          </div>
        </div>

      {/* Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 mb-8"></div>
      {/* Contact Card */}
          <div className="bg-white border border-gray-100 rounded-[2rem] p-10 shadow-sm">
            <h2 className="flex items-center gap-3 text-blue-600 font-bold mb-8">
              <span className="text-xl">✉</span> Contact
            </h2>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black mb-1">Email</p>
                <p className="text-xl font-bold text-gray-900">{user.email}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black mb-1">Phone</p>
                <p className="text-xl font-bold text-gray-900">{user.phone}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black mb-1">Website</p>
                <p className="text-xl font-bold text-gray-900">{user.website}</p>
              </div>
            </div>
          </div>
     {/* Address Card */}
          <div className="bg-white border border-gray-100 rounded-[2rem] p-10 shadow-sm">
            <h2 className="flex items-center gap-3 text-blue-600 font-bold mb-8">
              <span className="text-xl">📍</span> Address
            </h2>
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              <div className="col-span-2">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black mb-1">Street</p>
                <p className="text-xl font-bold text-gray-900">{user.address.street}</p>
              </div>
              <div className="col-span-2">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black mb-1">City</p>
                <p className="text-xl font-bold text-gray-900">{user.address.city}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black mb-1">Zipcode</p>
                <p className="text-xl font-bold text-gray-900">{user.address.zipcode}</p>
              </div>
            </div>
          </div>
    {/* Company Card - Full Width */}
        <div className="bg-white border border-gray-100 rounded-[2rem] p-10 shadow-sm">
          <h2 className="flex items-center gap-3 text-blue-600 font-bold mb-8">
            <span className="text-xl">🏢</span> Company
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black mb-1">Company Name</p>
              <p className="text-xl font-bold text-gray-900">{user.company.name}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black mb-1">Catch Phrase</p>
              <p className="text-xl font-bold text-gray-900">{user.company.catchPhrase}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black mb-1">Business</p>
              <p className="text-xl font-bold text-gray-900">{user.company.bs}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  
  );
}