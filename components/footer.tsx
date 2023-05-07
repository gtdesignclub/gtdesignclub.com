import { SocialEntry } from "@/utils/types";
import Link from "next/link";
import {
    IoLogoDiscord,
    IoLogoFacebook,
    IoLogoInstagram,
    IoMail,
} from "react-icons/io5";

type Props = {
  socials: SocialEntry[];
};

const Footer = ({ socials }: Props) => {
  const iconSize = 30;
  const facebook = socials.find((s) => s.platform.toLowerCase() === "facebook");
  const insta = socials.find((s) => s.platform.toLowerCase() === "instagram");
  const discord = socials.find((s) => s.platform.toLowerCase() === "discord");
  const email = socials.find((s) => s.platform.toLowerCase() === "email");

  return (
    <>
      <button className="col mx-auto mt-12 mb-16 px-8 py-3 border border-primary rounded-md">
        <span className="font-bold">Suggestion Form</span>What would you like to
        see?
      </button>
      <div className="row justify-center gap-3 mb-10">
        {facebook && (
          <Link target="_blank" href={facebook?.link}>
            <IoLogoFacebook size={iconSize} />
          </Link>
        )}
        {insta && (
          <Link target="_blank" href={insta?.link}>
            <IoLogoInstagram size={iconSize} />
          </Link>
        )}
        {discord && (
          <Link target="_blank" href={discord?.link}>
            <IoLogoDiscord size={iconSize} />
          </Link>
        )}
        {email && (
          <Link href={`mailto:${email?.link}`}>
            <IoMail size={iconSize} />
          </Link>
        )}
      </div>
    </>
  );
};
export default Footer;
