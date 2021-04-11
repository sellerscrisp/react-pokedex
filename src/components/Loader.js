import React from "react";
import loading from "../loading.gif";

const Loader = () => (
  <div style={{ textAlign: "center", marginTop: "5%" }}>
    <img src={loading} style={{ maxWidth: "350px" }} alt="" />
  </div>
);

export default Loader;
