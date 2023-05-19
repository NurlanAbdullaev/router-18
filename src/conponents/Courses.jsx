import React from "react";
import { Link, Outlet } from "react-router-dom";
import { styled } from "styled-components";

export const Courses = () => {
  return (
    <>
      <Container>
        <LinkName to="material">Materials</LinkName>
        <LinkName to="student">Students</LinkName>
        <LinkName to="rating">Ratings</LinkName>
      </Container>
      <Outlet />
    </>
  );
};
const LinkName = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const Container = styled.div`
  width: 1190px;
  height: 100px;
  background-color: #2b80e2;
  color: #fff;

  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  margin-top: -700px;
  margin-right: 1px;
`;
