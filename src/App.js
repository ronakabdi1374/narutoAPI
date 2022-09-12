
import Cards from "./Components/Cards/Cards.js";
import "./App.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

function App() {
  const client = new ApolloClient({
    uri: "https://narutoql.up.railway.app/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Cards />
    </ApolloProvider>
  );
}

export default App;
