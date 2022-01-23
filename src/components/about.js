import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import tw, { styled } from "twin.macro";

const Hero = styled.div`
  ${tw`w-full flex flex-col items-center sm:items-start`}
`;

const Title = styled.h1`
  ${tw`mt-8 mb-6 text-xl font-bold font-body sm:text-4xl`}
`;

const Text = styled.p`
  ${tw`text-base font-normal font-body`}
`;

const Section = styled.p`
  ${tw`text-base font-bold font-body`}
`;

const SectionContainer = styled.div`
  ${tw`flex text-center sm:text-left sm:max-w-2xl`}
`;

const LinkButton = styled("a")`
  ${tw`hidden font-bold rounded-md py-4 px-6 sm:inline-block sm:mr-3
    hover:drop-shadow-lg transition-all duration-300 ease-out`}
`;

const About = () => {
  const about = useStaticQuery(graphql`
    query {
      allContentfulAbout {
        edges {
          node {
            hero
            description
            dateTime
            location
          }
        }
      }
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
  const discord = about.allContentfulLink.edges.find(
    (el) => el.node.platform.toLowerCase() === "discord"
  ).node.link;
  const newsletter = about.allContentfulLink.edges.find(
    (el) => el.node.platform.toLowerCase() === "newsletter"
  ).node.link;

  return (
    <div id="about">
      <Hero>
        <SectionContainer className="flex-col mb-6">
          <Title>{about.allContentfulAbout.edges[0].node.hero}</Title>
          <Text>{about.allContentfulAbout.edges[0].node.description}</Text>
        </SectionContainer>
        <SectionContainer>
          <Section>When:&nbsp;</Section>
          <Text>{about.allContentfulAbout.edges[0].node.dateTime}</Text>
        </SectionContainer>
        <SectionContainer>
          <Section>Where:&nbsp;</Section>
          <Text>{about.allContentfulAbout.edges[0].node.location}</Text>
        </SectionContainer>
        <div className="mt-4">
          <LinkButton
            href={discord}
            css={tw`bg-slate text-white hover:bg-white hover:border hover:border-solid hover:border-slate hover:text-slate`}
          >
            Join us on Discord
          </LinkButton>
          <LinkButton
            href={newsletter}
            css={tw`bg-white border border-solid border-slate hover:bg-slate hover:text-white`}
          >
            Our Newsletter
          </LinkButton>
        </div>
      </Hero>
    </div>
  );
};

export default About;
