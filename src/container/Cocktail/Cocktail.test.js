import React from "react";
import { render } from "@testing-library/react";
import Cocktail from "./Cocktail";

describe("Cocktail tests", () => {
  it("should render", () => {
    expect(render(<Cocktail />)).toBeTruthy();
  });
});
