import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import tw, { styled } from "twin.macro";
import Footer from "./footer";
import Header from "./header";

const Content = styled.main`
  ${tw`w-full lg:w-4/5 xl:w-2/3 mx-auto`}
`;

const Hero = styled.div`
  ${tw`w-full flex flex-col items-center md:h-3/5 flex flex-col`}
`;

const Title = styled.h1`
  ${tw`text-xl mt-8 mb-6 md:text-4xl text-black font-bold font-body`}
`;

const Text = styled.p`
  ${tw`text-base text-black font-normal font-body`}
`;

const Section = styled.p`
  ${tw`text-base text-black font-bold font-body`}
`;

const SectionContainer = styled.div`
  ${tw`flex text-center`}
`;

const Layout = ({ children }) => {
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
    }
  `);
  return (
    <>
      <div className="max-w-full mx-auto bg-white p-8">
        <Header />
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
          </Hero>
        </div>
        <Content>{children}</Content>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
