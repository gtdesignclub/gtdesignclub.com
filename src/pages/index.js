import React from "react";
import { Helmet } from "react-helmet";
import { GlobalStyles } from "twin.macro";
import Events from "../components/events";
import Execs from "../components/execs";
import Layout from "../components/layout";

const IndexPage = ({ data }) => {
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
              "GT, design, UX, club, college, university, graphic, recruiting, internship",
          },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <GlobalStyles />
      <Layout>
        <Events />
        <Execs />
      </Layout>
    </>
  );
};

export default IndexPage;
