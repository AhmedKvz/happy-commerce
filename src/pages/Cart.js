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
        <article className="container">
          <div className="row align-items-center">
            <div className="col-md-10 mx-auto">
              <table className="table table-striped table-hover shadow-lg">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{item.id}</th>
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
                    <td></td>
                    <td></td>
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
        </article>
      </section>
    </>
  );
}

export default Cart;
