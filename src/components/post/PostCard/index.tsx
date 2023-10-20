"use client";

import Image from "next/image";
import React from "react";

import styled from "styled-components";

interface Props {
  title: string;
  date: string;
  category: string;
  description: string;
  imgUrl: string;
}

const PostCard = ({ title, date, category, description, imgUrl }: Props) => {
  return (
    <PostCardWrapper>
      <ImgBox>
        <Image
          src={imgUrl}
          fill
          alt="Thumbnail-Img"
          objectFit="contain"
          sizes="300px"
        />
      </ImgBox>

      <InfoBox>
        <Title>{title}</Title>
        <Descrioption>{description}</Descrioption>
        <Date>{date}</Date>
      </InfoBox>
    </PostCardWrapper>
  );
};

export default PostCard;

const PostCardWrapper = styled.li`
  width: 100%;
  height: 18rem;
  display: flex;
  border-bottom: 1px solid #eaeaea;
  border-top: 1px solid #eaeaea;
`;

const ImgBox = styled.div`
  width: 15rem;
  height: 15rem;
  position: relative;
  margin-top: 1.5rem;
  background-color: #191919;
  border-radius: 1rem;
`;

const InfoBox = styled.div`
  width: 37rem;
  height: 100%;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: rgb(51, 61, 75);
`;

const Descrioption = styled.h4`
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 2rem;
  color: rgb(78, 89, 104);
`;

const Date = styled.h4`
  font-size: 0.8rem;
  font-weight: 400;
  margin-top: 2rem;
  color: rgb(139, 149, 161);
`;
