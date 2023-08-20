import { useEffect, useState } from "react";
import GuestCard from "./GuestCards";
import axios from "axios";

export default function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1234/api/get-all-category")
      .then((response) => {
        const categoryData = response.data.categories;
        setCategories(categoryData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container my-5">
      <div className="text-center">
        <h2>Categories</h2>
        <small className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum delectus
          magnam doloribus voluptatibus possimus corrupti aliquid itaque harum
          debitis ipsa!
        </small>
      </div>

      <div className="row my-5">
        {categories?.map((category, index) => (
          <GuestCard
            key={index}
            image={category.CategoryImage}
            name={category.CategoryName}
          />
        ))}
      </div>
    </div>
  );
}
