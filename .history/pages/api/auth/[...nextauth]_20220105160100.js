import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  jwt: {
    encryption: true,
  },
  secret: 'secret token',
  callbacks: {
    async session({ session, token, user }) {
      //   session.accessToken = token.accessToken;
      //   session.refreshToken = token.refreshToken;
      //   if (token?.accessToken) {
      //     session.accessToken = token.accessToken;
      //   }
      session.user.uid = token.sub;
      return session;
    },
  },
});
