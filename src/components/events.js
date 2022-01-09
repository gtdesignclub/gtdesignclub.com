import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import tw, { styled } from "twin.macro";
import PreviewEvent from "./previewEvent";

// const Container = styled.div`
//   ${tw`px-20 pt-16 pb-28`}
// `;

const Title = styled.h1`
  ${tw`font-header text-black text-xl mt-8 mb-4`}
`;

const Events = () => {
  const events = useStaticQuery(graphql`
    query {
      allContentfulEvent(
        filter: { contentful_id: { eq: "7zoqHr4r3kwgvoA5XgsA21" } }
      ) {
        edges {
          node {
            date
            name
            instagramLink
            description {
              description
            }
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
    <div>
      <Title>Upcoming Events</Title>
      <PreviewEvent event={events.allContentfulEvent.edges[0].node} />
    </div>
  );
};

export default Events;
