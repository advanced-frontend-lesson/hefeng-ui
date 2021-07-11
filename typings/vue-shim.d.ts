
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: ReturnType<typeof DefineComponent>;

  export default component;
}
