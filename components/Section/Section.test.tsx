import { render, screen } from "@testing-library/react";
import Section, { section_testids } from "./Section";
import "@testing-library/jest-dom";
import { navbar_testids } from "../NavBar/NavBar";

test("renders correctly", () => {
  render(<Section projectId={1} />);
  const text = screen.getByTestId(section_testids.section_text);
  const image = screen.getByTestId(section_testids.section_image);
  expect(text).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});

test("renders Section unchanged", () => {
  const { container } = render(<Section projectId={1} />);
  expect(container).toMatchSnapshot();
});
