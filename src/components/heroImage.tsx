import Arrow from "../assets/icons/short_right.png";

interface HeroImageProps {
  image: string;
  legend: string;
  heroImage: boolean;
}

export default function HeroImage({
  image,
  legend,
  heroImage,
}: HeroImageProps) {
  return (
    <article className={heroImage ? "hero_article" : "inspiration_article"}>
      <img src={image} alt={image} className="z-0 w-full" />
      <article
        className={
          heroImage
            ? "z-1 absolute inset-y-0 left-5 top-5 pr-5 lg:top-8 lg:left-8"
            : "z-1 absolute bottom-0 left-0 p-5 w-full flex justify-between items-end"
        }
      >
        <h2 className={heroImage ? "hero_title" : "inspiration_title"}>
          {legend}
        </h2>
        {!heroImage && (
          <img
            src={Arrow}
            alt="arrow to link for shopping"
            className="w-10 h-10"
          />
        )}
      </article>
    </article>
  );
}
