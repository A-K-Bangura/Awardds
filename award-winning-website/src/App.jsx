import React from "react";
import Hero from "./components/Hero";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />

      <section className="relative bg-blue-600 min-h-screen w-screen"></section>
    </main>
  );
};

export default App;
