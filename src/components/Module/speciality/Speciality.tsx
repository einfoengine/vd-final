"use client";

import { specialityData } from "@/data/specialityData";
import { SpecialityItem } from "./SpecialityItem";

export const Speciality = () => {
  return (
    <div className="nt-speciality">
      <div className="max-w-7xl mx-auto mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {specialityData.map((item, index) => (
            <SpecialityItem key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
