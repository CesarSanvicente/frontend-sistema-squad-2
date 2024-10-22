import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith@" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials) return null;
                try {
                    const res = await axios.post(
                        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/login`,
                        { email: credentials.email, password: credentials.password },
                        { headers: { "Content-Type": "application/json" }, withCredentials: true }
                    );
                    const user = res.data;
                    if (res.status === 200 && user) return user;
                    return null;
                } catch (error) {
                    console.error("Authentication failed:", error);
                    return null;
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
        }),
    ],
    pages: {
        signIn: "/auth/login",
        error: "/auth/error",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user, account }) {
            // Si el usuario acaba de iniciar sesión
            if (user && account?.provider === 'google') {
                try {
                    // Enviar los datos del usuario a tu backend para crear/actualizar
                    const response = await axios.post(
                        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/verifyGoogle`,
                        { id_token: account.id_token },
                        {
                            headers: { "Content-Type": "application/json" },
                            withCredentials: true, // Si necesitas enviar cookies con la solicitud
                        }
                    );
                    // Asumimos que el backend devuelve el usuario actualizado
                    const { user: updatedUser } = response.data;
                    token.id = updatedUser.id;
                    token.email = updatedUser.email;
                    token.name = updatedUser.name;
                } catch (error) {
                    console.error("Error sincronizando con el backend:", error);
                }
            }

            // Agregar cualquier otra información relevante
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
            }

            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.email = token.email;
            session.user.name = token.name;
            return session;
        }
    }
};


// Crea el handler para NextAuth
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
