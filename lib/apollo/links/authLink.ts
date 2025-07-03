import { setContext } from "@apollo/client/link/context";

// Middleware to attach token to every request
export const authLink = setContext((_, { headers }) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("authToken") : null;
  console.log("🚀 ~ authLink ~ token:", token);

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
