"use client";

import Image from "next/image";

export default function Apart() {
  const differentiators = [
    {
      icon: "/assets/svg/team.svg",
      title: "Dedicated Teams",
      description:
        "We have 6 specialized teams working together: Operations, Strategy Development, Content Development, UI/UX Design, Development, and Growth & Management. Each team brings deep expertise to ensure comprehensive coverage of all your digital needs.",
    },
    {
      icon: "/assets/svg/uncompromised.svg",
      title: "Uncompromised Quality Control",
      description:
        "We maintain the highest standards in every aspect of our work. Our rigorous quality control processes ensure consistent excellence across all deliverables, from initial strategy to final execution and ongoing management.",
    },
    {
      icon: "/assets/svg/execution.svg",
      title: "Strategy, Content & Execution",
      description:
        "Our integrated approach covers the complete digital marketing lifecycle. From strategic planning and content creation to technical execution and performance management, we provide end-to-end solutions that deliver measurable results.",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-8 items-center">
      <div className="h-full rounded-3xl overflow-hidden">
        <Image
          src="/assets/team/team.webp"
          alt=""
          width="1000"
          height="1000"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-5">
        {differentiators.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start p-6 rounded-3xl bg-white"
          >
            <div className="flex items-center gap-5 mb-5">
              <Image src={item.icon} alt={item.title} width="70" height="70" />
              <h5>{item.title}</h5>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
