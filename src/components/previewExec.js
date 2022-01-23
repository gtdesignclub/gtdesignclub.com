import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import tw, { css, styled } from "twin.macro";

const Container = styled.div`
  ${tw`flex flex-col items-center mb-8`}
`;

const dynamicStyle = ({ margin }) =>
  css`
    margin: ${margin};
  `;

const Headshot = styled(GatsbyImage)`
  ${dynamicStyle}
`;

const HeadshotContainer = styled.div`
  ${tw`w-48 h-48 relative overflow-hidden rounded-[50%] mb-2.5`}
`;

const Description = styled.div`
  ${tw`rounded-md text-center bg-[#333] px-14 py-2.5`}
`;

const Name = styled.p`
  ${tw`text-white text-lg font-bold mb-[5px]`}
`;

const Major = styled.p`
  ${tw`text-white text-xs font-light mb-[15px]`}
`;

const Position = styled.p`
  ${tw`text-white text-sm text-base`}
`;

const PreviewExec = ({ exec }) => {
  const image = exec.photo ? getImage(exec.photo) : null;
  const name = exec.name;
  const position = exec.position;
  const major = exec.major;

  const margins = {
    lee: "0 0 0 -5px",
    hou: "0 0 0 -30px",
    dhingra: "",
    szmukler: "",
    kingsley: "-50px 0 0 0",
    zhang: "",
  };
  const marginClass = margins[exec.name.split(" ")[1].toLowerCase()];

  return (
    <Container>
      {image && (
        <HeadshotContainer>
          <Headshot
            margin={marginClass}
            alt={name}
            title={name}
            image={image}
          />
        </HeadshotContainer>
      )}
      <Description>
        <Name>{name}</Name>
        <Major>{major}</Major>
        <Position>{position}</Position>
      </Description>
    </Container>
  );
};

export default PreviewExec;
