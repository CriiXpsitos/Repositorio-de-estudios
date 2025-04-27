import { useState } from "react";
import { UserContext } from "./UserContext";

interface User {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  edad: number;
}

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
