import { GatsbyImage, getImage } from "gatsby-plugin-image";
import moment from "moment";
import React from "react";
import tw, { styled } from "twin.macro";

const Image = styled(GatsbyImage)`
  ${tw`rounded-sm border border-slate w-4/5 shadow-lg sm:w-96 sm:mr-3`}
`;

const DetailsContainer = styled.div`
  ${tw`rounded-sm border border-slate p-2 flex flex-col items-center mt-4 
      sm:items-start sm:p-10 sm:mt-0 sm:w-full`}
`;

const Title = styled.h1`
  ${tw`text-center font-body font-bold text-lg sm:text-left sm:text-2xl`}
`;

const DateContainer = styled.div`
  ${tw`flex flex-col items-center mb-2 sm:items-start sm:w-1/4 sm:mr-5`}
`;

const DayWeek = styled.p`
  ${tw`w-[fit-content] font-bold text-xs text-transform: uppercase 
      text-[#AAA] sm:text-lg`}
`;

const DayMonth = styled.p`
  ${tw`w-[fit-content] font-bold text-2xl sm:text-3xl`}
`;

const Description = styled.p`
  ${tw`w-[fit-content] sm:text-xl`}
`;

const SocialButton = styled("a")`
  ${tw`bg-[#4A4A4A] w-[fit-content] inline-block text-white 
      font-bold text-xs px-9 py-2 mt-5 rounded-sm
      sm:text-lg sm:rounded-md sm:w-4/12 sm:text-center first:mr-3`}
`;

const FlexContainer = styled.div`
  ${tw`flex flex-col mt-2 items-center sm:flex-row sm:items-start`}
`;

const PreviewEvent = ({ event }) => {
  const image = event.photo ? getImage(event.photo) : null;
  const date = event.date;
  const dayWeek = moment(date).format("dddd");
  const dayMonth = moment(date).format("MM.DD");
  const text = event.description.description.split("\n");

  return (
    <div css={tw`sm:flex`}>
      {image && (
        <div className="flex flex-col items-center">
          <Image alt={event.name} title={event.name} image={image} />
        </div>
      )}
      <DetailsContainer>
        <Title>{event.name}</Title>
        <FlexContainer>
          <DateContainer>
            <DayWeek>{dayWeek}</DayWeek>
            <DayMonth>{dayMonth}</DayMonth>
          </DateContainer>
          <div>
            {text.map((val, i) => (
              <Description key={i}>{val}</Description>
            ))}
          </div>
        </FlexContainer>
        <FlexContainer css={tw`w-full justify-center`}>
          {event.instagramLink && (
            <SocialButton href={event.instagramLink}>Instagram</SocialButton>
          )}
          {event.facebookLink && (
            <SocialButton href={event.facebookLink} css={tw`bg-slate`}>
              Facebook
            </SocialButton>
          )}
        </FlexContainer>
      </DetailsContainer>
    </div>
  );
};

export default PreviewEvent;
