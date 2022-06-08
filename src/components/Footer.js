import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <h4>About</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              exercitationem tenetur sint perferendis eaque architecto?
            </p>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4>Top products</h4>
            <ul className="flex-column list-unstyled">
              <Link to={"#"}>
                <li>Jeans</li>
              </Link>
              <Link to={"#"}>
                <li>Bags</li>
              </Link>
              <Link to={"#"}>
                <li>Accessories</li>
              </Link>
              <Link to={"#"}>
                <li>Phones</li>
              </Link>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4>Quick links</h4>
            <ul className="flex-column list-unstyled">
              <li>
                <Link to={"/Home"}>Home</Link>
              </li>
              <li>
                <Link to={"/Home"}>Blog</Link>
              </li>
              <li>
                <Link to={"/Home"}>Shop</Link>
              </li>
              <li>
                <Link to={"/Home"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <Link to={"/"}>
              <img
                className="img-fluid rounded shadow-lg border border-white"
                src="img/logo.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
