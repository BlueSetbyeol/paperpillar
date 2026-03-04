import likeIcon from "../assets/icons/heart_white.png";

interface TrendingImageProps {
  image: string;
  name: string;
  price: number;
  selected: boolean;
}

export default function TrendingImage({
  image,
  name,
  price,
  selected,
}: TrendingImageProps) {
  return (
    <section>
      <article className="rounded-2xl overflow-hidden relative h-[21vh] lg:h-[26vh]">
        <img src={image} alt="Shoes" className="z-0 w-full h-full" />
        <div className={selected ? "selected_like" : "offered_like"}>
          <img src={likeIcon} alt="favorite to add" className="z-2 size-3.5" />
        </div>
      </article>
      <aside>
        <h3>{name}</h3>
        <p className="font-light text-[11px]">{price} $</p>
      </aside>
    </section>
  );
}
