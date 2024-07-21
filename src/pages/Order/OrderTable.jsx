import {
  useTable,
  //     useGlobalFilter,
  //     useSortBy,
  //     usePagination,
} from "react-table";
import mockData from "../../Utility/MockData.json";
import { useMemo } from "react";
import profile from "../../assets/images/Illustration.png";
import delivered from "../../assets/icon/Delivered.png";
import pending from "../../assets/icon/Pending.png";

export const OrderTable = () => {
  const data = useMemo(() => mockData, []);
  const columns = useMemo(
    () => [
      { Header: "Order No", accessor: "orderNo" },
      { Header: "Amount (USD)", accessor: "amount" },
      { Header: "Date", accessor: "date" },
      { Header: "Status", accessor: "status" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <div className="my-4 w-full">
        {/* <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, index) => {
              <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, colIndex) => {
                  <th key={colIndex} {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>;
                })}
              </tr>;
            })}
          </thead>
          <tbody {...getTableBodyProps()} className="my-2">
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                   {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className="my-2 text-xs"> {cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table> */}

        <table className="text-xs">
          <thead className="bg-slate-100">
            <tr className="">
              <th className="px-2 py-2">
                <input type="checkbox" />
              </th>
              <th className="px-6 py-2">Order No</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Date</th>
              <th className="py-2">Status</th>
              <th>
              </th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((d) => {
              return (
                <>
                <tr className="py-4">
                  <td className="px-2">
                    <input type="checkbox" />
                  </td>
                  <td className="flex px-8 my-2">
                    <div className="p-1 px-1.5 border rounded-full h-9 w-9 relative">
                      <img
                        className="absolute h-5 w-5 flex text-center justify-center"
                        src={profile}
                        alt="profile"
                      />
                    </div>
                    <p className="px-1 flex justify-center items-center">
                      {d.orderNo}
                    </p>
                  </td>
                  <td className="px-4">{d.amount}</td>
                  <td className="px-4">{d.date}</td>
                  <td className="px-6">
                    <div className="flex border-2 border-slate-100 rounded-md px-1 py-0.5">
                      <div className="flex justify-center items-center p-0.5 h-3.5 w-3.5">
                      <img src={delivered} alt="status"/>
                      </div>
                      <p>
                      {d.status}
                      </p>
                    </div>
                    </td>
                  <td className="px-2"> ... 
                  </td>
                </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
