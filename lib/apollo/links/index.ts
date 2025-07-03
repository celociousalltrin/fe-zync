import { from } from "@apollo/client";
import { errorLink } from "./errorLink";
import { authLink } from "./authLink";
import { httpLink } from "./httpLink";

export const links = from([errorLink, authLink, httpLink]);
