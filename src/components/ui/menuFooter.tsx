interface MenuFooterProps {
  menu: {
    title: string;
    content: string[];
  };
}

export default function MenuFooter({ menu }: MenuFooterProps) {
  return (
    <section className="w-[30vw] md:w-auto">
      <p className="text-[13px] font-medium">{menu.title}</p>
      {menu.content.map((items, index) => (
        <p key={index} className="text-text font-extralight mt-3">
          {items}
        </p>
      ))}
    </section>
  );
}
