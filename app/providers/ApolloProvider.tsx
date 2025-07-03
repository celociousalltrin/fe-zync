"use client";

import { ApolloProvider as ApolloHooksProvider } from "@apollo/client";
import { client } from "@/lib/apollo/client";

export default function ApolloProvider({ children }: { children: any }) {
  return <ApolloHooksProvider client={client}>{children}</ApolloHooksProvider>;
}
