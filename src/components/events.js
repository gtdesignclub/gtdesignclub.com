import { graphql, useStaticQuery } from "gatsby";
import moment from "moment";
import React from "react";
import tw, { styled } from "twin.macro";
import PreviewEvent from "./previewEvent";

const Title = styled.h1`
  ${tw`font-header text-xl mt-8 mb-4 sm:text-3xl`}
`;

const Table = styled.table`
  ${tw`table-fixed border-collapse border border-slate bg-white rounded-md mt-3`}
`;

const Row = styled.tr`
  ${tw`odd:bg-[#EDEDED] text-sm sm:text-lg`}
`;

const Cell = styled.td`
  ${tw`p-1 sm:p-6`}
`;
const Events = () => {
  const events = useStaticQuery(graphql`
    query {
      allContentfulEvent(sort: { fields: [date], order: [DESC] }) {
        edges {
          node {
            id
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
      const id = row.node.id;
      const date = moment(row.node.date).format("MM.DD");
      const name = row.node.name;
      const description = row.node.description.description;

      return { id: id, date: date, name: name, description: description };
    })
  );

  return (
    <div id="events" css={tw`sm:mt-28`}>
      <Title>Upcoming Events</Title>
      <div css={tw`sm:flex sm:flex-col`}>
        <PreviewEvent event={events.allContentfulEvent.edges[0].node} />
        <Table>
          <tbody>
            {Object.entries(rows).map(([key, val]) => (
              <Row key={val.id}>
                <Cell css={tw`font-bold text-[#999]`}>{val.date}</Cell>
                <Cell css={tw`font-bold sm:w-1/4`}>{val.name}</Cell>
                <Cell>{val.description}</Cell>
              </Row>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Events;
