import React from "react";

const Card = ({ title, text }) => (
  <div className="card shadow-sm">
    <div className="card-img-top bg-secondary d-flex justify-content-center align-items-center text-white" style={{ height: "200px" }}>
      500 x 325
    </div>
    <div className="card-body text-center">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <button className="btn btn-primary">Find Out More!</button>
    </div>
  </div>
);

export default Card;