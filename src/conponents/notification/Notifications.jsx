import React from "react";
import { styled } from "styled-components";

export const Notifications = () => {
  return (
    <Container>
      notifications Page
      <Button>Go to Notifications Page</Button>
    </Container>
  );
};
const Container = styled.div`
  margin-top: -600px;
`;
const Button = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 12px;
  background-color: green;
  color: #fff;

  border: none;
  margin-left: 10px;
`;
