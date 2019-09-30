import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { wInfo } from "./../../utils/wInfo";
import NewOne from "./../../exportable/components/atoms/NewOne/NewOne";

const stories = storiesOf("Components/atoms/NewOne", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => (
    <NewOne>
      {text("Label", "Default")}
    </NewOne>
  )),
);
