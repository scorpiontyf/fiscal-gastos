import React, { useEffect } from "react";
import Text from "./text";
import { NavLink } from "react-router";
type DetailTransactionProps = {
  id: number;
  setTransactionId: React.Dispatch<React.SetStateAction<number>>;
};

const mockData = [
  { time: "10:00", company: "Empresa A", value: 100, id: 1 },
  { time: "11:00", company: "Empresa B", value: 200, id: 2 },
  { time: "12:00", company: "Empresa C", value: 300, id: 3 },
];

function DetailTransaction({ id, setTransactionId }: DetailTransactionProps) {
  const [data, setData] = React.useState(mockData);
  useEffect(() => {
    setData(mockData);
  }, []);

  return (
    <>
      {data
        .filter((item) => item.id === id)
        .map((item) => (
          <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
            <div className="relative">
              <img
                className="w-full"
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                alt="Product Image"
              />
              <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                Gasto
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">Descrição</h3>
              <p className="text-gray-600 text-sm mb-4">
                <Text as="p">{item.company}</Text>
              </p>
              <div className="flex items-center justify-between">
                <NavLink onClick={() => setTransactionId(0)} to="/home" className="button">
                  Voltar
                </NavLink>
                <span className="font-bold text-lg">
                  <Text as="p">Valor: R$ {item.value}</Text>
                </span>
                <span className="font-bold text-lg">
                  <Text as="p" style={{}}>
                    Hora: {item.time}
                  </Text>
                </span>
                <button className="button" style={{ backgroundColor: "#1E2939" }}>
                  Editar
                </button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default DetailTransaction;
