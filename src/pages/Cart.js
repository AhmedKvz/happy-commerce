import React from "react";
import { Link } from "react-router-dom";
function Cart({ cart }) {
  return (
    <>
      <section className="single py-5">
        <article className="container">
          <div className="row align-items-center">
            <div className="col-md-10 mx-auto">
              <table className="table table-striped table-hover shadow-lg">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((cart, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{cart.txt}</td>
                        <td>{cart.quant}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <Link to="#" className="button mt-4">
                Payment process
              </Link>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default Cart;
