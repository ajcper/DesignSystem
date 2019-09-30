
import { setOptions } from "@storybook/addon-options";
import { addDecorator, configure } from "@storybook/react";
import themeDecorator from "./theme-decorator";

setOptions({
  addonPanelInRight: true,
  name: "React Components",
});

// automatically import all files ending in *.stories.tsx
const req = require.context('../src/stories', true, /.stories.tsx$/)

// const req = require.context("../src", true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach((filename: string) => req(filename));
}

addDecorator(themeDecorator);

configure(loadStories, module);
