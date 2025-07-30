import NextAuth, {AuthError} from "next-auth"
import Credentials from "@auth/core/providers/credentials";

export const {handlers, signIn, signOut, auth} = NextAuth({
    pages: {
        signIn: '/login'
    },
    providers: [
        Credentials({
            credentials: {
                username: {label: "Username", type: "text", placeholder: "Username"},
                password: {label: "Password", type: "password", placeholder: "Password"},
            },
            authorize: async (credentials) => {
                const response = await fetch(`${process.env.NEXT_BACKEND_URL}/auth/login`, {
                    method: 'POST',
                    body: JSON.stringify({
                        username: credentials.username,
                        password: credentials.password,
                        expiresInMins: 10,
                    }),
                });

                const data =  await response.json();

                if (response.status !== 200) {
                    throw new AuthError(data.message || 'Bad credentials');
                }

                console.log(['data', data]);

                return data;
            }
        }),
    ],
})