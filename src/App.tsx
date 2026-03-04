import Explore from "./components/explore";
import Hero from "./components/hero";
import Inspirations from "./components/inspirations";
import Navbar from "./components/navbar";
import Trending from "./components/trending";

function App() {
  return (
    <>
      <Navbar />
      <main className="w-screen px-7.5">
        <Hero />
        <Inspirations />
        <Trending />
        <Explore />
      </main>
    </>
  );
}

export default App;
