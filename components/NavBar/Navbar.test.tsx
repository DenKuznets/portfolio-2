import { render, screen } from "@testing-library/react";
import NavBar, { NAVBAR_TESTIDS } from "./NavBar";
import "@testing-library/jest-dom";

test("renders correctly", () => {
  render(<NavBar />);
  const container = screen.getByTestId(NAVBAR_TESTIDS.NAVBAR_CONTAINER);
  expect(container).toBeInTheDocument();
  // const listItems = screen.getByTestId('')
});
