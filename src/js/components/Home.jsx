import React from "react";

const Navbar = () => (
  <nav className="bg-dark p-4 text-white d-flex justify-content-between">
  </nav>
);

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

const App = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="container mb-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <div className="col">
            <Card title="Card title" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
          </div>
          <div className="col">
            <Card title="Card title" text="Explicabo magni sapiente, tempore debitis beatae culpa natus architecto." />
          </div>
          <div className="col">
            <Card title="Card title" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
          </div>
          <div className="col">
            <Card title="Card title" text="Explicabo magni sapiente, tempore debitis beatae culpa natus architecto." />
          </div>
        </div>
      </div>
      <footer className="text-center p-4 bg-dark text-white">
        Copyright © Your Website 2019
      </footer>
    </div>
  );
};

export default App;

