import { Link } from "gatsby";
import React from "react";
import tw, { styled } from "twin.macro";
import Discord from "../icons/discord.svg";
import Facebook from "../icons/facebook.svg";
import Instagram from "../icons/instagram.svg";
import Mail from "../icons/mail.svg";
import logo from "../images/logo-text.png";

const FlexContainer = styled.div`
  ${tw`flex flex-row flex-nowrap justify-center items-center sm:justify-between`}
`;

const SocialContainer = styled.div`
  ${tw`hidden sm:flex flex-row flex-nowrap justify-between items-center`}
`;

const LogoLink = styled(Link)`
  ${tw`no-underline shadow-none hover:bg-transparent`};
`;

const LogoImage = styled.img`
  ${tw`m-auto w-8/12 sm:w-4/5`};
`;

const SocialLink = styled("a")`
  ${tw`no-underline shadow-none mx-2`}
`;

const Header = () => (
  <div>
    <FlexContainer>
      <LogoLink to="/">
        <LogoImage src={logo} alt="GT Design Club" />
      </LogoLink>
      <SocialContainer>
        <SocialLink href="https://facebook.com/gtdesignclub">
          <Facebook />
        </SocialLink>
        <SocialLink href="https://instagram.com/gtdesignclub">
          <Instagram />
        </SocialLink>
        <SocialLink href="https://discord.gg/U8dwwa6BSF">
          <Discord />
        </SocialLink>
        <SocialLink href="mailto:designclubatgt@gmail.com">
          <Mail />
        </SocialLink>
      </SocialContainer>
    </FlexContainer>
  </div>
);

export default Header;
