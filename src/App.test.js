import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders gracias react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Gracias/i);
  expect(linkElement).toBeInTheDocument();
});
