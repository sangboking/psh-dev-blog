"use client";

import styled from "styled-components";

import Category from "@/components/home/Category";
import PostList from "@/components/home/PostList";

export default function Home() {
  return (
    <HomeWrapper>
      <ContentBox>
        <Category />

        <PostList />
      </ContentBox>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const ContentBox = styled.main`
  width: 100%;
  max-width: 1140px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-top: 5rem;
`;
