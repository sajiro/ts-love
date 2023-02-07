type TextOwnProps<E extends React.ElementType> = {
  size: "sm" | "md";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
};
type textProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

export const Text = <E extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
}: textProps<E>) => {
  const Component = as || "div";
  // eslint-disable-next-line no-console
  console.log(size, color, children, as);
  return <Component className={size + "" + color}>{children}</Component>;
};
