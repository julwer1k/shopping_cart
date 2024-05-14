const TotalAmount = ({ items = [] }) => {
  let totalAmount = 0;

  items.forEach((item) => {
    totalAmount += item.count * item.price;
  });

  return <h2>Total amount:{totalAmount}</h2>;
};

export default TotalAmount;
