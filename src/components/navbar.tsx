import BurgerMenu from "./../assets/icons/burger_menu.png";
import Search from "./../assets/icons/search.png";
import Heart from "./../assets/icons/heart_black.png";
import User from "./../assets/icons/user.png";
import Shopping from "./../assets/icons/shopping_cart.png";
import { useState } from "react";

interface NavbarProps {
  menuSmall: { title: string; content: string[] };
  categories: { title: string; content: string[] };
}

export default function Navbar({ menuSmall, categories }: NavbarProps) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="w-screen pb-4">
      <section className="hidden md:flex lg:flex flex-row justify-between items-center w-full px-7.5 py-3 min-h-7.75 text-[11px] font-light border border-secondary border-b-box-border">
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
        <section className="hidden md:flex lg:flex flex-row justify-between w-full pl-3 text-text">
          <div className="flex flex-row gap-3 items-center">
            <div className="rounded-2xl border-box-border border px-3 py-1 w-45 flex justify-between items-center">
              <label htmlFor="searching_product" className="hidden" id="search">
                Search a product here to find your requested items
              </label>
              <input
                type="text"
                id="searching_product"
                placeholder={"Search Here"}
                className="focus:outline-2 focus:outline-offset-2 focus:outline-favori-offered focus:rounded-2xl"
                aria-labelledby="search"
              />
              <img src={Search} alt="search icon" className="w-2 h-2" />
            </div>
            <label
              htmlFor="All_Category"
              className="hidden"
              id="select_category"
            >
              Select a category of object
            </label>
            <select
              name="All Category"
              id="All_Category"
              className="font-bold"
              aria-labelledby="select_category"
            >
              <option value="All Category">All Category</option>
              {categories.content.map((category, index) => (
                <option value={category} key={index}>
                  {category}
                </option>
              ))}
            </select>
            <p className="font-bold">Gift Cards</p>
            <p className="font-bold">Special Event</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <img src={Heart} alt="Favori icon" className="size-3" />
            <img src={User} alt="User icon" className="size-3" />
            <img src={Shopping} alt="Shopping cart icon" className="size-3" />
          </div>
        </section>
        <img
          src={BurgerMenu}
          alt="Menu Burger Phone"
          className="h-3 size-6 md:hidden lg:hidden"
          onClick={() => setOpenMenu(openMenu ? false : true)}
        />
        {openMenu && (
          <section className="z-3 absolute top-12 right-7 bg-[#f4f2f2cf] rounded-l p-3 font-sans">
            {menuSmall.content.map((element, index) => (
              <p className="font-light" key={index}>
                {element}
              </p>
            ))}
          </section>
        )}
      </nav>
    </header>
  );
}
