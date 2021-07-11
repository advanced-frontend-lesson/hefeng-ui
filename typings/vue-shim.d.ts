declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: ReturnType<typeof DefineComponent> & {
    install(app: App): void;
  };

  export default component;
}
