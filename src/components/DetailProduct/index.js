import React from "react";
import {
  ContainerDetail,
  Container,
  ContainerInformation,
  QuantitySold,
  NameProduct,
  Price,
  ButtonBuy,
  ContainerDescription,
  TitleDescription,
  TextDescription,
  ContainerImage,
} from "./styles";

export default function DetailProduct({
  id,
  title,
  price,
  picture,
  description,
  condition,
  sold_quantity,
}) {
  console.log(picture);
  if (!picture) {
    return "Cargando...";
  }
  return (
    <Container>
      <ContainerDetail>
        <ContainerImage>
          <img src={picture} />
        </ContainerImage>
        <ContainerInformation>
          <QuantitySold>
            {condition === "new" ? "Nuevo" : "Usado"} - {sold_quantity} vendidos
          </QuantitySold>
          <NameProduct>{title}</NameProduct>
          <Price>
            {price.currency}{" "}
            {String(price.amount).replace(/(.)(?=(\d{3})+$)/g, "$1,")}.
            {price.decimals}
          </Price>
          <ButtonBuy>Comprar</ButtonBuy>
        </ContainerInformation>
      </ContainerDetail>
      <ContainerDescription>
        <TitleDescription>Descripción del producto</TitleDescription>
        <TextDescription>{description}</TextDescription>
      </ContainerDescription>
    </Container>
  );
}
