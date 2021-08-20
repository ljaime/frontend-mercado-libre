import React, { useState, useEffect } from "react";
import SearchBox from "../../components/SearchBox";
import Result from "../../components/Result";
import BreadCrumb from "../../components/Breadcrumb";
import { Container } from "../Home/styles";
import { useLocation } from "react-router-dom";

export default function Search() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const getProducts = (search) => {
    return fetch(`http://localhost:3001/api/items?q=${search}`).then((data) =>
      data.json().then((result) => {
        const { items, categories } = result;
        console.log(result, "result");
        setProducts(items);
        setCategories(categories);
      })
    );
  };
  const location = useLocation();
  const search = location.search.split("=")[1];

  useEffect(
    (_) => {
      getProducts(search);
    },
    [search]
  );
  return (
    <>
      <SearchBox />
      <Container>
        <div className="containerResults">
          <BreadCrumb routes={categories} />
          <Result products={products} />
        </div>
      </Container>
    </>
  );
}
