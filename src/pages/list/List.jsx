import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import ProductsTable from "../../components/ProductsTable/ProductsTable";

const List = ({ type }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        {type === "USERS" && <Datatable />}
        {type === "PRODUCTS" && <ProductsTable />}
      </div>
    </div>
  );
};

export default List;
