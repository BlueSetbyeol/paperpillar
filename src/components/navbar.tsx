import BurgerMenu from "./../assets/icons/burger_menu.png";
import Search from "./../assets/icons/search.png";
import Heart from "./../assets/icons/heart_black.png";
import User from "./../assets/icons/user.png";
import Shopping from "./../assets/icons/shopping_cart.png";
import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="w-screen pb-4">
      <section className="hidden md:flex lg:flex flex-row justify-between items-center w-full px-7.5 py-3 min-h-7.75 text-[8px] font-light border border-secondary border-b-box-border">
        <div className="flex flex-row gap-4">
          <p>English</p>
          <p>Dollar</p>
        </div>
        <div className="flex flex-row gap-4">
          <p>Tracking Paquage</p>
          <p>FAQ</p>
          <p>About US</p>
          <p>Contact US</p>
        </div>
      </section>
      <nav className="w-screen h-[46.6px] pt-5 px-7.5 flex flex-row justify-between items-center static">
        <p className="font-bold leading-[14.8px]">ECOMMERCE</p>
        <section className="hidden md:flex lg:flex flex-row justify-between w-full pl-3 text-[11px]">
          <div className="flex flex-row gap-3 items-center">
            <div className="rounded-2xl border-box-border border px-3 py-1 w-45 flex justify-between items-center">
              <input type="text" placeholder={"Search Here"} />
              <img src={Search} alt="search icon" className="w-2 h-2" />
            </div>
            <select name="All Category" id="All Category" className="font-bold">
              <option value="">All Category</option>
            </select>
            <p className="font-bold">Gift Cards</p>
            <p className="font-bold">Special Event</p>
          </div>
          <div className="flex flex-row gap-3">
            <button>
              <img src={Heart} alt="Favori icon" />
            </button>
            <button>
              <img src={User} alt="User icon" />
            </button>
            <button>
              <img src={Shopping} alt="Shopping cart icon" />
            </button>
          </div>
        </section>
        <button
          type="button"
          onClick={() => setOpenMenu(openMenu ? false : true)}
        >
          <img
            src={BurgerMenu}
            alt="Menu Burger Phone"
            className="h-3 md:hidden lg:hidden"
          />
        </button>
        {openMenu && (
          <section className="z-3 absolute top-12 right-7 bg-[#f4f2f2cf] rounded-l p-3">
            <p className="font-light">All Categories</p>
            <p className="font-light">Gift Cards</p>
            <p className="font-light">Special Event</p>
          </section>
        )}
      </nav>
    </header>
  );
}
