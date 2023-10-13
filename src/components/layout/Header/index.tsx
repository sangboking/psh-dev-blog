"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <ContentBox>
        <Link href="/">
          <LogoBox>
            <Image
              src="/images/Logo.png"
              alt="Logo-Img"
              width={60}
              height={60}
            />
            <Title>psh</Title>
            <SemiTitle>tech</SemiTitle>
          </LogoBox>
        </Link>
      </ContentBox>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  width: 100%;
  height: 5.5rem;
  background-color: #fff;
  position: sticky;
  top: 0;
  left: 0;
  border-bottom: 1.5px solid #eaeaea;
  z-index: 10;
`;

const ContentBox = styled.div`
  width: 100%;
  max-width: 1140px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: #191919;
`;

const SemiTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 500;
  color: #191919;
  margin-left: 0.3rem;
`;
