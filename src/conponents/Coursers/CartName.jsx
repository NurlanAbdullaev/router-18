import React from "react";
import { Outlet, useParams } from "react-router-dom";

export const material = [
  {
    title: "Student Name ",
    id: "1",
  },
  {
    title: "Student Name ",
    id: "2",
  },
];

export const CartName = () => {
  const { id } = useParams();
  return (
    <>
      {material.map((el) => {
        return (
          <div>
            {el.id === id && (
              <div>
                <h1>
                  {el.title} - {el.id}
                </h1>
              </div>
            )}
          </div>
        );
      })}
      <Outlet />
    </>
  );
};
