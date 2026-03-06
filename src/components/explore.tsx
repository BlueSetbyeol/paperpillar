import FullImage from "./ui/fullImage";
import bgTestimony from "../assets/image/image 17.png";
import Testimony from "../assets/image/image 19.png";
import bigTestimony from "../assets/image/image 18.png";

export default function Explore() {
  const exploreMenu = [
    { style: "rounded-full size-4 bg-[#E25F5F]", name: "RED PASTEL" },
    { style: "rounded-full size-4 bg-[#B8E25F]", name: "LIME GREEN" },
    { style: "rounded-full size-4 bg-[#233C6B]", name: "NAVY BLUE" },
    {
      style: "rounded-full size-4 bg-[#FFFFFF] border-box-border border-2 ",
      name: "CLEAN WHITE",
    },
    { style: "rounded-full size-4 bg-[#5FABE2]", name: "BLUE SKY" },
    { style: "rounded-full size-4 bg-[#B54EF4]", name: "PURPLE" },
    { style: "rounded-full size-4 bg-[#F44E8A]", name: "PINK" },
    { style: "rounded-full size-4 bg-[#F4CF4E]", name: "YELLOW" },
    {
      style: "rounded-full size-4 bg-[#44936D]",
      name: "DARK GREEN",
    },
  ];
  return (
    <section className="my-4 flex flex-col gap-6">
      <aside className="w-full flex flex-col md:flex-row md:justify-between font-sans">
        <h3 className="text-title-h3">Explore by Colors</h3>
        <div className="flex flex-row flex-wrap gap-1 md:gap-3 md:justify-end">
          {exploreMenu.map((element, index) => (
            <button
              className={
                "button_simple text-main border-main border flex flex-row justify-around items-center px-2 gap-2"
              }
              key={index}
            >
              <div className={element.style} />
              {element.name}
            </button>
          ))}
        </div>
      </aside>
      <FullImage
        bgImage={bgTestimony}
        frontImage={Testimony}
        fullImage={bigTestimony}
        kicker={"What people said"}
        title={"Love the way they handle the order."}
        content={
          "Very professional and friendly at the same time. They packed the order on schedule and the detail of their wrapping is top notch. One of my best experience for buying online items. Surely will come back for another purchase."
        }
        name={"Samantha William"}
        job={"Fashion Enthusiaste"}
        button={null}
        heroSection={false}
      />
    </section>
  );
}
