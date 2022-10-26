import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { MyContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
const CheckOut = () => {
  const details = useLoaderData();
  const { user } = useContext(MyContext);
  const handleToast = () => {
    toast.success("Thanks for order");
  };
  return (
    <div>
      <h2 className="text-2xl text-amber-600 text-center">
        Hi {user?.displayName} thanks for Select: {details.title}
      </h2>
      <div className="hero ">
        <div className="hero-content">
          <div className="card shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  readonly
                  value={user?.email}
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  readonly
                  value={user?.displayName}
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button onClick={handleToast} className="btn btn-primary">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
