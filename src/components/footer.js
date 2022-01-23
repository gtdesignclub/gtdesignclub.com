import { graphql, Link, useStaticQuery } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react";
import tw, { styled } from "twin.macro";
import Discord from "../icons/discord.svg";
import Facebook from "../icons/facebook.svg";
import Instagram from "../icons/instagram.svg";
import Mail from "../icons/mail.svg";
import gtLogoLg from "../images/logo-gt-lg.png";
import gtLogo from "../images/logo-gt.png";
import logoLg from "../images/logo-text-light-lg.png";
import logo from "../images/logo-text-light.png";

const Container = styled.div`
  ${tw`flex flex-col justify-center items-start bg-slate p-4 sm:p-12`}
`;

const SocialContainer = styled.div`
  ${tw`flex items-center justify-end`}
`;

const FlexRow = styled.div`
  ${tw`w-full flex items-start justify-between mt-4 first:mt-0 sm:mt-0`}
`;

const LogoLink = styled(Link)`
  ${tw`no-underline shadow-none hover:bg-transparent`};
`;

const LogoImage = styled.img`
  ${tw`w-24 sm:w-4/5`};
`;

const SocialLink = styled("a")`
  ${tw`no-underline shadow-none mx-1 last:mr-0 sm:mx-0`}
`;

const SiteMap = styled.div`
  ${tw`flex flex-col`}
`;

const SiteLink = styled(AnchorLink)`
  ${tw`text-white text-xs font-light sm:text-base`}
`;

const SubscribeContainer = styled.div`
  ${tw`flex flex-col w-6/12`}
`;

const SubscribeButton = styled("a")`
  ${tw`bg-white rounded-sm text-xs font-bold text-center py-1 
      mt-1 sm:text-lg`}
`;

const SectionTitle = styled.p`
  ${tw`text-white text-sm font-bold sm:text-lg`}
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
  ).node.link;
  const instagram = links.allContentfulLink.edges.find(
    (el) => el.node.platform.toLowerCase() === "instagram"
  ).node.link;
  const discord = links.allContentfulLink.edges.find(
    (el) => el.node.platform.toLowerCase() === "discord"
  ).node.link;
  const email = links.allContentfulLink.edges.find(
    (el) => el.node.platform.toLowerCase() === "email"
  ).node.link;
  const newsletter = links.allContentfulLink.edges.find(
    (el) => el.node.platform.toLowerCase() === "newsletter"
  ).node.link;

  return (
    <Container css={tw`sm:flex-row sm:items-start`}>
      <FlexRow css={tw`items-center sm:flex-col sm:items-start sm:w-1/2`}>
        <LogoLink to="/">
          <LogoImage src={logo} alt="GT Design Club" css={tw`sm:hidden`} />
        </LogoLink>
        <a href="https://gatech.edu">
          <LogoImage src={gtLogo} alt="Georgia Tech" css={tw`sm:hidden`} />
        </a>
        <div css={tw`hidden sm:flex sm:items-center sm:mb-6`}>
          <LogoLink to="/">
            <LogoImage
              src={logoLg}
              alt="GT Design Club"
              css={tw`sm:w-48 sm:mr-8`}
            />
          </LogoLink>
          <a href="https://gatech.edu">
            <LogoImage src={gtLogoLg} alt="Georgia Tech" css={tw`sm:w-48`} />
          </a>
        </div>
        <div css={tw`sm:flex sm:flex-col`}>
          <SectionTitle css={tw`hidden sm:block sm:mb-2`}>
            Get in touch
          </SectionTitle>
          <SocialContainer>
            <SocialLink href={facebook}>
              <Facebook css={tw`w-4 sm:w-12 sm:ml-[-0.5rem]`} />
            </SocialLink>
            <SocialLink href={instagram}>
              <Instagram css={tw`w-4 sm:w-12 sm:ml-[-0.5rem]`} />
            </SocialLink>
            <SocialLink href={discord}>
              <Discord css={tw`w-4 sm:w-12 sm:ml-[-0.5rem]`} />
            </SocialLink>
            <SocialLink href={"mailto:" + email}>
              <Mail css={tw`w-4 sm:w-12 sm:ml-[-0.5rem]`} />
            </SocialLink>
          </SocialContainer>
        </div>
      </FlexRow>
      <FlexRow css={tw`sm:justify-around`}>
        <SiteMap>
          <SectionTitle>Design Club</SectionTitle>
          <SiteLink to="/#about" title="About"></SiteLink>
          <SiteLink to="/#events" title="Events"></SiteLink>
          <SiteLink to="/#execs" title="Exec Board"></SiteLink>
        </SiteMap>
        <SubscribeContainer>
          <SectionTitle>Subscribe</SectionTitle>
          <p css={tw`text-white text-xs font-light text-base`}>
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
