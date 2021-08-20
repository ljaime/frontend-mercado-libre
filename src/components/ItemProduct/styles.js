import styled from "styled-components";

export const Container = styled.div`
  a:link,
  a:visited,
  a:active {
    text-decoration: none;
    color: #333333;
  }
`;

export const ContainerItemProduct = styled.div`
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
`;

export const ContainerImage = styled.div`
  margin: 16px;
  background: green;
  border-radius: 4px;
  width: 180px;
  height: 180px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const ContainerInformation = styled.div`
  margin: 16px 0;
  width: 50%;
  padding: 2rem 0 2rem 0;
`;

export const ContainerPrice = styled.div`
  display: flex;
  margin-bottom: 32px;
  align-items: center;
  .price {
    font-size: 24px;
  }
  .icon {
    margin-left: 0.5rem;
  }
`;

export const ContainerDescription = styled.div`
  span {
    font-size: 18px;
  }
`;

export const ContainerCity = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  margin: 16px 0;
  padding: 2rem 0 2rem 0;
  span {
    font-size: 12px;
    color: #999999;
  }
`;

export const Hr = styled.hr`
  margin: 0;
  border-color: #eeeeee;
  margin: 0 16px;
`;
