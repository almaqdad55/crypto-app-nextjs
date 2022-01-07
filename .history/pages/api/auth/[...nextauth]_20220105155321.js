import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
  ],
  jwt: {
    encryption: true,
  },
  secret: 'secret token',
  callbacks: {
    async jwt({ token, account }) {
      if (account?.accessToken) {
        // token.accessToken = account.access_token;
        token.accessToken = account.accessToken;

        // token.refreshToken = account.refresh_token;
        //token.username = account.providerAccountId;

        return {
          token,
        };
      }
    },

    async session({ session, token, user }) {
      //   session.accessToken = token.accessToken;
      //   session.refreshToken = token.refreshToken;
      session.accessToken = token.accessToken;

      return session;
    },
  },
});
