import React from "react";
import { render } from "@testing-library/react";
import CocktailCard from "./CocktailCard";

describe("CocktailCard tests", () => {
  it("should render", () => {
    expect(render(<CocktailCard />)).toBeTruthy();
  });
});
