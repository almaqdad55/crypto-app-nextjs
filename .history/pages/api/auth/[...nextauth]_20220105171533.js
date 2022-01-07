import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      // session.accessToken = token.accessToken;
      session.user.uid = token.sub;
      session.user.tokenId = token;
      return session;
    },
  },

  secret: process.env.JWT_SECRET,
});
