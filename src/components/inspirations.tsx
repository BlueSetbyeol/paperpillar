import Inspiration1 from "../assets/image/image 7.png";
import Inspiration2 from "../assets/image/image 8.png";
import HeroImage from "./heroImage";

export default function Inspirations() {
  return (
    <section className="w-full mt-8 mb-4 md:flex lg:flex md:h-[30vh] lg:h-[30vh]">
      <article className="w-full pr-7 md:w-[30%] lg:w-[30%] h-full flex flex-col justify-between">
        <h2 className="text-left text-highlight text-5xl font-light">
          Casual Inspirations
        </h2>
        <p className="text-left text-highlight font-light ">
          Our favorite combinations for casual outfit that can inspire you to
          apply on your daily activity.
        </p>
        <button className="button_cta bg-secondary text-highlight border-highlight border mt-5 md:mt-0">
          BROWSE INPIRATIONS
        </button>
      </article>
      <aside className="hidden md:flex lg:flex md:w-[70%] lg:w-[70%] justify-between h-full">
        <HeroImage
          image={Inspiration1}
          legend={"Say it with Shirts"}
          heroImage={false}
        />
        <HeroImage
          image={Inspiration2}
          legend={"Funky never gets old"}
          heroImage={false}
        />
      </aside>
    </section>
  );
}
