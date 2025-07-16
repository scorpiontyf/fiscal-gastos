import React from "react";
import type Data from "../types/data";
import { EyeIcon, EyeDropperIcon } from "@heroicons/react/24/outline";

type TableProps = {
  columns: string[];
  data: Data[];
};

export default function Table({ columns, data }: TableProps) {
  return (
    <div className="flex flex-col flex-1 rounded-lg">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {columns.map((column) => (
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y bg-slate-800">
                {data.map((item) => (
                  <tr key={`${item.company}-${item.id}`}>
                    <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                      {item.button ?? <EyeIcon color="white" aria-hidden="true" />}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                      {new Date().toLocaleTimeString([])}
                    </td>
                    <td className="px-6 py-4 text-sm text-white whitespace-nowrap">
                      {item.company}
                    </td>
                    <td className="px-6 py-4 text-sm text-white whitespace-nowrap">
                      R$ {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
