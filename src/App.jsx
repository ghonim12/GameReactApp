import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const [selectedLink, setSelectedLink] = useState("");
  const queryClient = new QueryClient();

  return (
    <>
      <div className="bg-primary min-h-screen">
        <QueryClientProvider client={queryClient}>
          <Header />
          <Navbar onLinkClick={setSelectedLink} />
          <Home category={selectedLink} />
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
