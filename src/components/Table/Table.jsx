import React from "react";
import "./Table.css";
import TableItem from "../TableItem/TableItem.jsx";

const Table = (props) => {
  const files = props.files;
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">File Name</th>
            <th scope="col">File Size</th>
            <th scope="col">Creation Date</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, i) => (
            <TableItem id={i+1} file={file} />
          ))}
        </tbody>
      </table>
      <input
        className="form-control text-center"
        type="text"
        value={props.totalSize+" Bytes"}
        aria-label={props.totalSize+" Bytes"}
        disabled
        readonly
      ></input>
    </div>
  );
};

Table.propTypes = {};

Table.defaultProps = {
  files: [
    {
      name: "Unknown file",
      size: 0,
      creationDate: "0000-00-00T00:00:00+00:00",
    },
    {
      name: "Unknown file",
      size: 0,
      creationDate: "0000-00-00T00:00:00+00:00",
    },
    {
      name: "Unknown file",
      size: 0,
      creationDate: "0000-00-00T00:00:00+00:00",
    },
  ],
  totalSize: 0,
};

export default Table;
