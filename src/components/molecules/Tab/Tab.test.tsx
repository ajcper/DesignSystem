import * as React from "react";

import themed from "../../../utils/themed";
import Tab from "./Tab";

describe("Tab", () => {
  it("should render correctly", () => {
    const component = themed(
      <Tab>
        Test
      </Tab>,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
