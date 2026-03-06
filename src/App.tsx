import Explore from "./components/explore";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Inspirations from "./components/inspirations";
import Navbar from "./components/navbar";
import Reasons from "./components/reasons";
import Trending from "./components/trending";

function App() {
  const AllMenus = [
    {
      title: "POPULAR",
      content: ["Shoes", "T-Shirt", "Jackets", "Hat", "Accessories"],
    },
    {
      title: "MENU",
      content: [
        "All Category",
        "Gift Cards",
        "Special Events",
        "Testimonial",
        "Blog",
      ],
    },
    {
      title: "OTHER",
      content: [
        "Tracking Package",
        "FAQ",
        "About Us",
        "Contact Us",
        "Terms and Conditions",
      ],
    },
  ];

  return (
    <>
      <Navbar menuSmall={AllMenus[1]} categories={AllMenus[0]} />
      <main className="w-screen px-6 font-sans">
        <Hero />
        <Inspirations />
        <Trending />
        <Explore />
        <Reasons />
      </main>
      <Footer footerMenus={AllMenus} />
    </>
  );
}

export default App;
