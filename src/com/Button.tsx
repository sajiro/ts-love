type ButtonProp = {
  variant: "primary" | "secondary";
  children: string; // accept only string and not a div or other element
} & Omit<React.ComponentProps<"button">, "children">;
//React.ComponentProps<'button'> - original all props of button

//export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {

export const CustomButton = ({ variant, children, ...rest }: ButtonProp) => {
  return (
    <button className={variant} {...rest}>
      {children}
    </button>
  );
};

/* 
Accept even DIv


type ButtonProp = {
  variant: "primary" | "secondary";
  children: React.ReactNode; // accept only string and not a div or other element
} & React.ComponentProps<"button">;

export const CustomButton = ({ variant, children, ...rest }: ButtonProp) => {
  return (
    <button className={variant} {...rest}>
      {children}
    </button>
  );
};



*/
