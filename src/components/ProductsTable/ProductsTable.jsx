import React, { useEffect, useState, useMemo } from "react";
import { userColumns } from "../../productstablesource";
import { DataGrid } from "@mui/x-data-grid";

const ProductsTable = () => {
  const [userRows, setUserRows] = useState([]);

  useEffect(() => {
    (() => {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => response.json())
        .then((json) => {
          setUserRows(json);
        });
    })();
  }, []);

  return (
    <>
      <div className="datatable">
        <div className="datatableTitle">Users Table</div>
        <DataGrid
          className="datagrid"
          rows={userRows}
          columns={userColumns}
          autoPageSize={false}
          autoHeight={false}
          hideFooterPagination={true}
        />
      </div>
    </>
  );
};

export default ProductsTable;
