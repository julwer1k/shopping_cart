import Title from "./Title";
import ItemList from "./ItemList";
import TotalAmount from "./TotalAmount";
import Item from "./Item";
import { useCallback, useEffect, useState } from "react";

const apiCard = "https://640f0073cde47f68db3e614c.mockapi.io/api/v1/cart";

// API response example
const initialState = [
  { id: 1, price: 4700, name: "Printer", count: 0 },
  { id: 2, price: 3800, name: "Motherboard", count: 0 },
  { id: 3, price: 500, name: "Mouse", count: 0 },
];

// The user should be able:
// - to change the count for each item
// - to remove items from the array

// The shopping cart should:
// - calculate the amount for each item
// - calculate the total amount

// TODO: - finish the Shopping Cart.
//       - fetch data and set state
//       - create a "handleIncrement" function
//       - create a "handleDecrement" function
//       - create a "handleDeleteItem" function
//       - pass the items and functions to the components
const Cart = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch(apiCard)
      .then((data) => data.json())
      .then((data) => setItems(data));
  }, []);

  const onIncrement = useCallback(
    (item) => {
      const { count } = item;

      const newItem = {
        ...item,
        count: count + 1,
      };

      setItems((prev) =>
        prev.map((item) => {
          if (item.id === newItem.id) {
            return {
              ...item,
              ...newItem,
            };
          }

          return item;
        }),
      );
    },
    [selectedItem],
  );

  const onDecrement = (item) => {
    const { count } = item;

    if (count <= 0) {
      return;
    }

    const newItem = {
      ...item,
      count: count - 1,
    };

    setItems((prev) =>
      prev.map((item) => {
        if (item.id === newItem.id) {
          return {
            ...item,
            ...newItem,
          };
        }

        return item;
      }),
    );
  };

  const onDelete = (deleteId) => {
    setItems((prev) => prev.filter((item) => item.id !== deleteId));
  };

  return (
    <div className="cart">
      <Title />

      {/* TODO: pass the items
          and functions to the component */}
      <ItemList
        items={items}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
        onSelectedItem={setSelectedItem}
      />

      {/* TODO: pass the items to the component */}
      <TotalAmount items={items} />
    </div>
  );
};

export default Cart;
