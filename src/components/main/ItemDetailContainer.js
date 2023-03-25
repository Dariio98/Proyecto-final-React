import React, { useEffect, useState } from "react";
import "../styles/itemDetailContainer.css";
import { useParams } from "react-router-dom";
import { ItemDetali } from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`/stock.json`);
      const data = await res.json();
      const product = data.find((item) => item.id === parseInt(id));
      setProduct(product);
    };
    getProduct();
  }, [id]);

  return (
    <div className="detailContainer">
      <ItemDetali product={product} />
    </div>
  );
};

export default ItemDetailContainer;