// import { render, screen } from "@testing-library/react";
// import Header, { header_testids } from "./Header";
// import "@testing-library/jest-dom";
// import { navbar_testids } from "../NavBar/NavBar";

// test("renders correctly", () => {
//   render(<Header />);
//   const container = screen.getByTestId(header_testids.header_container);
//   const logoImage = screen.getByTestId(header_testids.header_logo_image);
//   const logoText = screen.getByTestId(header_testids.header_logo_text);
//   const navbar = screen.getByTestId(navbar_testids.navbar_container);
//   expect(container).toBeInTheDocument();
//   expect(logoImage).toBeInTheDocument();
//   expect(logoText).toBeInTheDocument();
//   expect(navbar).toBeInTheDocument();
// });

// test("renders HEADER unchanged", () => {
//   const { container } = render(<Header />);
//   expect(container).toMatchSnapshot();
// });
