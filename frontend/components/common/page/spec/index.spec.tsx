import * as React from "react";
import { render } from "@testing-library/react";

const mountComponent = () => {
  return render(<></>);
};

describe("Testing Jest!", () => {
  it("renders deploy link", () => {
    mountComponent();
  });
});
