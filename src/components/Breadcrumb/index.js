import React from "react";
import { ContainerBreadcrum, ListRoutes } from "./styles";
import { Link } from "react-router-dom";

export default function BreadCrumb({ routes = [] }) {
  const quantityRoutes = routes.length;
  return (
    <ContainerBreadcrum>
      <ListRoutes>
        <li>
          <Link to={"/"}>Inicio {quantityRoutes > 0 ? "> " : ""}</Link>
        </li>
        <li>{routes[0]}</li>
      </ListRoutes>
    </ContainerBreadcrum>
  );
}
