import React from "react";
import ItemProduct from "../ItemProduct";
import { ContainerResults } from "./styles";

export default function Result({ products = [] }) {
  return (
    <ContainerResults>
      {products.map((product, index) => (
        <ItemProduct
          key={index}
          id={product.id}
          price={product.price}
          image={product.picture}
          title={product.title}
          city={product.address.state_name}
          free_shipping={product.free_shipping}
        />
      ))}
    </ContainerResults>
  );
}
