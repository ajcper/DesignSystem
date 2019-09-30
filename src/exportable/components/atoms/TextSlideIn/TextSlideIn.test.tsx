import * as React from "react";

import themed from "./../../../../utils/themed";
import TextSlideIn from "./TextSlideIn";


describe("TextSlideIn", () => {
  it("should render correctly", () => {
    const component = themed(
      <TextSlideIn>
        Test
      </TextSlideIn>,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
