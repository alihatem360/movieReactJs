import React, { Fragment } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./style.css";
function index() {
  return (
    <Fragment>
      <Link to="/cart">
        <BsFillCartPlusFill />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cartIcon">
          99+
          <span className="visually-hidden">unread messages</span>
        </span>{" "}
      </Link>
    </Fragment>
  );
}

export default index;
