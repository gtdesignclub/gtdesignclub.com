import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import tw, { styled } from "twin.macro";
import Header from "./header";

// import Footer from "./footer";

const Content = styled.main`
  ${tw`px-6 w-full lg:w-4/5 xl:w-2/3 mx-auto`}
`;

const Hero = styled.div`
  ${tw`w-full md:max-w-md xl:max-w-lg md:h-3/5 flex items-center`}
`;

const Title = styled.h1`
  ${tw`text-3xl md:text-4xl text-black font-bold font-body`}
`;

const Description = styled.p`
  ${tw`text-base text-black font-normal font-body`}
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
    <div className="container">
      <Header />
      <Hero>
        <Title>{about.allContentfulAbout.edges.node.hero}</Title>
      </Hero>
      <Content>{children}</Content>
    </div>
  );
};

export default Layout;
