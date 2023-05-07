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
  className?: string;
  color?: string;
};

const SocialButtons = ({ socials, className, color }: Props) => {
  const iconSize = 30;
  const facebook = socials.find((s) => s.platform.toLowerCase() === "facebook");
  const insta = socials.find((s) => s.platform.toLowerCase() === "instagram");
  const discord = socials.find((s) => s.platform.toLowerCase() === "discord");
  const email = socials.find((s) => s.platform.toLowerCase() === "email");
  return (
    <>
      <div className={`${className} social row justify-center gap-3`}>
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
export default SocialButtons;
