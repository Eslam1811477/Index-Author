import NextAuth, { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials): Promise<User | null> => {
                if (!credentials) {
                    return null;
                }

                const user: User = { id: "1", name: "User", email: credentials.email };

                if (credentials.email === "e@g.com" && credentials.password === "1811477") {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: '/login',
    }
};

export default NextAuth(options);
