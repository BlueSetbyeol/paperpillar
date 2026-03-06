import Hero1 from "../assets/image/image 2.png";
import Hero1bg from "../assets/image/image 3.png";
import Hero2 from "../assets/image/image 4.png";
import Hero3 from "../assets/image/image 5.png";
import FullImage from "./ui/fullImage";
import HeroImage from "./ui/heroImage";

export default function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row gap-2 md:h-151.25 font-sans">
      <FullImage
        bgImage={Hero1bg}
        frontImage={Hero1}
        fullImage={null}
        kicker={null}
        title={"Color of Summer Outfit"}
        content={"100+ Collections for your outfit inspirations in this summer"}
        name={null}
        job={null}
        button={"VIEW COLLECTIONS"}
        heroSection={true}
      />
      <aside className="w-full overflow-x-auto flex flex-row gap-2 md:flex-col md:w-[30%] md:h-full">
        <HeroImage image={Hero2} legend={"Outdoor Active"} heroImage={true} />
        <HeroImage image={Hero3} legend={"Casual Confort"} heroImage={true} />
      </aside>
    </section>
  );
}
