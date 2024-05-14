// TODO: - render an item
//       - show name
//       - show price
//       - show count
//       - calculate and show amount
//       - call "onIncrement"
//       - call "onDecrement"
//       - call "onDelete"
const Item = ({
  item,
  onDecrement,
  onIncrement,
  onDeletem,
  onSelectedItem,
}) => {
  // TODO: don't delete this console.log!
  console.log(`render item ${item?.id}`);

  const { name, price, count, id } = item;

  const amount = price * count;

  return (
    <div className="cart-item">
      <div className="details-wrapper">
        <span className="name">{name}</span>
        <span>
          price: <span className="price">{price}</span>
        </span>
      </div>

      <dl className="counter-wrapper">
        <dt>count</dt>
        <dd>
          <button
            className="decrement"
            onClick={() => {
              onDecrement(item);
              onSelectedItem(item);
            }}
          >
            -
          </button>
          <span className="count">{item.count}</span>
          <button className="increment" onClick={() => onIncrement(item)}>
            +
          </button>
        </dd>
      </dl>

      <div className="amount-wrapper">
        <span className="label">amount:</span>
        <span className="amount">{amount}</span>
      </div>

      <button className="delete-item" onClick={() => onDelete(id)}>
        x
      </button>
    </div>
  );
};

export default Item;
