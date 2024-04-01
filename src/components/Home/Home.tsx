import React from "react";
import { Link } from "react-router-dom";
import style from "./Home.module.scss";

export default function Home() {
  return (
    <div className={style.Container}>
      <Link className={style.Link} to="/random">
        Random
      </Link>
      <span className={style.Separator}>/</span>
      <Link className={style.Link} to="/type/fire">
        Type
      </Link>
    </div>
  );
}
