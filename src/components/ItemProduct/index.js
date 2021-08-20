import React from "react";
import {
  Container,
  ContainerItemProduct,
  ContainerImage,
  ContainerInformation,
  ContainerPrice,
  ContainerDescription,
  ContainerCity,
  Hr,
} from "./styles";
import { Link } from "react-router-dom";

const formatPrice = (price) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(price);
};

export default function ItemProduct({
  id,
  price,
  image,
  title,
  city,
  free_shipping,
}) {
  const priceFormated = formatPrice(price.amount);
  return (
    <Container>
      <Link to={`/items/${id}`}>
        <ContainerItemProduct>
          <ContainerImage>
            <img src={image} />
          </ContainerImage>
          <ContainerInformation>
            <ContainerPrice>
              <span className="price">
                {price.currency}{" "}
                {String(price.amount).replace(/(.)(?=(\d{3})+$)/g, "$1,")}.
                {price.decimals}
              </span>
              <span className="icon">
                {free_shipping ? (
                  <img src="../assets/ic_shipping.png" title="Envio gratis" />
                ) : (
                  ""
                )}
              </span>
            </ContainerPrice>
            <ContainerDescription>
              <span>{title}</span>
            </ContainerDescription>
          </ContainerInformation>

          <ContainerCity>
            <span>{city}</span>
          </ContainerCity>
        </ContainerItemProduct>
        <Hr />
      </Link>
    </Container>
  );
}
