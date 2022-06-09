import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Images from "../img/images";

function Single() {
  const [items, setItems] = useState({ ...Images });
  let params = useParams();

  let options = [];
  for (let i = 0; i < items[params?.id].quant; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return (
    <>
      {/* <!-- single --> */}
      <section className="single py-5">
        <article className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={`../` + items[params?.id].src}
                alt=""
                className="img-fluid border shadow-lg"
              />
            </div>
            <div className="col-md-6">
              <div className="price d-flex justify-content-between">
                <h5>{items[params?.id].txt}</h5>
                <h5>{items[params?.id].price}</h5>
              </div>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                {options}
              </select>
              <p className="py-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                <br />
                Tenetur ut aliquid dolore a nobis sapiente sunt minus eum
                perspiciatis suscipit? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. <br />
                <br />
                Tenetur ut aliquid dolore a nobis sapiente sunt minus eum
                perspiciatis suscipit?
              </p>
              <Link className="button" to="#">
                Add to cart
              </Link>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default Single;
