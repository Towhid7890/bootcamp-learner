import React from "react";
import react from "../../images/react1.png";
import datas from "../../images/datas.jpg";
import robot from "../../images/robot.jpg";
import python from "../../images/python.jpg";
import web from "../../images/web.jpg";
import { Link } from "react-router-dom";
const HomeCourse = () => {
  return (
    <div className="bg-white py-5">
      <div className="py-5">
        <h1 className="text-center font-bold text-4xl">
          Explore All of Our Courses
        </h1>
      </div>
      <div className="py-5">
        <div className="carousel mx-auto w-4/5">
          <div id="item1" className="carousel-item w-full gap-4">
            <div className="card bg-black shadow-xl w-1/2">
              <figure>
                <img
                  style={{ height: "270px" }}
                  className="w-full"
                  src={react}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
            <div className="card w-1/2 bg-black shadow-xl">
              <figure>
                <img
                  style={{ height: "270px" }}
                  className="w-full"
                  src={python}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </div>
          <div id="item2" className="carousel-item w-full gap-4">
            <div className="card bg-black shadow-xl w-1/2">
              <figure>
                <img
                  style={{ height: "270px" }}
                  className="w-full"
                  src={web}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
            <div className="card bg-black shadow-xl w-1/2">
              <figure>
                <img
                  className="w-full"
                  style={{ height: "270px" }}
                  src={robot}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </div>
          <div id="item3" className="carousel-item w-full gap-4">
            <div className="card bg-black shadow-xl w-1/2">
              <figure>
                <img
                  style={{ height: "270px" }}
                  className="w-full"
                  src={datas}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
            <div className="card bg-black shadow-xl w-1/2">
              <figure>
                <img
                  style={{ height: "270px" }}
                  className="w-full"
                  src={react}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full py-4 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
        </div>
      </div>
      <div className="text-center py-4">
        <Link to="/courses">
          <button className="btn btn-primary">Show All Courses</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeCourse;
