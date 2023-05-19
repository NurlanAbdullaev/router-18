import React from "react";
import { Route, Routes } from "react-router-dom";
import { Courses } from "../conponents/Courses";
import { Materials } from "./../conponents/material/Materials";
import { MaterialDetail } from "../conponents/material/MaterialDetail";
import { Students } from "../conponents/Coursers/Students";
import { Retting } from "../conponents/Coursers/Retting";
import { Late } from "../conponents/material/Late";
import { Waiting } from "../conponents/material/Waiting";
import { Submited } from "../conponents/material/Submitted";
import { Anouncements } from "../conponents/anoutsement/Anouncements";
import { Schedule } from "../conponents/shedule/Schedule";
import { Notifications } from "../conponents/notification/Notifications";
import { CartName } from "../conponents/Coursers/CartName";

export const Rout = () => {
  return (
    <>
      <Routes>
        <Route path="/courses" element={<Courses />}>
          <Route path="/courses/material" element={<Materials />} />
          <Route path="/courses/material/:id" element={<MaterialDetail />}>
            <Route path="late" element={<Late />} />
            <Route path="waiting" element={<Waiting />} />
            <Route path="submitted" element={<Submited />} />
          </Route>
          <Route path="/courses/student" element={<Students />}>
            <Route path=":id/details" element={<CartName />} />
          </Route>

          <Route path="/courses/rating" element={<Retting />} />
        </Route>
        <Route path="/anouncements" element={<Anouncements />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </>
  );
};
