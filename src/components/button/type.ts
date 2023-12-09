export type BtnColor = "default" | "primary" | "secondary" | "accent";

export type BtnVariant = "default" | "outline";

export interface ButtonProps {
  color?: BtnColor;
  variant?: BtnVariant;
  fullWidth?: boolean;
}

export type Values<T> = T[keyof T];

export type DynamicComponentProps<Props = {}> = Values<{
  [Tag in keyof JSX.IntrinsicElements]: {
    tagName: Tag;
  } & JSX.IntrinsicElements[Tag];
}> &
  Props;
