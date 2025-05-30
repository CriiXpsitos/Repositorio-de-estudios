"use client";
import { LogOut, Shield } from "lucide-react";
import { useSession, signOut, signIn } from "next-auth/react";
import React from "react";

export const LogoutButton = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <button disabled className="px-4 cursor-pointer py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
        <Shield />
        <span className="group-hover:text-gray-700">Espere...</span>
      </button>
    );
  }

    if (status === "unauthenticated") {
        return (
        <button
            onClick={() => signIn()}
            className="px-4 py-3 flex  cursor-pointer items-center space-x-4 rounded-md text-gray-600 group"
        >
            <Shield />
            <span className="group-hover:text-gray-700">Login</span>
        </button>
        );
    }

  return (
    <button onClick={() => signOut()} className="px-4 cursor-pointer py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
      <LogOut />
      <span className="group-hover:text-gray-700">Logout</span>
    </button>
  );
};
