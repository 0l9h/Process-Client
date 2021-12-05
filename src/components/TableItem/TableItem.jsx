import React from "react";
import "./TableItem.css";

const TableItem = (props) => {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.file.name}</td>
      <td>{props.file.size}</td>
      <td>{props.file.creationDate}</td>
    </tr>
  );
};

TableItem.propTypes = {};

TableItem.defaultProps = {
  id: "#",
  file: {
    name: "Unknown file",
    size: 0,
    creationDate: "0000-00-00T00:00:00+00:00",
  },
};

export default TableItem;
