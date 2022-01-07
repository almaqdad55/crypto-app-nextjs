import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if ((account, user)) {
        // token.accessToken = account.access_token;
        // token.refreshToken = account.refresh_token;
        token.username = account.providerAccountId;

        return {
          token,
        };
      }
    },

    async session({ session, token }) {
      //   session.accessToken = token.accessToken;
      //   session.refreshToken = token.refreshToken;
      session.username = token.username;

      return session;
    },
  },
});
