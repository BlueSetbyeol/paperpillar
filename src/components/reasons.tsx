import Card from "./ui/card";
import IconHeart from "../assets/icons/icon-heart.png";
import Return from "../assets/icons/return.png";
import Tel from "../assets/icons/tel.png";
import BlogImage from "../assets/image/Group 405.png";

export default function Reasons() {
  const reasonsToLove = [
    {
      icon: IconHeart,
      title: "Take care with love",
      content:
        "We take care your package with full of attention and of course full of love. We want to make sure you’ll receive your package like you receive your birthday gift.",
    },
    {
      icon: Tel,
      title: "Friendly Customer Service",
      content:
        "You do not need to worry when you want to check your package. We will always answer whatever your questions. Just click on the chat icon and we will talk.",
    },
    {
      icon: Return,
      title: "Refund Process",
      content:
        "Refund is a such bad experience and we don’t want that thing happen to you. But when it’s happen we will make sure you will through smooth and friendly process.",
    },
  ];

  return (
    <section className="my-8">
      <h2 className="text-left text-highlight text-4xl font-light">
        Why you’ll love to shop on our website
      </h2>
      <article className="w-full flex flex-col gap-4 items-center md:flex-row my-4">
        {reasonsToLove.map((reason, index) => (
          <div key={index}>
            <Card
              icon={reason.icon}
              title={reason.title}
              content={reason.content}
            />
          </div>
        ))}
      </article>
      <h3 className="text-left text-highlight text-3xl font-light mt-12 mb-4">
        From The Blog
      </h3>
      <article className="min-h-82 w-full gap-4 flex flex-col items-start md:flex-row">
        <img
          src={BlogImage}
          alt="clothes hanged as a group"
          className="rounded-2xl w-full md:w-1/2 mb-4"
        />
        <section className="md:w-1/2 md:h-80 lg:h-94.5 flex flex-col justify-between">
          <h2 className="text-left text-highlight text-4xl font-normal">
            How to combine your daily outfit to looks fresh and cool.
          </h2>
          <p className="text-[14px] font-light my-4">
            Maybe you don’t need to buy new clothes to have nice, cool, fresh
            looking outfit everyday. Maybe what you need is to combine your
            clothes collections. Mix and match is the key.
          </p>
          <button className="rounded-3xl h-11 border-highlight border w-45 text-[14px] mt-4">
            READ MORE
          </button>
        </section>
      </article>
    </section>
  );
}
