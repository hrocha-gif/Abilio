import {createContext, useState, ReactNode} from 'react'
import { api } from '../services/api'

type User = {
  id: number,
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  gender: string,
  image: string,
  accessToken: string,
  refreshToken: string;
}
type AuthContextProps = {
    user: User | null;
    login: (username: string, password: string ) => Promise<void>;
};

export const AuthContext = createContext<AuthContextProps>(
    {} as AuthContextProps
);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    async function login(username: string, password: string) {
        const response = await api.post("",{
            username,
            password,
        });
        setUser(response.data);
        console.log(JSON.stringify(response.data, null, 2));
    }
    return (
        <AuthContext.Provider value={{ user, login }}>
            {children}
        </AuthContext.Provider>
    );
}