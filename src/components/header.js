import { graphql, Link, useStaticQuery } from "gatsby";
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

const Header = () => {
  const links = useStaticQuery(graphql`
    query {
      allContentfulLink {
        edges {
          node {
            platform
            link
          }
        }
      }
    }
  `);
  const facebook = links.allContentfulLink.edges.find(
    (el) => el.node.platform.toLowerCase() === "facebook"
  ).link;
  const instagram = links.allContentfulLink.edges.find(
    (el) => el.node.platform.toLowerCase() === "instagram"
  ).link;
  const discord = links.allContentfulLink.edges.find(
    (el) => el.node.platform.toLowerCase() === "discord"
  ).link;
  const email = links.allContentfulLink.edges.find(
    (el) => el.node.platform.toLowerCase() === "email"
  ).link;

  return (
    <div>
      <FlexContainer>
        <LogoLink to="/">
          <LogoImage src={logo} alt="GT Design Club" />
        </LogoLink>
        <SocialContainer>
          <SocialLink href={facebook}>
            <Facebook />
          </SocialLink>
          <SocialLink href={instagram}>
            <Instagram />
          </SocialLink>
          <SocialLink href={discord}>
            <Discord />
          </SocialLink>
          <SocialLink href={"mailto:" + email}>
            <Mail />
          </SocialLink>
        </SocialContainer>
      </FlexContainer>
    </div>
  );
};

export default Header;
