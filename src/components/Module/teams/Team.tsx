import { teamData } from "@/data/team";
import Image from "next/image";

export default function Team() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {teamData.slice(0, 4).map((elm, i) => (
        <div key={i}>
          <div className="w-full overflow-hidden rounded-xl">
            <Image
              width={1000}
              height={1000}
              src={elm.image}
              alt={elm.name}
              className="w-full h-80 object-cover rounded-xl"
            />
          </div>

          <div className="mt-5">
            <h5>{elm.name}</h5>
            <p>{elm.position}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
