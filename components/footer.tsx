import { SocialEntry } from "@/utils/types";
import Link from "next/link";
import SocialButtons from "./socials";

type Props = {
  socials: SocialEntry[];
};

const Footer = ({ socials }: Props) => {
  const newsletter = socials.find(
    (s) => s.platform.toLowerCase() === "newsletter"
  );
  const suggestion = socials.find(
    (s) => s.platform.toLowerCase() === "suggestions"
  );

  return (
    <>
      {suggestion && (
        <Link
          id="suggestionButton"
          href={suggestion.link}
          target="_blank"
          className="col justify-center items-center w-max mx-auto mt-12 mb-16 px-8 lg:px-16 py-3 lg:py-5 button"
        >
          <span className="font-bold">Suggestion Form</span>What would you like
          to see?
        </Link>
      )}
      <SocialButtons className="mb-10 lg:hidden" socials={socials} />
      <div
        id="footerContainer"
        className="hidden lg:row items-start h-52 py-6 px-10 bg-primary text-white"
      >
        <div className="col w-3/12 h-full">
          <div className="row">
            <div className="col">
              <h2 className="mb-2">Get in touch</h2>
              <SocialButtons socials={socials} />
            </div>
          </div>
        </div>
        <div className="col w-3/12 h-full">
          <h2 className="mb-2">Design Club</h2>
          <ul className="col">
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#events">Events</Link>
            </li>
            <li>
              <Link href="#execs">Execs</Link>
            </li>
          </ul>
        </div>
        {newsletter && (
          <div className="col w-6/12 h-full">
            <h2 className="mb-2">Subscribe</h2>
            <p className="mb-3">
              Sign up for our weekly newsletter for more info on meetings and
              resources!
            </p>
            <Link
              className="w-fit px-16 py-2 button font-bold"
              href={newsletter.link}
            >
              Subscribe
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
export default Footer;
