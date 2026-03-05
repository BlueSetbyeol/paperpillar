interface MenuFooterProps {
  menu: {
    title: string;
    content: string[];
  };
}

export default function MenuFooter({ menu }: MenuFooterProps) {
  return (
    <section>
      <h3 className="text-[11px] font-medium">{menu.title}</h3>
      {menu.content.map((items, index) => (
        <p key={index} className="text-[10px] font-extralight mt-3">
          {items}
        </p>
      ))}
    </section>
  );
}
