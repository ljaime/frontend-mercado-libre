import React from "react";
import {
  ContainerSearch,
  Input,
  Image,
  ContainerInputSearch,
  InputGroup,
} from "./styles";
import { useHistory, useLocation, Link } from "react-router-dom";

export default function SearchBox() {
  let history = useHistory();
  const handleSearch = () => {
    const inputSearch = document.getElementById("inputSearch").value;
    history.push(`/items?search=${inputSearch}`);
  };

  const location = useLocation();
  const search = location.search.split("=")[1];
  return (
    <ContainerSearch>
      <Link to={"/"}>
        <Image src="../assets/Logo_ML.png" />
      </Link>
      <ContainerInputSearch>
        <Input
          placeholder="Nunca dejes de buscar"
          id="inputSearch"
          defaultValue={search}
        />
        <InputGroup onClick={() => handleSearch()} className="searchButton">
          <img src="../assets/ic_Search.png" />
        </InputGroup>
      </ContainerInputSearch>
    </ContainerSearch>
  );
}
