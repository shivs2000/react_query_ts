import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Planets from "./components/Planets";
import People from "./components/People";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

function App() {
  const [page, setPage] = useState("planets");
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Star wars App</h1>
        <Navbar setPage={setPage} />
        <div className="content ">
          {page === "planets" ? <Planets /> : <People />}
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
