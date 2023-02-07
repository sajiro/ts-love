type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <>
      <h1>head</h1>
      {items.map((item, i) => {
        return (
          <li key={i} onClick={() => onClick(item)}>
            {/*  {item} */}aaa
          </li>
        );
      })}
    </>
  );
};
