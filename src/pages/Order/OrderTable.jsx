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
import { ThreeDotsVertical } from "react-bootstrap-icons";
import { Link } from "react-bootstrap-icons";

export const OrderTable = () => {
  const toggleItemMenu = (e) => {
    var elem = document.querySelector(
      "#itemMenuDropdownButton #itemMenuDropdown"
    );
    elem.classList.toggle("hidden");
  };
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
      <div className="my-4 max-w-full">
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
              <th></th>
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
                    <td className="flex px-12 my-2">
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
                    <td className="px-8">{d.amount}</td>
                    <td className="px-8">{d.date}</td>
                    <td className="px-12">
                      <div className="flex border-2 border-slate-100 rounded-md px-1 py-0.5">
                        <div className="flex justify-center items-center p-0.5 h-3.5 w-3.5">
                          <img
                            src={d.status === "Pending" ? pending : delivered}
                            alt="status"
                          />
                        </div>
                        <p>{d.status}</p>
                      </div>
                    </td>
                    <td className="px-2 text-slate-400">
                      <div
                        className="relative select-none"
                        id="itemMenuDropdownButton"
                      >
                        <div onClick={toggleItemMenu}>
                          <div>
                            <ThreeDotsVertical />
                          </div>
                        </div>
                        <div
                          id="itemMenuDropdown"
                          className="hidden absolute rounded-lg bg-white border border-slate-200 top-[15px] right-[1px] w-[140px] font-medium text-xs shadow-md my-1"
                        >
                          <div className="p-1 text-black">
                            <p className="cursor-pointer hover:bg-slate-100 hover:rounded p-1.5 m-1.5">
                              View Product
                            </p>
                              <p className="cursor-pointer hover:bg-slate-100 hover:rounded p-1.5 m-1.5">
                                Track Order{" "}
                              </p>
                           
                              <p className="cursor-pointer hover:bg-slate-100 hover:rounded p-1.5 m-1.5">
                                Cancel Order{" "}
                              </p>
                           
                          </div>
                        </div>
                      </div>
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
