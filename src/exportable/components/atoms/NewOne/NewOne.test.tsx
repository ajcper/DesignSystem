import * as React from "react";

import themed from "./../../../../utils/themed";
import NewOne from "./NewOne";

describe("NewOne", () => {
  it("should render correctly", () => {
    const component = themed(
      <NewOne>
        Test
      </NewOne>,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
