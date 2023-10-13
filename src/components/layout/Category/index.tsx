"use client";
import React from "react";

import styled from "styled-components";

import { CATEGORY_LIST } from "@/constants/category";
import Link from "next/link";

const Category = () => {
  return (
    <CategoryWrapper>
      <Title>카테고리</Title>

      {CATEGORY_LIST.map((data) => (
        <Link key={data.id} href={data.link}>
          <CateogryBox>{data.name}</CateogryBox>
        </Link>
      ))}
    </CategoryWrapper>
  );
};

export default Category;

const CategoryWrapper = styled.div`
  width: 12rem;
  height: 23rem;
  overflow-y: auto;
`;

const Title = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-left: 0.5rem;
`;

const CateogryBox = styled.div`
  width: 9rem;
  height: 3rem;
  border-radius: 0.8rem;
  background-color: #eaeaea;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: 0.2s;
  color: #191919;

  &:hover {
    background-color: #2196f3;
    color: #fff;
  }
`;
