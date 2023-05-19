import React from "react";
import { material } from "./Materials";
import { Link, Outlet, useParams } from "react-router-dom";
import { styled } from "styled-components";

export const MaterialDetail = () => {
  const params = useParams();
  const materialss = material.find((el) => el.id === params.id);

  return (
    <>
      <div>
        {<h1>{materialss.title}</h1>}
        <MiniContainer>
          <NmaeLink to="late">Late</NmaeLink>
          <NmaeLink to="waiting">Waiting</NmaeLink>
          <NmaeLink to="submitted">Submited</NmaeLink>
        </MiniContainer>
      </div>
      <Outlet />
    </>
  );
};
const NmaeLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;
const MiniContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 900px;
  height: 60px;
  background-color: green;
  margin-right: 1px;
  margin: auto;
`;
