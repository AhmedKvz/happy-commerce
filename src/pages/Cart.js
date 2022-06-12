import React from "react";
import { Link } from "react-router-dom";

function Cart({ cart, setCart }) {
  const removeFromCart = (index) => {
    let permCart = [...cart];
    permCart.splice(index, 1);
    setCart(permCart);
  };
  return (
    <>
      <section className="single py-5">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr className="col-sm-8 fs-6">
                <th className="fs-6" scope="col p-0">
                  Image
                </th>
                <th className="fs-6" scope="col">
                  Title
                </th>
                <th className="fs-6" scope="col">
                  Quantity
                </th>
                <th className="fs-6" scope="col">
                  Price
                </th>
                <th className="fs-6" scope="col">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="col">
                      <img src={item.src} height="30px" alt="..." />
                    </td>
                    <td className="col">{item.txt}</td>
                    <td className="col">{item.quant}</td>
                    <td className="col">${item.price}</td>
                    <td>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="btn btn-danger"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}

              <tr>
                <th scope="row"></th>
                <td className="col">
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      setCart([]);
                    }}
                  >
                    ClearCart
                  </button>
                </td>

                <td className="col">Total:</td>
                <td className="col">
                  $
                  {cart.reduce((acc, cur) => {
                    return acc + cur.price * cur.quant;
                  }, 0)}
                </td>
              </tr>
            </tbody>
          </table>
          <Link to="#" className="button mt-4">
            Payment process
          </Link>
        </div>

        {/* {/* <article className="container">
          <div className="row align-items-center table-responsive">
            <div className="col-md-10 mx-auto">
              <table className="table table-striped table-hover shadow-lg">
                <thead>
                  <tr className="col-sm-8">
                    <th scope="col p-0">Image</th>
                    <th scope="col p-0">Title</th>
                    <th scope="col p-0">Quantity</th>
                    <th scope="col p-0">Price</th>
                    <th scope="col p-0">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <img src={item.src} height="30px" alt="..." />
                        </td>
                        <td>{item.txt}</td>
                        <td>{item.quant}</td>
                        <td>${item.price}</td>
                        <td>
                          <button
                            onClick={() => removeFromCart(index)}
                            className="btn btn-danger"
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    );
                  })}

                  <tr>
                    <th scope="row"></th>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          setCart([]);
                        }}
                      >
                        ClearCart
                      </button>
                    </td>

                    <td>Total:</td>
                    <td>
                      $
                      {cart.reduce((acc, cur) => {
                        return acc + cur.price * cur.quant;
                      }, 0)}
                    </td>
                  </tr>
                </tbody>
              </table>
              <Link to="" className="button mt-4">
                Payment process
              </Link>
            </div>
          </div>
        </article> */}
      </section>
    </>
  );
}

export default Cart;
