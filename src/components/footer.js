import { graphql, Link, useStaticQuery } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react";
import tw, { styled } from "twin.macro";
import Discord from "../icons/discord.svg";
import Facebook from "../icons/facebook.svg";
import Instagram from "../icons/instagram.svg";
import Mail from "../icons/mail.svg";
import gtLogo from "../images/logo-gt.png";
import logo from "../images/logo-text-light.png";

const Container = styled.div`
  ${tw`flex flex-col justify-center items-start bg-slate p-4`}
`;

const SocialContainer = styled.div`
  ${tw`flex items-center justify-end`}
`;

const FlexRow = styled.div`
  ${tw`w-full flex items-start justify-between mt-4 first:mt-0 first:items-center`}
`;

const LogoLink = styled(Link)`
  ${tw`no-underline shadow-none hover:bg-transparent`};
`;

const LogoImage = styled.img`
  ${tw`w-24 sm:w-4/5`};
`;

const SocialLink = styled("a")`
  ${tw`no-underline shadow-none mx-1 last:mr-0`}
`;

const SiteMap = styled.div`
  ${tw`flex flex-col`}
`;

const SiteLink = styled(AnchorLink)`
  ${tw`text-white text-xs font-light`}
`;

const SubscribeContainer = styled.div`
  ${tw`flex flex-col w-6/12`}
`;

const SubscribeButton = styled("a")`
  ${tw`bg-white rounded-sm text-black text-xs font-bold text-center py-1 mt-1`}
`;

const Footer = () => {
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
  const newsletter = links.allContentfulLink.edges.find(
    (el) => el.node.platform.toLowerCase() === "newsletter"
  ).link;

  return (
    <Container>
      <FlexRow>
        <LogoLink to="/">
          <LogoImage src={logo} alt="GT Design Club" />
        </LogoLink>
        <a href="https://gatech.edu">
          <LogoImage src={gtLogo} alt="Georgia Tech" />
        </a>
        <SocialContainer>
          <SocialLink href={facebook}>
            <Facebook className="w-4" />
          </SocialLink>
          <SocialLink href={instagram}>
            <Instagram className="w-4" />
          </SocialLink>
          <SocialLink href={discord}>
            <Discord className="w-4" />
          </SocialLink>
          <SocialLink href={"mailto:" + email}>
            <Mail className="w-4" />
          </SocialLink>
        </SocialContainer>
      </FlexRow>
      <FlexRow>
        <SiteMap>
          <p className="text-white text-sm font-bold">Design Club</p>
          <SiteLink to="/#about" title="About"></SiteLink>
          <SiteLink to="/#events" title="Events"></SiteLink>
          <SiteLink to="/#execs" title="Exec Board"></SiteLink>
        </SiteMap>
        <SubscribeContainer>
          <p className="text-white text-sm font-bold">Subscribe</p>
          <p className="text-white text-xs font-light">
            Sign up for our weekly newsletter for more info on meetings and
            resources!
          </p>
          <SubscribeButton href={newsletter}>Subscribe</SubscribeButton>
        </SubscribeContainer>
      </FlexRow>
    </Container>
  );
};

export default Footer;
