import { SocialEntry } from "@/utils/types";
import { Marko_One } from "next/font/google";
import Image from "next/image";
import SocialButtons from "./socials";

const markoOne = Marko_One({ weight: "400", subsets: ["latin"] });

type Props = {
  socials: SocialEntry[];
};

const Header = ({ socials }: Props) => {
  return (
    <>
      <div
        id="headerContainer"
        className="row justify-center items-center lg:justify-start"
      >
        <div id="headerBrand" className="row">
          <div className="relative w-8 h-8 lg:w-12 lg:h-12">
            <Image src="/logo.svg" alt="GT Design Club" fill />
          </div>
          <span className={`${markoOne.className} pl-2 text-lg lg:text-xl`}>
            design club
          </span>
        </div>
        <SocialButtons
          className="hidden md:row ml-auto dark"
          socials={socials}
          color="#aaaaaa"
        />
      </div>
    </>
  );
};

export default Header;
