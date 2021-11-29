import React from "react";
import { GlobalStyles } from "twin.macro";
import { Helmet } from "react-helmet";

import Header from "./header";
import Footer from "./footer";

const Content = styled.main`
  ${tw`px-6 w-full lg:w-4/5 xl:w-2/3 mx-auto`}
`;

const Layout = ({ children }) => (
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
    <Header />
    <Content>{children}</Content>
    <Footer />
  </>
);

export default Layout;
