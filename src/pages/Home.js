import React from "react";
import Slide1 from "../img/slide_1.jpg";
import Slide2 from "../img/slide_2.jpg";
import images from "../img/images.js";
function Home() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Slide1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-end">
              <p className="lead">Women collection</p>
              <h2 className="display-2 fw-bold">
                Show
                <span className="">
                  your <br />
                  personal
                </span>
                style
              </h2>
              <p>
                Lorem ipsum dolor sit, amet <br />
                consectetur adipisicing elit. Voluptatibus, impedit?
              </p>
              <button href="" className="button">
                View collection
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Slide2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-start">
              <p className="lead">Man collection</p>
              <h2 className="display-2 fw-bold">
                Show
                <span>
                  your <br />
                  personal
                </span>
                style
              </h2>
              <p>
                Lorem ipsum dolor sit, amet <br />
                consectetur adipisicing elit. Voluptatibus, impedit?
              </p>
              <button href="" className="button">
                View collection
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <!-- products --> */}
      <section className="products py-5">
        <article className="container">
          <div className="row">
            {images.map((image, index) => {
              return (
                <div className="col-md-4 col-sm-6" key={index}>
                  <div className="card">
                    <div className="holder">
                      <img src={image.src} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                      <div className="price d-flex justify-content-between">
                        <h5 className="card-title">{image.txt}</h5>
                        <h5>{image.price}</h5>
                      </div>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="single.html" className="button">
                        Shop now
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </section>

      {/* <!-- about --> */}
      <section className="about py-5 bg-light">
        <article className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 text-center">
              <div className="border p-4 border-dark rounded">
                <i className="fa-solid fa-hand-holding-dollar"></i>
                <h5 className="fw-bolder my-2">Money back guarantee</h5>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <div className="border p-4 border-dark rounded">
                <i className="fa-solid fa-truck"></i>
                <h5 className="fw-bolder my-2">Free delivery</h5>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <div className="border p-4 border-dark rounded">
                <i className="fa-solid fa-headset"></i>
                <h5 className="fw-bolder my-2">Always support</h5>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <div className="border p-4 border-dark rounded">
                <i className="fa-solid fa-credit-card"></i>
                <h5 className="fw-bolder my-2">Secure payments</h5>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="discoverOff d-flex align-items-center">
        <article className="container text-end">
          <p className="lead">Women collection</p>
          <h2 className="display-2 fw-bold">50% OFF</h2>
          <button href="" className="button mb-4">
            Discover now
          </button>
          <p>Limited time offer</p>
        </article>
      </section>
    </>
  );
}

export default Home;
