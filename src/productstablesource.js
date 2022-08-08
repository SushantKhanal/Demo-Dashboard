export const userColumns = [
  { field: "id", headerName: "No#", width: 30 },
  {
    field: "name",
    headerName: "Product Name",
    width: 230,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.name}</div>;
    },
    flex: 1,
  },
  {
    field: "email",
    headerName: "Assignee Email",
    width: 230,
    flex: 1,
  },
  {
    field: "body",
    headerName: "Product Description",
    width: 100,
    flex: 1,
  },
];
