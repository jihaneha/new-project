
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { env } from './env';


export const authOptions = {
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID ,
      clientSecret: env.GITHUB_SECRET ,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  pages: {
    signIn: '/auth'
  },
  debug: process.env.NODE_ENV === 'development',
//   adapter: PrismaAdapter(prismadb),
  session: { strategy: 'jwt' },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET
};

