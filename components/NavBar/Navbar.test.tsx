import { render, screen } from "@testing-library/react";
import NavBar, { NAVBAR_TESTIDS } from "./NavBar";
import "@testing-library/jest-dom";
import text from "../../utils/text";

test("renders correctly", () => {
  render(<NavBar />);
  const container = screen.getByTestId(NAVBAR_TESTIDS.NAVBAR_CONTAINER);
  const list = screen.getByTestId(NAVBAR_TESTIDS.NAVBAR_LIST);
  const listItems = screen.getAllByTestId(NAVBAR_TESTIDS.NAVBAR_LIST_ITEM);
  expect(container).toBeInTheDocument();
  expect(list).toBeInTheDocument();
  expect(listItems).toHaveLength(Object.keys(text.header.nav).length);
});

test("renders navbar unchanged", () => {
  const { container } = render(<NavBar />);
  expect(container).toMatchSnapshot();
});
