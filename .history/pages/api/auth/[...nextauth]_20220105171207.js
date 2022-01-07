import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
      scope:
        'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/youtube.readonly',
    }),
  ],
  //   jwt: {
  //     encryption: true,
  //   },
  //   secret: 'secret token',
  //   callbacks: {
  //     async session({ session, token }) {
  //       session.user.tag = session.user.name
  //         .split(' ')
  //         .join('')
  //         .toLocaleLowerCase();

  //       session.user.uid = token.sub;
  //       return session;
  //     },
  //   },

  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      //   if (account?.accessToken) {
      //     token.accessToken = account.accessToken;
      //   }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      // session.accessToken = token.accessToken;
      return session;
    },
  },

  secret: process.env.JWT_SECRET,
});
