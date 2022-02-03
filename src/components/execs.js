import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import tw, { styled } from "twin.macro";
import PreviewExec from "./previewExec";

const Title = styled.h1`
  ${tw`font-header text-xl mt-8 mb-4 sm:text-3xl`}
`;

const Execs = () => {
  const officers = useStaticQuery(graphql`
    query {
      allContentfulOfficer(sort: { fields: [order] }) {
        edges {
          node {
            major
            name
            position
            photo {
              gatsbyImageData(
                placeholder: BLURRED
                resizingBehavior: FILL
                formats: AUTO
              )
            }
          }
        }
      }
    }
  `);

  return (
    <div id="execs" css={tw`mt-28 mb-16`}>
      <Title>Exec Board</Title>
      {officers && (
        <div className="mt-8 sm:grid sm:grid-cols-exec">
          {officers.allContentfulOfficer.edges.map((exec, i) => {
            return <PreviewExec key={i} exec={exec.node} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Execs;
