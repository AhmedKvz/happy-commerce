import React from "react";
import { Link } from "react-router-dom";

function Single() {
  return (
    <>
      {/* <!-- single --> */}
      <section class="single py-5">
        <article class="container">
          <div class="row">
            <div class="col-md-6">
              <img
                src="img/product1.jpg"
                alt=""
                class="img-fluid border shadow-lg"
              />
            </div>
            <div class="col-md-6">
              <div class="price d-flex justify-content-between">
                <h5>Sunglasses</h5>
                <h5>100$</h5>
              </div>
              <select class="form-select" aria-label="Default select example">
                <option selected>Quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <p class="py-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                <br />
                Tenetur ut aliquid dolore a nobis sapiente sunt minus eum
                perspiciatis suscipit? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. <br />
                <br />
                Tenetur ut aliquid dolore a nobis sapiente sunt minus eum
                perspiciatis suscipit?
              </p>
              <Link class="button" to="#">
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
