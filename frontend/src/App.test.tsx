import { render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import App from "./App";

afterEach(() => vi.unstubAllGlobals());

it("shows Hello World from the API", async () => {
  vi.stubGlobal(
    "fetch",
    vi.fn().mockResolvedValue({ ok: true, json: async () => ({ message: "Hello World" }) }),
  );
  render(<App />);
  const el = await screen.findByText("Hello World");
  expect(el).toHaveClass("greeting");
  expect(fetch).toHaveBeenCalledWith("/api/hello");
});
