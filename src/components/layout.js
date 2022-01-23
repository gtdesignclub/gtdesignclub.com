import React from "react";
import tw, { styled } from "twin.macro";
import About from "./about";
import Footer from "./footer";
import Header from "./header";

const Content = styled.main`
  ${tw`flex flex-col mx-auto sm:mx-0`}
`;

const Layout = ({ children }) => {
  return (
    <>
      <div css={tw`max-w-full mx-auto bg-white p-8 sm:p-28`}>
        <Header />
        <About />
        <Content>{children}</Content>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
