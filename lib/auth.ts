
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { env } from './env';
import { AuthOptions, getServerSession } from 'next-auth';
import { prisma } from './prisma';
import  { PrismaAdapter } from "@next-auth/prisma-adapter"

export const authOptions : AuthOptions = {
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID ,
      clientSecret: env.GITHUB_SECRET ,
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID || '',
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    // }),
  ],
  callbacks : {
    session({session,user}){
      if(!session.user) return session;
      session.user.id=user.id;
      return session;
    }
  },
  // pages: {
  //   signIn: '/auth'
  // },
  // debug: process.env.NODE_ENV === 'development',
  adapter: PrismaAdapter(prisma),
  // session: { strategy: 'jwt' },
  // jwt: {
  //   secret: process.env.NEXTAUTH_JWT_SECRET,
  // },
  // secret: process.env.NEXTAUTH_SECRET
};

export const getAuthSession = async ()=>{
const session = await getServerSession(authOptions);
return session ;
}

