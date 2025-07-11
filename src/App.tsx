import "./App.css";
import Text from "./components/text";

function App() {
  return (
    <>
      <Text as="h1">Fiscalização de Gastos - Gabriel Canechia</Text>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", borderRadius: "10px", margin: "20px", padding: "20px", backgroundColor: "#303030" }}>
        <div style={{ backgroundColor: "blue", flex: 1 }}>
          <ul style={{ listStyleType: "none" }}>
            <li>Hora, Empresa, Valor</li>
            <li>oi</li>
            <li>oi</li>
          </ul>
        </div>
        <div style={{ backgroundColor: "red", flex: 1 }}>Detalhamento da transação</div>
      </div>
    </>
  );
}

export default App;
