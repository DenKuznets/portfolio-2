import { render, screen } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom";

test("renders correctly", () => {
  render(<Header />);
  const logoImage = screen.getByAltText('html5 and hammer image');
  const navbar = screen.getByRole('navigation');
  expect(logoImage).toBeInTheDocument();
  expect(navbar).toBeInTheDocument();
});

// test("renders HEADER unchanged", () => {
//   const { container } = render(<Header />);
//   expect(container).toMatchSnapshot();
// });
