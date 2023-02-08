import { render, screen } from "@testing-library/react";
import App from "../../App";

describe("Check the header component", () => {
  test("check de value of my header component", () => {
    render(<App />);
    const headerValue = screen.getByText("TodoInput");
    expect(headerValue).toHaveTextContent("TodoInput");
  });
});
