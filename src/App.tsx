import { useState } from "react";
import "./App.css";
import Text from "./components/text";
import DetailTransaction from "./components/detail-transaction";

const mockData = [
  { time: "10:00", company: "Empresa A", value: 100, id: 1 },
  { time: "11:00", company: "Empresa B", value: 200, id: 2 },
  { time: "12:00", company: "Empresa C", value: 300, id: 3 },
];

function App() {
  const [transactionId, setTransactionId] = useState<number>(0);
  return (
    <>
      <Text as="h1">Fiscalização de Gastos - Gabriel Canechia</Text>
      <div
        style={{
          backgroundColor: "#303030",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <Text as="h2" style={{ textAlign: "start" }}>
          Filtro
        </Text>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div style={{ backgroundColor: "blue", flex: 1 }}>
            <ul style={{ listStyleType: "none" }}>
              {mockData.map((item) => (
                <li
                  key={item.id}
                  onClick={() => setTransactionId(item.id)}
                  style={{ cursor: "pointer", padding: "5px" }}
                >
                  <Text as="span">
                    {item.time}, {item.company}, R$ {item.value}
                  </Text>
                </li>
              ))}
              <li>Hora, Empresa, Valor</li>
            </ul>
          </div>
          <div style={{ backgroundColor: "red", flex: 1 }}>
            Detalhamento da transação
            <DetailTransaction id={transactionId} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
