interface cardProps {
  icon: string;
  title: string;
  content: string;
}

export default function Card({ icon, title, content }: cardProps) {
  return (
    <section className="flex flex-col justify-start gap-4 min-h-57">
      <img src={icon} alt={title} className="size-15" />
      <h3 className="text-2xl font-normal">{title}</h3>
      <p className="text-[14px] font-light">{content}</p>
    </section>
  );
}
