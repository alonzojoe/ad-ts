import React from "react";

type GenericProps<Item> = {
  items: Item[];
  getKey: (item: Item) => React.Key;
  getRow: (item: Item) => React.ReactNode;
};

const GenericList = <T,>({ items, getKey, getRow }: GenericProps<T>) => {
  return (
    <div className="flex items-center justify-center flex-col space-y-3 ">
      {items.map((item) => (
        <div key={getKey(item)}>{getRow(item)}</div>
      ))}
    </div>
  );
};

export default GenericList;
