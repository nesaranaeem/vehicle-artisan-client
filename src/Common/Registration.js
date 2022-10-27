import React from "react";
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
const Registration = () => {
  const { createUser, updateUserDetails } = useContext(AuthContext);

  const handelRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmpassword = form.confirmpassword.value;
    if (confirmpassword !== password) {
      toast.error("Confirm password is not same as your password");
    } else {
      createUser(email, password)
        .then((result) => {
          userProfileUpdate(name, photoURL);
          form.reset();

          toast.success("Registration Success");
        })
        .catch((error) => {
          form.reset();
          toast.error(error.message);
        });
    }
  };
  const userProfileUpdate = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserDetails(profile)
      .then((result) => {})
      .catch((error) => {});
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        <form onSubmit={handelRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="eg: nesar ahmed"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="eg: https://link.com/image.jpg"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="eg: you@gmail.com"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirmpassword"
              placeholder="same as your password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <p>
                Already Have an Account?{" "}
                <Link to={"/login"} className="link link-primary">
                  Login
                </Link>
              </p>
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
