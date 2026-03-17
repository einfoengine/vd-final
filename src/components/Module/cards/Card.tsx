"use client";

import Image from "next/image";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

export default function Card({ icon, title, description }: CardProps) {
  return (
    <div className="flex flex-col items-start p-6 rounded-3xl bg-white">
      
      <Image src={icon} alt={title} width={70} height={70} />
      <div>
        <h5 className="my-6">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}
