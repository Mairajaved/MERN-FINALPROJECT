import CategoryModal from "../components/CategoryModal";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Category() {
  const [category, setCategory] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:1789/api/all-categories")
  //     .then((json) => setCategory(json.data.categories))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center bg-secondary p-2 my-3 rounded">
          <span className="fs-4 fw-bold text-white">Categories</span>
          <CategoryModal />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#id</th>
              <th scope="col">Category Name</th>
              <th scope="col">Category Image</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">id</th>
              <td>Category Name</td>
              <td>Category Image</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
