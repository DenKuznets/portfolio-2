import { render, screen } from "@testing-library/react";
import NavBar, {links} from "./NavBar";
import "@testing-library/jest-dom";


test("renders correctly", () => {
  render(<NavBar />);
  const listItems = screen.getAllByRole('listitem');
  expect(listItems).toHaveLength(links.length);
});

test("renders navbar unchanged", () => {
  const { container } = render(<NavBar />);
  expect(container).toMatchSnapshot();
});
