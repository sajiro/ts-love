type TableData = {
  id: number;
  name: string;
};

interface TableProps<TItem> {
  items: TItem[];
  /*   renderItem: (item: TItem) => React.ReactNode; */
  /*   onClick: () => void; */
}

export const Table = <TItem extends Partial<TableData>>(
  props: TableProps<TItem>
) => {
  const { items /* renderItem */ /* onClick */ } = props;
  const _onClick = (item: TItem) => {
    console.log("popo", item.name);
  };
  return (
    <div>
      {items.map((item, i) => {
        return (
          <li key={i} onClick={() => _onClick(item)}>
            {i}.{item.name} {item.id}
          </li>
        );
      })}
    </div>
  );
};

export const Component = () => {
  return (
    <>
      <Table
        items={[
          { id: 1, name: "aaaa" },
          { id: 2, name: "bbbbb" },
        ]}
        /*   renderItem={(item) => {
          console.log(item);
          return <div>{item.id}</div>;
        }} */
        /*  onClick={() => console.log("hello")} */
      ></Table>
      {/*  <Table
        items={[{ id: "1", hina: "bbbb" }]}
        renderItem={(item) => {
          item.firstName;
          return null;
        }}
      ></Table> */}
    </>
  );
};
