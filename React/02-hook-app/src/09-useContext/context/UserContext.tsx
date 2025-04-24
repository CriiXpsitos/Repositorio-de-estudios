import { createContext, Dispatch, SetStateAction } from "react";

interface User {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  edad: number;
}

interface UserContextType {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});
