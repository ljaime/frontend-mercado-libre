import styled from "styled-components";

export const ContainerSearch = styled.div`
  background: #ffe600;
  height: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  height: 60%;
  width: 100%;
  border-radius: 0.2rem 0 0 0.2rem;
  border: none;
  text-indent: 1rem;
  outline: none;
  &::placeholder {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  margin-right: 2rem;
  cursor: pointer;
`;

export const ContainerInputSearch = styled.div`
  display: flex;
  height: 100%;
  width: 80%;
  justify-content: center;
  align-items: center;
`;

export const InputGroup = styled.div`
  height: 63%;
  width: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
  cursor: pointer;
`;
