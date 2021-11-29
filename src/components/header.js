import React from "react";
import tw, { styled } from "twin.macro";
import Link from "gatsby";
import logo from "../images/logo-text.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import discord from "../images/discord.png";
import mail from "../images/mail.png";

const FlexContainer = styled.div`
  ${tw`flex flex-row flex-nowrap justify-between px-6 pt-4 pb-6`}
`;

const Container = styled.div`
  ${tw``}
`;

const LogoLink = styled(Link)`
  ${tw`no-underline text-inherit shadow-none hover:bg-transparent`};
`;

const LogoImage = styled.img`
  ${tw`h-52 w-16 m-0`};
`;

const SocialLink = styled("a")`
  ${tw`no-underline shadow-none mx-1`}
`;

const SocialImage = styled.img`
  ${tw`h-8 w-8 m-0`};
`;

const Header = () => (
  <FlexContainer>
    <Container>
      <LogoLink to="/">
        <LogoImage src={logo} alt="GT Design Club" />
      </LogoLink>
    </Container>
    <Container>
      <SocialLink href="https://facebook.com/gtdesignclub">
        <SocialImage src={facebook} alt="Facebook" />
      </SocialLink>
      <SocialLink href="https://instagram.com/gtdesignclub">
        <SocialImage src={instagram} alt="Instagram" />
      </SocialLink>
      <SocialLink href="https://discord.gg/U8dwwa6BSF">
        <SocialImage src={discord} alt="Discord" />
      </SocialLink>
      <SocialLink href="mailto:designclubatgt@gmail.com">
        <SocialImage src={mail} alt="Email" />
      </SocialLink>
    </Container>
  </FlexContainer>
);

export default Header;
