import "./styles.css";
import { receipt1, receipt2, receipt3 } from "./data";
import receipts from "./dataArray";
import Receipt from "./components/Receipt";

export default function App() {
  // ===== Conditional before JSX
  // let content;
  // if (receipt1.paid) {
  //   content = null;
  // } else {
  //   content = <Receipt receipt={receipt1} />;
  // }

  // ===== Mapping before the JSX
  const receiptsComp = receipts.map((el, idx) => {
    return el.paid ? null : <Receipt receipt={el} key={idx} />;
  });

  console.log(receiptsComp);

  return (
    <div className="App">
      <h1>Korrila React Receipts</h1>

      {/* {content}
      // Ternany conditionals
      {receipt2.paid ? null : <Receipt receipt={receipt2} />}
      {receipt3.paid ? null : <Receipt receipt={receipt3} />} */}

      {/* Mapping inside the JSX */}
      {receipts.map((el, idx) => {
        return !el.paid && <Receipt key={idx} receipt={el} />;
      })}

      {/* {receiptsComp} */}
    </div>
  );
}
