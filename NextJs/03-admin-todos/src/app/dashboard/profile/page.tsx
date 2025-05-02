"use client";

import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();

  return (
    <div className="@container mx-auto px-6 pt-6">
      <h1 className="text-5xl">Perfil de usuario</h1>
      <hr className="mb-2" />
      <div className="flex flex-col items-center justify-center h-full p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-700">
          {session?.user?.name ?? "No name"}
        </h2>
        <p className="text-xl text-gray-500">{session?.user?.email ?? "No email"}</p>
        <p className="text-xl text-gray-500">{session?.user?.image ?? "No image"}</p>
        <p className="text-xl text-gray-500">{session?.user?.id ?? "No id"}</p>
      </div>
    </div>
  );
}
