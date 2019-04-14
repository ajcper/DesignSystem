import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { wInfo } from "../../../utils/wInfo";
import TextSlideIn from "./TextSlideIn";

const stories = storiesOf("Components//atoms/TextSlideIn", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => (
    <TextSlideIn>
      {text("Label", "Default")}
    </TextSlideIn>
  )),
);
