import Inspiration1 from "../assets/image/image 7.png";
import Inspiration2 from "../assets/image/image 8.png";
import Arrow from "../assets/icons/short_right.png";

export default function Inspirations() {
  return (
    <section className="w-full my-8 md:flex lg:flex md:h-[30vh] lg:h-[30vh]">
      <article className="w-full pr-7 md:w-[30%] lg:w-[30%] h-full flex flex-col justify-between">
        <h2 className="text-left text-highlight text-5xl font-light">
          Casual Inspirations
        </h2>
        <p className="text-left text-highlight font-light ">
          Our favorite combinations for casual outfit that can inspire you to
          apply on your daily activity.
        </p>
        <button className="button_basic bg-secondary text-highlight border-highlight border">
          BROWSE INPIRATIONS
        </button>
      </article>
      <aside className="hidden md:flex lg:flex md:w-[70%] lg:w-[70%] justify-between h-full">
        <article className="w-[49%] rounded-2xl overflow-hidden relative">
          <img
            src={Inspiration1}
            alt="graphic shirts on 2 person"
            className="z-0 w-full"
          />
          <article className="z-1 absolute bottom-0 left-0 p-5 w-full flex justify-between items-end">
            <h2 className="text-secondary font-light text-[23px] w-[50%] text-2xl">
              Say it with Shirts
            </h2>
            <img
              src={Arrow}
              alt="arrow to link for shopping"
              className="w-10 h-10"
            />
          </article>
        </article>
        <article className="w-[49%] rounded-2xl overflow-hidden relative">
          <img
            src={Inspiration2}
            alt="woman in funky purple clothes"
            className="z-0 w-full"
          />
          <article className="z-1 absolute bottom-0 left-0 p-5 w-full flex justify-between items-end">
            <h2 className="text-secondary font-light text-[23px] w-[50%] text-2xl">
              Funky never gets old
            </h2>
            <img
              src={Arrow}
              alt="arrow to link for shopping"
              className="w-10 h-10"
            />
          </article>
        </article>
      </aside>
    </section>
  );
}
