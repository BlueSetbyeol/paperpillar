import Hero from "./components/hero";
import Inspirations from "./components/inspirations";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="w-screen px-7.5">
        <Hero />
        <Inspirations />
      </main>
    </>
  );
}

export default App;
