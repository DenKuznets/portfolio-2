import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import "@testing-library/jest-dom";
import text from "../../utils/text";

test("renders correctly", () => {
  render(<NavBar />);
  const listItems = screen.getAllByRole('listitem');
  expect(listItems).toHaveLength(Object.keys(text.header.nav).length);
});

test("renders navbar unchanged", () => {
  const { container } = render(<NavBar />);
  expect(container).toMatchSnapshot();
});
