import Item from "./Item";

// TODO: - render the items list
//       - pass the necessary props to the items
const ItemList = ({
  items = [],
  onDecrement,
  onIncrement,
  onDelete,
  onSelectedItem,
}) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
          onSelectedItem={onSelectedItem}
        />
      ))}
    </div>
  );
};

export default ItemList;
