"use client";

import React from "react";
import Link from "next/link";

import styled from "styled-components";

import PostCard from "@/components/post/PostCard";

import { allPosts } from "contentlayer/generated";

const PostList = () => {
  return (
    <PostListWrapper>
      <Title>PSH의 Tech 블로그😁</Title>

      <PostUl>
        {allPosts.map((data) => (
          <Link href={data.url} key={data.title}>
            <PostCard
              title={data.title}
              date={data.date}
              category={data.category}
              description={data.description}
              imgUrl={data.imgUrl}
            />
          </Link>
        ))}
      </PostUl>
    </PostListWrapper>
  );
};

export default PostList;

const PostListWrapper = styled.main`
  width: 57rem;
  height: fit-content;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

const PostUl = styled.ul`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
