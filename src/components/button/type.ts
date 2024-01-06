export type BtnColor = "default" | "primary" | "secondary" | "accent";

export type BtnVariant = "default" | "outline";

export interface ButtonProps {
  color?: BtnColor;
  variant?: BtnVariant;
  fullWidth?: boolean;
}
