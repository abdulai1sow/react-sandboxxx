const Receipt = (props) => {
  console.log(props.receipt);
  const { person, order, paid } = props.receipt;
  return (
    <div>
      <h1>{person}</h1>

      <div>
        <h3>Main: {order.main}</h3>
        <h3>Protein: {order.protein}</h3>
        <h3>Rice: {order.rice}</h3>
        <h3>Sauce: {order.sauce}</h3>
        <h3>Drink: {order.drink}</h3>
        <h3>Cost: {order.cost}</h3>
      </div>
    </div>
  );
};

export default Receipt;
