import { graphql, useStaticQuery } from "gatsby";
import moment from "moment";
import React from "react";
import tw, { styled } from "twin.macro";
import PreviewEvent from "./previewEvent";

const Title = styled.h1`
  ${tw`font-header text-black text-xl mt-8 mb-4`}
`;

const Table = styled.table`
  ${tw`table-fixed border-collapse border border-black bg-white rounded-md mt-3`}
`;

const Row = styled.tr`
  ${tw`odd:bg-[#EDEDED] text-sm`}
`;

const Cell = styled.td`
  ${tw`p-1`}
`;
const Events = () => {
  const events = useStaticQuery(graphql`
    query {
      allContentfulEvent(sort: { fields: [date], order: [DESC] }) {
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
  let rows = events.allContentfulEvent.edges.slice(1);

  rows = Object.assign(
    {},
    rows.map((row) => {
      const date = moment(row.node.date).format("MM.DD");
      const name = row.node.name;
      const description = row.node.description.description;

      return { date: date, name: name, description: description };
    })
  );

  return (
    <div>
      <Title>Upcoming Events</Title>
      <PreviewEvent event={events.allContentfulEvent.edges[0].node} />
      <Table>
        <tbody>
          {Object.entries(rows).map(([key, val]) => (
            <Row>
              <Cell>{val.date}</Cell>
              <Cell>{val.name}</Cell>
              <Cell>{val.description}</Cell>
            </Row>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Events;
