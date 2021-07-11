import { App } from "vue";
import Button from "@hefeng-ui/button";

const components = [Button];

const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default {
  install,
};
