// import {
//     useTable,
//     useGlobalFilter,
//     useSortBy,
//     usePagination,
//   } from "react-table";

export const OrderTable = () => {
  return (
    <>
      <div className="">
        <table class="table-auto">
          <thead className="">
            <tr>
              <th></th>
              <th>Order No</th>
              <th>Amount (USD)</th>
              <th>Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>Order-267400</td>
              <td>$ 329.99</td>
              <td>12/4/17</td>
              <td>Delivered</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
