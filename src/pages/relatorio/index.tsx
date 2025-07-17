import React, { useState } from "react";
import Table from "../../components/table";
import DetailTransaction from "../../components/detail-transaction";
import Breadcrumb from "../../components/breadcrumb";
import Text from "../../components/text";
import { NavLink } from "react-router";
const mockData = [
  { button: "", time: "10:00", company: "Empresa A", value: 100, id: 1 },
  { button: "", time: "11:00", company: "Empresa B", value: 200, id: 2 },
  { button: "", time: "12:00", company: "Empresa C", value: 300, id: 3 },
];

function IndexRelatorio() {
  const [transactionId, setTransactionId] = useState<number>(0);

  const items = [
    { label: "Relatório", href: "/home" },
    { label: "Index", href: "/home" },
  ];

  return (
    <div
      style={{
        backgroundColor: "rgb(26,26,26)",
        padding: "40px 20px",
      }}
    >
      <div className="flex items-center justify-between mb-9">
        <Breadcrumb items={items} />
        <NavLink
          to={"/create"}
          style={{ backgroundColor: "#1E2939" }}
          className="button"
        >
          Criar
        </NavLink>
      </div>
      <span className="flex flex-1 items-center mb-9">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600"></span>
        <Text as="h2" className="shrink-0 px-4 text-gray-900 dark:text-white">
          Relatório de Transações
        </Text>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600"></span>
      </span>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          columnGap: "10px",
        }}
      >
        {transactionId > 0 ? (
          <div
            style={{ flex: 1 }}
          >
            <DetailTransaction id={transactionId} setTransactionId={setTransactionId} />
          </div>
        ) : (
          <Table
            setTransactionId={setTransactionId}
            columns={["", "Horário", "Empresa", "Valor"]}
            data={mockData}
          />
        )}
      </div>
    </div>
  );
}

export default IndexRelatorio;
