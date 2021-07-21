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
import { throttle } from "../../utils";

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
  enableThrottle: boolean;
  delay: number;
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
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    enableThrottle: {
      type: Boolean,
      default: false,
    },
    delay: {
      type: Number,
      default: 500,
    },
  },
  emits: ["click"],
  setup(props: IButtonProps, ctx) {
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
    const baseClick = (e: MouseEvent) => {
      ctx.emit("click", e);
    };
    const throttleClick = throttle(baseClick, props.delay);
    const handleClick = props.enableThrottle ? throttleClick : baseClick;

    return {
      classes,
      handleClick,
    };
  },
});
</script>
