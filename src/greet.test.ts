import { describe, expect, it } from "vitest";
import { greet } from "./greet";

describe("greet", () => {
  it("greets a user by name", () => {
    expect(greet({ name: "Ada", age: 36 })).toBe("Hello, Ada!");
  });

  it("ends with an exclamation mark", () => {
    expect(greet({ name: "Lin", age: 28 })).toMatch(/!$/);
  });
});
