import { FC, createElement } from "react";
import {
  ButtonProps,
  BtnColor,
  BtnVariant,
  DynamicComponentProps,
} from "./type";
import classNames from "classnames";

const colorClass: Record<BtnColor, string> = {
  default: "",
  accent: "btn-accent",
  primary: "btn-primary",
  secondary: "btn-secondary",
};

const variantClass: Record<BtnVariant, string> = {
  default: "",
  outline: "btn-outline",
};

const Button: FC<DynamicComponentProps<ButtonProps>> = ({
  color = "default",
  variant = "default",
  fullWidth = false,
  tagName,
  className,
  ...rest
}) =>
  createElement(tagName, {
    className: classNames(
      "btn",
      colorClass[color],
      variantClass[variant],
      fullWidth && "btn-block",
      className
    ),
    ...rest,
  });

export default Button;
