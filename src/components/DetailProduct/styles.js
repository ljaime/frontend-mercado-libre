import styled from "styled-components";

export const Container = styled.div`
  background: white;
  padding: 32px;
`;

export const ContainerDetail = styled.div`
  display: flex;
`;

export const ContainerInformation = styled.div`
  width: 41%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const QuantitySold = styled.div`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const NameProduct = styled.div`
  font-size: 24;
  font-weight: bold;
  margin-bottom: 32px;
`;

export const Price = styled.div`
  font-size: 46px;
  margin-bottom: 32px;
`;

export const ButtonBuy = styled.button`
  background: #3483fa;
  color: white;
  border: none;
  padding: 1rem;
  width: 9.5rem;
  border-radius: 4px;
  font-size: 15px;
`;

export const ContainerDescription = styled.div``;

export const TitleDescription = styled.p`
  font-size: 28px;
  margin: 0 0 32px 0;
`;

export const TextDescription = styled.p`
  margin: 0;
  font-size: 16px;
  color: #999999;
  width: 680px;
`;

export const ContainerImage = styled.div`
  width: 680px;
  height: 680px;
  img {
    width: 100%;
    height: 100%;
  }
`;
