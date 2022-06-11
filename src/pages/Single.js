import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useRef } from "react";
import Images from "../img/images";

function Single({ cart, setCart }) {
  const qunt = useRef(0);
  let params = useParams();
  const [items, setItems] = useState({ ...Images });
  console.log(setCart, "setCart");

  const addToCart = () => {
    let newCartItem = {
      id: items[params?.id].id,
      txt: items[params?.id].txt,
      price: items[params?.id].price,
      quant: qunt.current.value,
      src: items[params?.id].src,
    };
    console.log(newCartItem);
    setCart((prev) => {
      return [...prev, newCartItem];
    });
  };

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
                ref={qunt}
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
              <Link onClick={addToCart} className="button" to="#">
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
