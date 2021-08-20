import React, { useState, useEffect } from "react";
import SearchBox from "../../components/SearchBox";
import BreadCrumb from "../../components/Breadcrumb";
import DetailProduct from "../../components/DetailProduct";
import { Container } from "../Home/styles";
import { useParams } from "react-router";

export default function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const getProduct = () => {
    return fetch(`http://localhost:3001/api/items/${id}`).then((data) =>
      data.json().then((product) => {
        console.log(product, "ññññ");
        setProduct(product.item);
        setCategories(product.categories);
      })
    );
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <>
      <SearchBox />
      <Container>
        <div className="containerResults">
          <BreadCrumb routes={categories} />
          <DetailProduct {...product} />
        </div>
      </Container>
    </>
  );
}
