import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("it assesses the true", () => {
  expect(1 + 1).toEqual(2);
});

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/meow/i);
  expect(linkElement).toBeInTheDocument();
});
