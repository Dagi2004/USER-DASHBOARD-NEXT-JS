"use client";

import { TableData } from "@/types/User";
import { useRouter } from "next/navigation";

const AVATAR_COLORS = [
  { bg: "bg-purple-100 text-purple-800" },
  { bg: "bg-teal-100 text-teal-800" },
  { bg: "bg-orange-100 text-orange-800" },
  { bg: "bg-blue-100 text-blue-800" },
  { bg: "bg-green-100 text-green-800" },
  { bg: "bg-amber-100 text-amber-800" },
  { bg: "bg-pink-100 text-pink-800" },
  { bg: "bg-red-100 text-red-800" },
];

function getInitials(name: string) {
  return name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

export default function UserTable({ users }: { users: TableData }) {
  const router = useRouter();

  if (!users.users.length) {
    return (
      <div className="mt-20 text-center text-gray-400 text-sm">
        No users found.
      </div>
    );
  }

  return (
    <div className="mt-10">
      {/* Table header */}
      <div className="flex justify-between items-baseline mb-3 px-1">
        <span className="text-sm font-medium text-gray-900">Users</span>
        <span className="text-xs text-gray-400">{users.users.length} results</span>
      </div>

      {/* Table */}
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">Email</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">City</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">Street</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">Zip Code</th>
              <th className="w-6" />
            </tr>
          </thead>
          <tbody>
            {users.users.map((user, i) => {
              const color = AVATAR_COLORS[i % AVATAR_COLORS.length];
             return (
  <tr
    key={user.id}
    onClick={() => router.push(`/user/${user.id}`)}
    className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors cursor-pointer"
  >
    <td className="px-4 py-3">
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 ${color.bg}`}>
          {getInitials(user.name)}
        </div>
        <div>
          <p className="font-medium text-gray-900">{user.name}</p>
          <p className="text-xs text-gray-400">@{user.username}</p>
        </div>
      </div>
    </td>
    <td className="px-4 py-3 text-gray-500">{user.email}</td>
    <td className="px-4 py-3 font-medium text-gray-900">{user.address.city}</td>
    <td className="px-4 py-3 text-gray-500">{user.address.street}</td>
    <td className="px-4 py-3 font-mono text-xs text-gray-400">{user.address.zipcode}</td>
    <td className="px-4 py-3 text-gray-300 text-base">›</td>
  </tr>
);
})}
          </tbody>
        </table>
      </div>
    </div>
  );
}