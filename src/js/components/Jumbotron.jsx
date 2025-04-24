import React from "react";

const Jumbotron = () => (
  <div className="jumbotron bg-white py-5 px-4 my-5 rounded shadow-sm">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-8 text-start">
          <h1 className="display-4 fw-bold">A Warm Welcome!</h1>
          <p className="lead text-secondary mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam,
            eligendi, in quo sunt possimus.
          </p>
          <button className="btn btn-primary mt-4">Call to action!</button>
        </div>
      </div>
    </div>
  </div>
);

export default Jumbotron;