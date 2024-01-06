export type Values<T> = T[keyof T];

export type DynamicComponentProps<Props = {}> = Values<{
  [Tag in keyof JSX.IntrinsicElements]: {
    tagName: Tag;
  } & JSX.IntrinsicElements[Tag];
}> &
  Props;

export type Themes = "dark" | "light";
