import React from "react";
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const Registration = () => {
  const {
    createUser,
    updateUserDetails,
    updateName,
    googleLogin,
    gitHubLogIn,
  } = useContext(AuthContext);
  // navigate
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
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
          updateName(name, photoURL).then(() => {
            toast.success("Successfylly");
            navigate(from, { replace: true });
          });
        })
        .catch((error) => {
          form.reset();
          toast.error(error.message);
        });
    }
  };
  const gitHubProvider = new GithubAuthProvider();
  const provider = new GoogleAuthProvider();
  const handelGoogleSingIn = () => {
    googleLogin(provider)
      .then((result) => {
        navigate(from, { replace: true });
        toast.success("Login Success");
      })
      .catch((error) => {
        console.error(error);

        toast.error(error.message);
      });
  };
  const handelGithubLogIn = () => {
    gitHubLogIn(gitHubProvider)
      .then((result) => {
        navigate(from, { replace: true });
        toast.success("Login Success");
      })
      .catch((error) => {
        console.error(error);

        toast.error(error.message);
      });
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
    <div className="hero min-h-screen bg-base-200 mt-3">
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
        <div className="flex flex-col items-center pb-8 px-8">
          <button onClick={handelGoogleSingIn} className="btn  btn-primary ">
            <FaGoogle className="mr-2" />
            Login with Google
          </button>
          <p className="text-xl">Or</p>
          <button onClick={handelGithubLogIn} className="btn">
            <FaGithub className="mr-2" />
            Login with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
