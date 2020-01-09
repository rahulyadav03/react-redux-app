import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Plural sight adminstration</h1>
    <p>React redux app</p>
    <Link to="about" className="btn btn-primary lg">
      Learn More
    </Link>
  </div>
);

export default HomePage;
