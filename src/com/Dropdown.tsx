type DropdownProps<T> = T extends number | string /// mean array of  number or string but will remove label prop and valueprop
  ? {
      data: Array<string | number>;
      labelProp?: never;
      valueProp?: never;
    }
  : {
      data: Array<T>;
      labelProp: keyof T; //  get the Key of T(variable) if you all another properties in the object item
      valueProp: keyof T;
    };
//   ^?

export function Dropdown<T>(props: DropdownProps<T>) {
  return (
    <div>
      {props.data.map(function (item, i) {
        return <li key={i}>{JSON.stringify(item)}</li>;
      })}
    </div>
  );
}
