import React from "react";

const Table = ({ items, headers }) => {
  const rows = items.map((item) => Object.values(item));
  return (
    <table>
      <thead>
        <tr className="table-header">
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => (
              <td className="table-cell" key={index}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
