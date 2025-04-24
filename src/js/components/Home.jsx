import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

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