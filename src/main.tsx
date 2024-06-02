import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client/react";

import App from "./App.tsx";
import client from "./tools/apollo-client.ts";
import theme from "./theme.ts";

async function enableMocking(): Promise<unknown> {
  // Enable mocking even in production
  // if (process.env.NODE_ENV !== "development") {
  //   return;
  // }

  const { worker } = await import("./mocks/browser.js");
  const baseUrl = process.env.BASE_URL || "/";

  return worker.start({
    onUnhandledRequest: "bypass",
    serviceWorker: {
      url: `${baseUrl}mockServiceWorker.js`,
    },
  });
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </ApolloProvider>
    </React.StrictMode>
  );
});
