import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import tw, { GlobalStyles, styled } from "twin.macro";
import Events from "../components/events";
import Execs from "../components/execs";
import Layout from "../components/layout";

const SuggestionButton = styled("a")`
  ${tw`flex flex-col bg-white rounded-sm border border-solid 
      border-black text-black text-center py-2.5
      sm:w-96 sm:text-xl hover:bg-slate hover:text-white hover:drop-shadow-lg
      transition-all ease-out duration-300`}
`;

const IndexPage = ({ data }) => {
  const suggestionLink = useStaticQuery(graphql`
    query {
      allContentfulLink(
        filter: { contentful_id: { eq: "4lL8AVYDnRMBcFMnp3WMn3" } }
      ) {
        edges {
          node {
            link
          }
        }
      }
    }
  `);
  const link = suggestionLink.allContentfulLink.edges
    ? suggestionLink.allContentfulLink.edges[0].node.link
    : "";
  return (
    <>
      <Helmet
        title="GT Design Club"
        meta={[
          {
            name: "description",
            content: "The online home of Georgia Tech's Design Club",
          },
          {
            name: "keywords",
            content:
              "GT, georgia, tech, technology, design, UX, UI, UI/UX, club, college, university, graphic, recruiting, internship",
          },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <GlobalStyles />
      <Layout>
        <Events />
        <Execs />
        <div css={tw`sm:flex sm:items-center sm:m-auto`}>
          <SuggestionButton href={link}>
            <span className="font-bold">Suggestion Form</span>
            <span className="text-sm">What would you like to see?</span>
          </SuggestionButton>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
