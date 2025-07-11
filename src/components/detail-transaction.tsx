import React from "react";
import Text from "./text";

type DetailTransactionProps = {
  id: number;
};

const mockData = [
  { time: "10:00", company: "Empresa A", value: 100, id: 1 },
  { time: "11:00", company: "Empresa B", value: 200, id: 2 },
  { time: "12:00", company: "Empresa C", value: 300, id: 3 },
];

function DetailTransaction({ id }: DetailTransactionProps) {
  const [data, setData] = React.useState(mockData);
  return (
    <div>
      {data
        .filter((item) => item.id === id)
        .map((item) => (
          <div
            key={item.id}
            style={{
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
          >
            <Text as="p" style={{}} >Hora: {item.time}</Text>
            <Text as="p">Empresa: {item.company}</Text>
            <Text as="p">Valor: R$ {item.value}</Text>
          </div>
        ))}
    </div>
  );
}

export default DetailTransaction;
