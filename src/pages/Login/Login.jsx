import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { auth } from "../../firebase/firebase.config";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { loginWithEmailPassword, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log("You clicked submit." + email + password);

    loginWithEmailPassword(email, password)
      .then(() => {
        toast.success("Successfully logged in");
        form.reset();
        navigate(location?.state || "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("Successfully logged in");
        const user = {
          name: auth?.currentUser?.displayName,
          email: auth?.currentUser?.email,
          photoURL: auth?.currentUser?.photoURL,
        };

        // POST request to backend
        fetch("http://lcalhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              toast.success("User added successfully!");
            } else {
              console.error("User already exists in database!");
            }
          });
        navigate(location?.state || "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: "green",
              color: "#fff",
            },
          },
          error: {
            style: {
              background: "red",
              color: "#fff",
            },
          },
        }}
      />
      <Helmet>
        <title>Learnistry | Login</title>
      </Helmet>
      <div className="flex w-full overflow-hidden rounded-xl shadow-md h-full py-6">
        {/* Design Side */}
        <div className="relative hidden items-center justify-center md:flex md:w-[50%]">
          <div className="w-[80%]">{/* img */}</div>
        </div>

        {/* Form Side */}
        <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%] dark:bg-zinc-900">
          <h2 className="pb-8 text-center text-3xl font-semibold tracking-tight text-purple-600">
            Sign In
          </h2>

          <form
            onSubmit={handleLogin}
            className="flex w-full flex-col items-center justify-center gap-4"
          >
            <input
              className="w-[80%] rounded-lg border border-purple-600 bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-600/50 md:w-[60%] dark:text-zinc-400"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
            <input
              className="w-[80%] rounded-lg border border-purple-600 bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-600/50 md:w-[60%] dark:text-zinc-400"
              type="password"
              placeholder="Password"
              name="password"
              required
            />
            <p className="text-[14px] text-gray-400">
              Do not have an account?{" "}
              <a href="/register" className="text-purple-600">
                Create one
              </a>
            </p>
            <input
              type="submit"
              className="uppercase w-[80%] rounded-lg bg-purple-600 px-6 py-2 font-medium text-white outline-none hover:bg-purple-600 md:w-[60%]"
            />
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center px-8">
            <hr className="flex-1 border-purple-600" />
            <div className="mx-4 text-purple-600">OR</div>
            <hr className="flex-1 border-purple-600" />
          </div>

          {/* Sign in with Google */}
          <button
            onClick={handleGoogleSignIn}
            className="group mx-auto flex h-[50px] w-fit items-center overflow-hidden rounded-full shadow-md outline-none ring-1 ring-purple-600"
          >
            <div className="relative z-20 flex h-full items-center bg-purple-600 px-4 text-lg text-white duration-300 group-hover:bg-transparent group-hover:text-purple-600">
              Sign in with
            </div>
            <span className="flex h-full items-center px-4 text-xl font-bold text-purple-600 duration-300 group-hover:bg-purple-600 group-hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="size-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
