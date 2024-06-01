import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: "graphql", // Replace this with your actual GraphQL endpoint
});

// Optionally, use Apollo Link to add middleware for things like authentication
const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authentication token from local storage
  const token = localStorage.getItem("authToken");

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the http link
  cache: new InMemoryCache(),
});

export default client;
