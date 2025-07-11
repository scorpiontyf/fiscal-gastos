import "./App.css";

function App() {
  return (
    <>
      <h1>Fiscalização de Gastos - Gabriel Canechia</h1>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
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
