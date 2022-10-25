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
            <div className="card hidden lg:flex bg-black shadow-xl w-1/2">
              <figure>
                <img
                  style={{ height: "270px" }}
                  className="w-full"
                  src={react}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-amber-600">
                  Learn React: The Modern Web Programming
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className="text-amber-600">
                  Teaching over 250,000 students on Udemy alone, he's helped
                  tens of thousands of people learn web development. From zero
                  to hero and novice to ninja, he's considered a top teacher by
                  thousands.
                </p>
                <div className="card-actions justify-end text-amber-600">
                  <div className="">
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </div>
                  <div className="badge badge-outline">By Jhon Mosh</div>
                </div>
              </div>
            </div>
            <div className="card w-full md:full lg:w-1/2 bg-black shadow-xl">
              <figure>
                <img
                  style={{ height: "270px" }}
                  className="w-full"
                  src={python}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-amber-600">
                  Learn Python: The Complete Python Programming
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className="text-amber-600">
                  Teaching over 250,000 students on Udemy alone, he's helped
                  tens of thousands of people learn web development. From zero
                  to hero and novice to ninja, he's considered a top teacher by
                  thousands.
                </p>
                <div className="card-actions justify-end text-amber-600">
                  <div className="">
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </div>
                  <div className="badge badge-outline">By Web Hero</div>
                </div>
              </div>
            </div>
          </div>
          <div id="item2" className="carousel-item w-full gap-4">
            <div className="card hidden lg:flex bg-black shadow-xl w-1/2">
              <figure>
                <img
                  style={{ height: "270px" }}
                  className="w-full"
                  src={web}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-amber-600">
                  Learn Web Fundamental with JavaScript
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className="text-amber-600">
                  Teaching over 250,000 students on Udemy alone, he's helped
                  tens of thousands of people learn web development. From zero
                  to hero and novice to ninja, he's considered a top teacher by
                  thousands.
                </p>
                <div className="card-actions justify-end">
                  <div className="">
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </div>
                  <div className="badge badge-outline text-amber-600">
                    By Androw JOhn
                  </div>
                </div>
              </div>
            </div>
            <div className="card bg-black shadow-xl w-full md:w-full lg:w-1/2">
              <figure>
                <img
                  className="w-full"
                  style={{ height: "270px" }}
                  src={robot}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-amber-600">
                  Learn Modern Data Science
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className="text-amber-600">
                  Teaching over 250,000 students on Udemy alone, he's helped
                  tens of thousands of people learn web development. From zero
                  to hero and novice to ninja, he's considered a top teacher by
                  thousands.
                </p>
                <div className="card-actions justify-end text-amber-600">
                  <div className="">
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </div>
          <div id="item3" className="carousel-item w-full gap-4">
            <div className="card hidden lg:flex bg-black shadow-xl w-1/2">
              <figure>
                <img
                  style={{ height: "270px" }}
                  className="w-full"
                  src={datas}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-amber-600">
                  Advance Data Science
                  <div className="badge badge-secondary text-amber-600">
                    NEW
                  </div>
                </h2>
                <p className="text-amber-600">
                  Teaching over 250,000 students on Udemy alone, he's helped
                  tens of thousands of people learn web development. From zero
                  to hero and novice to ninja, he's considered a top teacher by
                  thousands.
                </p>
                <div className="card-actions justify-end text-amber-600">
                  <div className="">
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </div>
                  <div className="badge badge-outline">By Ph Hero</div>
                </div>
              </div>
            </div>
            <div className="card bg-black shadow-xl w-full lg:w-1/2">
              <figure>
                <img
                  style={{ height: "270px" }}
                  className="w-full"
                  src={react}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-amber-600">
                  Learn Advance React
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className="text-amber-600">
                  Teaching over 250,000 students on bootcamp alone, he's helped
                  tens of thousands of people learn web development. From zero
                  to hero and novice to ninja, he's considered a top teacher by
                  thousands.
                </p>
                <div className="card-actions justify-end text-amber-500">
                  <div className="">
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </div>
                  <div className="badge badge-outline">Thohidul Islam</div>
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
