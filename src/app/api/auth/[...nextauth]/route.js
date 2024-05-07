// import NextAuth from "next-auth/next";
// import GoogleProvider from "next-auth/providers/google";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// // import { PrismaClient } from "@prisma/client";
// import prisma from "../../../../utils/connect"

// // const prisma = new PrismaClient();

// export const authOptions = {
//     adapter : PrismaAdapter(prisma),
//     providers: [
//       GoogleProvider({
//         clientId: process.env.GOOGLE_ID,
//         clientSecret: process.env.GOOGLE_SECRET,
//       }),
//     ],
// };

// const handler = NextAuth(authOptions);

// export {handler as GET, handler as POST}

// export const getAuthSession = () => getAuthSession(authOptions);


import { authOptions } from "../../../../utils/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };