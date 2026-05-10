import React from "react";
import { getUser } from "../../lib/data";
import Link from "next/link";

const UserDetails = async ({ params }) => {
  const { userId } = await params;
  const user = await getUser(userId);

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          User Not Found
        </h1>
        <p className="text-gray-500 mb-8 text-center max-w-md">
          We couldn't find the team member you're looking for. They may have
          been removed or the ID is incorrect.
        </p>
        <Link
          href="/users"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-indigo-100"
        >
          Back to Team List
        </Link>
      </div>
    );
  }

  const roleStyles = {
    Admin: "bg-red-100 text-red-700 border-red-200",
    Manager: "bg-amber-100 text-amber-700 border-amber-200",
    User: "bg-emerald-100 text-emerald-700 border-emerald-200",
  };

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Navigation */}
        <Link
          href="/users"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors mb-8 group"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Team
        </Link>

        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
          {/* Cover Header */}
          <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600"></div>

          <div className="px-8 pb-12">
            <div className="relative flex justify-between items-end -mt-16 mb-8">
              {/* Avatar */}
              <div className="relative">
                <img
                  src={`https://i.pravatar.cc/300?u=${user._id}`}
                  alt={user.name}
                  className="w-32 h-32 rounded-3xl border-4 border-white shadow-xl object-cover bg-white"
                />
                <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-4 border-white rounded-full"></div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pb-2">
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold transition-all active:scale-95 shadow-lg shadow-indigo-100">
                  Edit Profile
                </button>
                <button className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl transition-all">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* User Info */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                  {user.name}
                </h2>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${roleStyles[user.role] || "bg-gray-100 text-gray-700 border-gray-200"}`}
                >
                  {user.role}
                </span>
              </div>
              <p className="text-lg text-gray-500">{user.email}</p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-indigo-100 transition-colors">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Member ID
                </p>
                <p className="text-gray-900 font-mono text-sm break-all">
                  {user._id}
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-indigo-100 transition-colors">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Account Status
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-gray-900 font-semibold">Active</p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-indigo-100 transition-colors">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Permissions
                </p>
                <p className="text-gray-900 font-semibold">Standard Access</p>
              </div>
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-indigo-100 transition-colors">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Joined Date
                </p>
                <p className="text-gray-900 font-semibold">May 10, 2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="mt-8 p-6 bg-red-50 rounded-3xl border border-red-100 flex justify-between items-center">
          <div>
            <h3 className="text-red-800 font-bold">Danger Zone</h3>
            <p className="text-red-600 text-sm">
              Delete this account and all associated data.
            </p>
          </div>
          <button className="px-4 py-2 bg-white hover:bg-red-600 hover:text-white text-red-600 border border-red-200 rounded-xl text-sm font-bold transition-all shadow-sm">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
