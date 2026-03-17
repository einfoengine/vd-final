import Image from "next/image";

interface TargetAudienceItem {
  title: string;
  description: string;
  icon: string;
}

interface ServeCardProps {
  items: TargetAudienceItem[];
}

export default function ServeCard({ items }: ServeCardProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <div key={index} className="p-6 rounded-2xl bg-white">
          <Image src={item.icon} alt={item.title} width={70} height={70} />
          <h4 className="mt-5">{item.title}</h4>
          <p className="my-4">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
