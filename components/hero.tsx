import { AboutEntry, SocialEntry } from "@/utils/types";
import Link from "next/link";

type Props = AboutEntry & {
  socials: SocialEntry[];
};

const Hero = ({ hero, description, dateTime, location, socials }: Props) => {
  const discord = socials.find((s) => s.platform.toLowerCase() === "discord");
  const newsletter = socials.find((s) => s.platform.toLowerCase() === "email");

  return (
    <>
      <div id="heroContainer" className="mt-10">
        <h1 className="font-bold">{hero}</h1>
        <h2 className="mt-3">{description}</h2>
        <div className="mt-5">
          <h2>
            <span className="mr-2 font-bold">When:</span>
            {dateTime}
          </h2>
          <h2>
            <span className="mr-2 font-bold">Where:</span>
            {location}
          </h2>
        </div>
        <div className="mt-5">
          <Link
            target="_blank"
            href={discord?.link ?? ""}
            className="p-3 min-w-38 button button-primary"
          >
            Join us on Discord
          </Link>
          <Link
            href={newsletter?.link ?? ""}
            className="p-3 ml-2 min-w-38 button"
          >
            Our Newsletter
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
