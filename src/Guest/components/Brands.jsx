import { useEffect, useState } from "react";
import axios from "axios";
import GuestCard from "./GuestCards";

export default function Brand() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1234/api/get-brand")
      .then((response) => {
        const brandData = response.data.brands;
        setBrands(brandData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle the error accordingly.
      });
  }, []);

  console.log("brands:", brands); // Log brands to see its content

  return (
    <div className="container my-5">
      <div className="text-center">
        <h2>Brands</h2>
        <small className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum delectus
          magnam doloribus voluptatibus possimus corrupti aliquid itaque harum
          debitis ipsa!
        </small>
      </div>

      <div className="row my-5">
        {brands?.map((brand, index) => (
          <GuestCard
            key={index}
            image={brand.BrandImage}
            name={brand.BrandName}
          />
        ))}
      </div>
    </div>
  );
}
