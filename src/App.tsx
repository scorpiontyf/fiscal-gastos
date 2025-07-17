import { useState } from "react";
import "./App.css";
import DetailTransaction from "./components/detail-transaction";
import Navbar from "./components/navbar";
import Table from "./components/table";

const mockData = [
  { button: "", time: "10:00", company: "Empresa A", value: 100, id: 1 },
  { button: "", time: "11:00", company: "Empresa B", value: 200, id: 2 },
  { button: "", time: "12:00", company: "Empresa C", value: 300, id: 3 },
];

function App() {
  const [transactionId, setTransactionId] = useState<number>(0);
  return (
    <div>
      <Navbar />

      <div
        style={{
          backgroundColor: "rgb(26,26,26)",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            columnGap: "10px",
          }}
        >
          <Table
            setTransactionId={setTransactionId}
            columns={["", "Horário", "Empresa", "Valor"]}
            data={mockData}
          />
          <div style={{ backgroundColor: "#303030", flex: 1, borderRadius: "8px" }}>
            Detalhamento da transação
            <DetailTransaction id={transactionId} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
