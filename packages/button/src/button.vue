<template>
  <button :class="classes" @click="handleClick">
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import type { PropType } from "vue";

type IButtonType = PropType<
  "primary" | "success" | "warning" | "danger" | "info" | "text" | "default"
>;

type IButtonSizeType = PropType<"large" | "medium" | "small" | "mini">;

interface IButtonProps {
  type: IButtonType;
  // size: PropType<ComponentSize>;
  size: IButtonSizeType;
  icon: string;
  nativeType: string;
  loading: boolean;
  disabled: boolean;
  plain: boolean;
  autofocus: boolean;
  round: boolean;
  circle: boolean;
}

export default defineComponent({
  name: "HButton",
  props: {
    type: {
      type: String as IButtonType,
      default: "primary",
      validator: (val: string) => {
        return [
          "default",
          "primary",
          "success",
          "warning",
          "info",
          "danger",
          "text",
        ].includes(val);
      },
    },
  },
  emits: ["click"],
  setup(props: any, ctx) {
    const classes = computed(() => {
      return [
        "h-button",
        "h-button--" + props.type,
        props.size ? "h-button--" + props.size : "",
        {
          "is-disabled": props.disabled,
          "is-loading": props.loading,
          "is-plain": props.plain,
          "is-round": props.round,
          "is-circle": props.circle,
        },
      ];
    });
    const handleClick = (e: any) => {
      ctx.emit("click", e);
    };

    return {
      classes,
      handleClick,
    };
  },
});
</script>
