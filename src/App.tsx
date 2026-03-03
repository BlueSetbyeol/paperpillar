import Hero from "./components/hero";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="w-screen px-7.5">
        <Hero />
      </main>
    </>
  );
}

export default App;
