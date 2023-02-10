type Base = { id: string } | string;

type GenericSelectProps<TValue> = {
  formatLabel: (value: TValue) => string;
  onChange: (value: TValue) => void;
  values: Readonly<TValue[]>;
};

const isStringValue = <TValue extends Base>(
  value: TValue | string
): value is string => {
  return typeof value === "string";
};

const getStringFromValue = <TValue extends Base>(value: TValue) => {
  if (isStringValue(value)) return value;

  return value.id;
};

export const GenericSelect = <TValue extends Base>(
  props: GenericSelectProps<TValue>
) => {
  const { values, onChange, formatLabel } = props;

  const onSelectChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const val = values.find(
      (value) => getStringFromValue(value) === e.target.value
    );

    if (val) onChange(val);
  };

  return (
    <select onChange={onSelectChange}>
      {values.map((value) => (
        <option
          key={getStringFromValue(value)}
          value={getStringFromValue(value)}
        >
          {getStringFromValue(value)} {formatLabel(value)}
        </option>
      ))}
    </select>
  );
};
