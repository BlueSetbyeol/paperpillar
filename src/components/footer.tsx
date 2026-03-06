import MenuFooter from "./ui/menuFooter";

interface FooterProps {
  footerMenus: {
    title: string;
    content: string[];
  }[];
}

export default function Footer({ footerMenus }: FooterProps) {
  return (
    <section className="bg-highlight text-secondary w-screen px-6 py-10 flex flex-col md:flex-row md:justify-between font-sans">
      <section className="flex flex-col gap-4 items-start w-full mb-10 md:w-1/3">
        <p className="font-bold leading-[14.8px] pb-4">ECOMMERCE</p>
        <p className="text-text font-light">
          Ecommerce is a free UI Kit from Paperpillar that you can use for your
          personal or commercial project.
        </p>
        <div className="flex flex-col gap-4 items-start w-full md:flex-row md:w-auto">
          <label
            htmlFor="contact_us_by_email"
            className="hidden"
            id="contact_us"
          >
            Send us an email with any of your questions
          </label>
          <input
            type="text"
            id="contact_us_by_email"
            placeholder="Type your email address"
            className="rounded-2xl border-box-border border px-3 py-2 flex justify-between items-center text-text w-full md:w-45 focus:outline-2 focus:outline-offset-2 focus:outline-favori-offered"
            aria-labelledby="contact_us"
          />
          <button className="rounded-3xl text-text font-medium bg-secondary text-main border-2 min-w-24 min-h-10 px-3">
            Submit
          </button>
        </div>
      </section>
      <section className="flex flex-row flex-wrap gap-14 w-full md:w-2/3 md:justify-end">
        {footerMenus.map((menu) => (
          <div key={menu.title}>
            <MenuFooter menu={menu} />
          </div>
        ))}
      </section>
    </section>
  );
}
