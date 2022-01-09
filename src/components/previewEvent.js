import { GatsbyImage, getImage } from "gatsby-plugin-image";
import moment from "moment";
import React from "react";
import tw, { styled } from "twin.macro";

const Image = styled(GatsbyImage)`
  ${tw`rounded-sm w-4/5 shadow-lg`}
`;

const DetailsContainer = styled.div`
  ${tw`rounded-sm border border-black p-2 flex flex-col items-center mt-4`}
`;

const Title = styled.h1`
  ${tw`font-body font-bold text-black text-lg`}
`;

const DateContainer = styled.div`
  ${tw`flex flex-col items-center mb-2`}
`;

const Description = styled.p`
  ${tw``}
`;

const SocialButton = styled("a")`
  ${tw`bg-[#333] w-[fit-content] inline-block text-white font-bold text-xs px-9 py-2 mt-5 rounded-sm hover:bg-[#4A4A4A]`}
`;

const FlexContainer = styled.div`
  ${tw`flex flex-col mt-2 sm:flex-row`}
`;

// TODO: Find better layout for mobile
const PreviewEvent = ({ event }) => {
  const image = event.photo ? getImage(event.photo) : null;
  const date = event.date;
  const dayWeek = moment(date).format("dddd");
  const dayMonth = moment(date).format("MM.DD");
  const text = Object.assign({}, event.description.description.split("\n"));

  return (
    <div>
      <div className="flex flex-col items-center">
        {image && <Image alt={event.name} title={event.name} image={image} />}
      </div>
      <DetailsContainer>
        <Title>{event.name}</Title>
        <FlexContainer>
          <DateContainer>
            <p className="w-fit font-bold text-xs text-gray-400 text-transform: uppercase">
              {dayWeek}
            </p>
            <p className="w-fit font-bold text-2xl text-slate-700">
              {dayMonth}
            </p>
          </DateContainer>
          {Object.entries(text).map(([key, val]) =>
            val ? <Description>{val}</Description> : <br />
          )}
        </FlexContainer>
        {event.instagramLink && (
          <SocialButton href={event.instagramLink}>Instagram</SocialButton>
        )}
      </DetailsContainer>
    </div>
  );
};

export default PreviewEvent;
