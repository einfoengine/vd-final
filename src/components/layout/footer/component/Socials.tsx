import { socialMediaLinks } from "@/data/socials";
import Link from "next/link";

export default function Socials() {
  return (
    <>
      {socialMediaLinks.map(({ id, href, label, icon: Icon }) => (
        <Link
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-h5 w-11 h-11 flex items-center justify-center bg-theme/5 text-theme rounded-full hover:bg-theme hover:text-white transition-colors duration-300"
        >
          <Icon />
          <span className="sr-only">{`Visit our ${label} page`}</span>
        </Link>
      ))}
    </>
  );
}
