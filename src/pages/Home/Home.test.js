import { render, screen } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import Home from ".";

test("renders search input", () => {
  render(
    <Router>
      <Home />
    </Router>
  );
  const input = screen.getByPlaceholderText(/Search by character or planet/i);
  expect(input).toBeInTheDocument();
});
