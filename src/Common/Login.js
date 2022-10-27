import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
const Login = () => {
  const { googleLogin, emailPasswordLogIn, gitHubLogIn } =
    useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
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
  const hendelEmailPasswordSingIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    emailPasswordLogIn(email, password)
      .then((result) => {
        form.reset();
        navigate(from, { replace: true });
        toast.success("Login Success");
      })
      .catch((error) => {
        form.reset();

        toast.error(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200 mt-3">
      <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        <form onSubmit={hendelEmailPasswordSingIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="eg: you@gmail.com"
              name="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="enter password"
              className="input input-bordered"
            />
            <label className="label">
              <p>
                Don't have Account?
                <Link
                  to={"/registration"}
                  className="btn btn-sm hover:btn-accent ml-2"
                >
                  Registration
                </Link>
              </p>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
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

export default Login;
