import {createContext, useState, ReactNode, useActionState} from 'react'

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
    user: User;
    login: (username: string, password: string ) => Promise<void>;
};

export const AuthContext = createContext<AuthContextProps>(
    {} as AuthContextProps
);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState({} as User)
    async function login(username: string, password: string) {
        const response = await api.post("",{
            username,
            password,
        });
        console.log(JSON.stringify(response.data, null, 2));
    }
    return (
        <AuthContext.Provider value={{ user, login }}>
            {children}
        </AuthContext.Provider>
    );
}