import { onError } from "@apollo/client/link/error";
import toast from "react-hot-toast";

// Error interceptor to catch GraphQL + Network errors
export const errorLink = onError(
  ({ graphQLErrors, networkError, response }) => {
    if (graphQLErrors) {
      let message = graphQLErrors[0].message;
      toast.error(message);
    }

    if (networkError) {
      console.error(`[Network error]: ${networkError.message}`);
      // if (networkError?.statusCode === 401) {
      //   console.warn("401 Unauthorized");
      // }
    }
  }
);
