import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { wInfo } from "../../../utils/wInfo";
import Tab from "./Tab";
import Molecules from "./Molecules";

const stories = storiesOf("Components/molecules/Tab", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => (
    <Tab>
      {text("Label", "Default")}
    </Tab>
  )),
);
