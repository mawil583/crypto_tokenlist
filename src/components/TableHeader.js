import React, { useState } from "react";

function TableHeader(props) {
  const [descending, setDescending] = useState(false);

  const getAccessorFromType = (header) => {
    if (typeof header === "string") {
      return header.toLowerCase();
    } else if (typeof header === "number") {
      return header;
    } else if (Array.isArray(header)) {
      return header[0];
    }
  };

  const sortAscending = (header) => {
    const orderClone = [...props.order];
    orderClone.sort((a, b) => {
      if (getAccessorFromType(a[header]) < getAccessorFromType(b[header])) {
        return 1;
      } else if (
        getAccessorFromType(a[header]) > getAccessorFromType(b[header])
      ) {
        return -1;
      }
      return 0;
    });
    props.setOrder(orderClone);
  };

  const sortDescending = (header) => {
    const orderClone = [...props.order];
    orderClone.sort((a, b) => {
      if (getAccessorFromType(a[header]) < getAccessorFromType(b[header])) {
        return -1;
      } else if (
        getAccessorFromType(a[header]) > getAccessorFromType(b[header])
      ) {
        return 1;
      }
      return 0;
    });
    props.setOrder(orderClone);
  };

  const toggleSortDirection = (header) => {
    if (descending) {
      sortAscending(header);
    } else {
      sortDescending(header);
    }
  };

  return (
    <th
      onClick={() => {
        toggleSortDirection(props.header);
        setDescending(!descending);
      }}
    >
      {props.header}
    </th>
  );
}

export default TableHeader;
