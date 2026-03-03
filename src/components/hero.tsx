import Hero1 from "../assets/image/image 2.png";
import Hero1bg from "../assets/image/image 3.png";
import Hero2 from "../assets/image/image 4.png";
import Hero3 from "../assets/image/image 5.png";

export default function Hero() {
  return (
    <>
      <section className="w-full flex flex-col md:flex-row lg:flex-row gap-2 lg:min-h-151.25">
        <article className="w-full h-[70vh] rounded-2xl overflow-hidden relative bg-[#9FAA8A]">
          <img
            src={Hero1bg}
            alt="Background Hero image"
            className="z-0 w-full md:hidden lg:hidden"
          />
          <img
            src={Hero1}
            alt="woman on a tenis court"
            className="z-1 w-full absolute inset-x-0 bottom-0 md:h-full"
          />
          <article className="z-2 absolute inset-y-0 left-5 top-5 pr-5 md:left-8 md:top-8 md:w-[40%] lg:top-8 lg:left-8 lg:w-[40%]">
            <h1 className="text-secondary font-light text-7xl mb-4">
              Color of Summer Outfit
            </h1>
            <p className="text-secondary font-extralight text-[14px] mb-4">
              100+ Collections for your outfit inspirations in this summer
            </p>
            <button className="rounded-2xl bg-highlight text-secondary h-7 w-[65%] text-[9px]">
              VIEW COLLECTIONS
            </button>
          </article>
        </article>
        <aside className="w-full overflow-x-auto flex flex-row gap-2 md:flex-col md:w-[30%] lg:w-[35%]">
          <article className="w-45 h-40 rounded-2xl overflow-hidden relative shrink-0 md:h-[49%] lg:w-full lg:h-[49%]">
            <img
              src={Hero2}
              alt="man riding on a bicycle"
              className="z-0 w-full md:w-auto md:h-full"
            />
            <article className="z-1 absolute inset-y-0 left-5 top-5 pr-5 lg:top-6 lg:left-6">
              <h2 className="text-main font-light text-[23px] mb-4 md:w-[50%] md:text-2xl lg:w-[50%] lg:text-2xl">
                Outdoor Active
              </h2>
            </article>
          </article>
          <article className="w-45 h-40 rounded-2xl overflow-hidden relative shrink-0 md:h-[49%] lg:w-full lg:h-[49%]">
            <img
              src={Hero3}
              alt="man riding on a bicycle"
              className="z-0 w-full md:w-auto md:h-full"
            />
            <article className="z-1 absolute inset-y-0 left-5 top-5 pr-5 lg:top-8 lg:left-8">
              <h2 className="text-main font-light text-[23px] mb-4 md:w-[50%] md:text-2xl lg:w-[50%] lg:text-2xl">
                Casual Confort
              </h2>
            </article>
          </article>
        </aside>
      </section>
    </>
  );
}
