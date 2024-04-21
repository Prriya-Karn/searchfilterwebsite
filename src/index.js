import React, { Fragment } from "react";
import ReactDom from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"; //due to this all bootstrap 5 components working 
import SearchFilter from "./SearchFilter/SearchFilter";

ReactDom.render(
  <Fragment>
    <SearchFilter/>
  </Fragment>,
  document.getElementById('root')
)

