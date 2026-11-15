import { render, screen } from "@testing-library/react";
import App from "./App";

test("shows Hello World from the API", async () => {
  vi.stubGlobal(
    "fetch",
    vi.fn().mockResolvedValue({ ok: true, json: async () => ({ message: "Hello World" }) })
  );
  render(<App />);
  const el = await screen.findByText("Hello World");
  expect(el).toHaveClass("hello");
});
