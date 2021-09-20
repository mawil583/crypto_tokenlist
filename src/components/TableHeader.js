import React, { useState } from "react";

function TableHeader(props) {
  const [descending, setDescending] = useState(false);

  const sortByHeader = (header) => {
    const orderClone = [...props.order];
    if (descending) {
      orderClone.sort((a, b) => {
        const getAccessorFromType = (header) => {
          if (typeof header === "string") {
            return header.toLowerCase();
          } else if (typeof header === "number") {
            return header;
          } else if (Array.isArray(header)) {
            return header[0];
          }
        };
        if (getAccessorFromType(a[header]) < getAccessorFromType(b[header])) {
          return 1;
        } else if (
          getAccessorFromType(a[header]) > getAccessorFromType(b[header])
        ) {
          return -1;
        }
        return 0;
      });
    } else {
      orderClone.sort((a, b) => {
        const getAccessorFromType = (header) => {
          if (typeof header === "string") {
            return header.toLowerCase();
          } else if (typeof header === "number") {
            return header;
          } else if (Array.isArray(header)) {
            return header[0];
          }
        };
        if (getAccessorFromType(a[header]) < getAccessorFromType(b[header])) {
          return -1;
        } else if (
          getAccessorFromType(a[header]) > getAccessorFromType(b[header])
        ) {
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
