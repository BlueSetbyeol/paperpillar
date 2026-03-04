import CasualShoe from "../assets/image/image 9.png";
import SkateShoe from "../assets/image/image 11.png";
import SkateboardShoe from "../assets/image/image 12.png";
import BasketShoe from "../assets/image/image 14.png";
import BasketBallShoe from "../assets/image/image 15.png";
import SportWearShoe from "../assets/image/image 16.png";
import TrendingImage from "./ui/trendingImage";

export default function Trending() {
  const trendingMenu = ["SHORTS", "HAT", "JACKETS", "SHOES", "T-SHIRT"];
  return (
    <section className="mb-8 pt-4 border-box-border border-t border-0">
      <section className="w-full flex flex-col justify-start md:flex-row md:justify-between ">
        <h2>Trending</h2>
        <section className="overflow-x-auto relative shrink-0 flex flex-row gap-2 mb-4 md:h-[49%] md:w-auto">
          {trendingMenu.map((element, index) => (
            <button
              className={
                element === "SHOES"
                  ? "button_simple bg-main text-secondary"
                  : "button_simple bg-secondary text-main"
              }
              key={index}
            >
              {element}
            </button>
          ))}
        </section>
      </section>
      <article className="w-full grid grid-cols-2 md:grid-cols-4 gap-2">
        <div className="col-start-1 col-end-2">
          <TrendingImage
            image={CasualShoe}
            name={"Casual Shoes"}
            price={225}
            selected={true}
          />
        </div>
        <div className="col-start-2 col-end-3">
          <TrendingImage
            image={SkateShoe}
            name={"Skating Shoes"}
            price={125}
            selected={false}
          />
        </div>
        <div className="col-start-1 col-end-3 md:col-start-3 md:col-end-5">
          <TrendingImage
            image={BasketShoe}
            name={"Basket ball Shoes"}
            price={125}
            selected={false}
          />
        </div>

        <div className="col-start-1 col-end-2 md:col-start-1 md:col-end-3">
          <TrendingImage
            image={BasketBallShoe}
            name={"Basket Ball Shoes"}
            price={150}
            selected={false}
          />
        </div>
        <div className="col-start-2 col-end-3 md:col-start-3 md:col-end-4">
          <TrendingImage
            image={SkateboardShoe}
            name={"Skateboard Shoes"}
            price={200}
            selected={false}
          />
        </div>
        <div className="col-start-1 col-end-3 md:col-start-4 md:col-end-5">
          <TrendingImage
            image={SportWearShoe}
            name={"Sport Wear Shoes"}
            price={159}
            selected={false}
          />
        </div>
      </article>
    </section>
  );
}
