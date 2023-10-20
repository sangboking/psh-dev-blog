"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import styled from "styled-components";

import { CATEGORY_LIST } from "@/constants/category";

const Category = () => {
  const categoryParams = useSearchParams()?.get("category");

  return (
    <CategoryWrapper>
      <Title>카테고리</Title>

      {CATEGORY_LIST.map((data) => (
        <Link key={data.id} href={data.link}>
          <CateogryBox
            $semiName={data.semiName}
            $categoryParams={categoryParams}
          >
            {data.name}
          </CateogryBox>
        </Link>
      ))}
    </CategoryWrapper>
  );
};

export default Category;

interface ICategoryBox {
  $semiName: string | null;
  $categoryParams: string | null;
}

const CategoryWrapper = styled.aside`
  width: 12rem;
  height: 23rem;
  overflow-y: auto;
  position: sticky;
  top: 10.6rem;
`;

const Title = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-left: 0.5rem;
`;

const CateogryBox = styled.div<ICategoryBox>`
  width: 9rem;
  height: 3rem;
  border-radius: 0.8rem;
  background-color: ${(props) =>
    props.$categoryParams === props.$semiName ? "#2196f3" : "#eaeaea"};
  color: ${(props) =>
    props.$categoryParams === props.$semiName ? "#fff" : "#191919"};
  display: flex;
  align-items: center;
  padding-left: 1rem;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #2196f3;
    color: #fff;
  }
`;
