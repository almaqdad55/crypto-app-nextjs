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
    async session({ session, token, user }) {
      //   session.accessToken = token.accessToken;
      //   session.refreshToken = token.refreshToken;
      //   if (token?.accessToken) {
      //     session.accessToken = token.accessToken;
      //   }

      return session;
    },
  },
});
