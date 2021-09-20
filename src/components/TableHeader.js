import React, { useState } from "react";

function TableHeader(props) {
  const [descending, setDescending] = useState(true);

  const sortByHeader = (header) => {
    const orderClone = [...props.order];
    if (descending) {
      orderClone.sort((a, b) => {
        if (a[header] < b[header]) {
          return 1;
        } else if (a[header] > b[header]) {
          return -1;
        }
        return 0;
      });
    } else {
      orderClone.sort((a, b) => {
        if (a[header] < b[header]) {
          return -1;
        } else if (a[header] > b[header]) {
          return 1;
        }
        return 0;
      });
    }

    props.setOrder(orderClone);
  };

  return (
    <th
      onClick={() => {
        sortByHeader(props.header);
        setDescending(!descending);
      }}
    >
      {props.header}
    </th>
  );
}

export default TableHeader;
