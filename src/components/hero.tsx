import Hero1 from "../assets/image/image 2.png";
import Hero1bg from "../assets/image/image 3.png";
import Hero2 from "../assets/image/image 4.png";
import Hero3 from "../assets/image/image 5.png";
import HeroImage from "./heroImage";

export default function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row gap-2 md:h-151.25">
      <article className="w-full h-[70vh] rounded-2xl overflow-hidden relative bg-[#9FAA8A] md:w-[70%]">
        <img
          src={Hero1bg}
          alt="Background Hero image"
          className="z-0 w-full md:hidden"
        />
        <img
          src={Hero1}
          alt="woman on a tenis court"
          className="z-1 w-full absolute inset-x-0 bottom-0 md:h-full"
        />
        <article className="z-2 absolute inset-y-0 left-5 top-5 pr-5 md:left-8 md:top-8 md:w-[40%]">
          <h1 className="text-secondary font-light text-7xl mb-4">
            Color of Summer Outfit
          </h1>
          <p className="text-secondary font-extralight text-[14px] mb-4">
            100+ Collections for your outfit inspirations in this summer
          </p>
          <button className="button_cta bg-highlight text-secondary">
            VIEW COLLECTIONS
          </button>
        </article>
      </article>
      <aside className="w-full overflow-x-auto flex flex-row gap-2 md:flex-col md:w-[30%] md:h-full">
        <HeroImage image={Hero2} legend={"Outdoor Active"} heroImage={true} />
        <HeroImage image={Hero3} legend={"Casual Confort"} heroImage={true} />
      </aside>
    </section>
  );
}
