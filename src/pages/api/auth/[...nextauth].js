import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    {
      secret: process.env.NEXTAUTH_SECRET,
      session: {
        jwt: true,
      },
      jwt: {
        // The maximum age of the NextAuth.js issued JWT in seconds.
        // Defaults to `session.maxAge`.
        maxAge: 60 * 60 * 24 * 30,
        // You can define your own encode/decode functions for signing and encryption
        async encode() {},
        async decode() {},
      },
      callbacks: {
        async jwt({ token, account }) {
          // Persist the OAuth access_token to the token right after signin
          if (account) {
            token.accessToken = account.access_token;
          }
          return token;
        },
        async session({ session, token, user }) {
          // Send properties to the client, like an access_token from a provider.
          session.accessToken = token.accessToken;
          return session;
        },
      },
      pages: {
        signin: "/login",
      },
      callback_url: "/dashboard",
    },
  ],
};

export default NextAuth(authOptions);

import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

export async function handler(req, res) {
  // if using `NEXTAUTH_SECRET` env variable, we detect it, and you won't actually need to `secret`
  // const token = await getToken({ req })
  const token = await getToken({ req, secret });
  console.log("JSON Web Token", token);
  res.end();
  //
}
