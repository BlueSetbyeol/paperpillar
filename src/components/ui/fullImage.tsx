interface FullImageProps {
  bgImage: string;
  frontImage: string;
  fullImage: string | null;
  kicker: string | null;
  title: string;
  content: string;
  name: string | null;
  job: string | null;
  button: string | null;
  heroSection: boolean;
}

export default function FullImage({
  bgImage,
  frontImage,
  fullImage,
  kicker,
  title,
  content,
  name,
  job,
  button,
  heroSection,
}: FullImageProps) {
  return (
    <article
      className={
        heroSection
          ? "full_image bg-[#9FAA8A] md:w-[70%]"
          : "full_image md:w-full"
      }
    >
      <img src={bgImage} alt={bgImage} className="z-0 w-full md:hidden" />
      <img
        src={frontImage}
        alt={frontImage}
        className="z-1 w-full absolute inset-x-0 bottom-0 md:h-full"
      />
      {!heroSection && fullImage && (
        <img
          src={fullImage}
          alt={fullImage}
          className="hidden md:block z-2 w-full absolute inset-x-0 bottom-0 md:h-full"
        />
      )}
      <article className="z-2 absolute inset-y-0 left-5 top-5 pr-5 md:left-8 md:top-8 md:w-[40%]">
        {!heroSection && (
          <div>
            <h3 className="text-secondary font-extralight mb-2">{kicker}</h3>
            <h2 className="text-secondary font-light text-4xl mb-4">{title}</h2>
          </div>
        )}
        {heroSection && (
          <h1 className="text-secondary font-light text-7xl mb-4">{title}</h1>
        )}
        <p className="text-secondary font-extralight text-[14px] mb-4">
          {content}
        </p>
        {!heroSection && (
          <div className="flex flex-col text-secondary">
            <h4>{name}</h4>
            <p className="font-extralight text-[9px] mt-1">{job}</p>
          </div>
        )}
        {heroSection && (
          <button className="button_cta bg-highlight text-secondary">
            {button}
          </button>
        )}
      </article>
    </article>
  );
}
