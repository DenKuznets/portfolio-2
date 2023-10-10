import { render, screen } from "@testing-library/react";
import NavBar, { navbar_testids } from "./NavBar";
import "@testing-library/jest-dom";
import text from "../../utils/text";

test("renders correctly", () => {
  render(<NavBar />);
  const container = screen.getByTestId(navbar_testids.navbar_container);
  const list = screen.getByTestId(navbar_testids.navbar_list);
  const listItems = screen.getAllByTestId(navbar_testids.nabar_list_item);
  expect(container).toBeInTheDocument();
  expect(list).toBeInTheDocument();
  expect(listItems).toHaveLength(Object.keys(text.header.nav).length);
});

test("renders navbar unchanged", () => {
  const { container } = render(<NavBar />);
  expect(container).toMatchSnapshot();
});
