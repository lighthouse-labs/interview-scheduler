import { render, fireEvent, waitForElement } from "@testing-library/react";
import Appointment from "components/Appointment";
import React from 'react';



describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });

  it("defaults to Monday and changes the schedule when a new day is selected", () => {
    const { getByText } = render(<Appointment />);

    
      return waitForElement(() => getByText("Monday")).then(() => {
        fireEvent.click(getByText("Tuesday"));
        expect(getByText("Leopold Silvers")).toBeInTheDocument();
      });
    });

  it("does something else it is supposed to do", () => {
    // ...
  });
});