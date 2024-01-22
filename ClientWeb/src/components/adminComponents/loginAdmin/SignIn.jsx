import React from "react";
import { useState } from "react";
import freeza from "../../../assets/freeza.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [Loginview, setLoginView] = useState(false);
  const [users, setUsers] = useState([]);
  const [checkbox, setCheckbox] = useState(false);
  console.log(userName, password, Loginview);
  const navigation = useNavigate();
  const handleLogin = async () => {
    try {
      // Sign in using Firebase Authentication
      await signInWithEmailAndPassword(auth, userName, password);

      // Check if the signed-in user has admin privileges (customize this based on your user structure)
      const currentUser = auth.currentUser;
      const isAdmin =
        currentUser && currentUser.email === "azizabenhalima@yahoo.fr";

      if (isAdmin) {
        // User is an admin, do something here
        console.log("Admin signed in!");
        setLoginView(true);
        navigation("/dashboard");
      } else {
        // User is not an admin, handle accordingly
        console.log("Not an admin");
        setLoginView(false);
      }
    } catch (error) {
      console.error("Sign-in error", error.message);
    }
  };

  return (
    <div className="font-mono bg-red-50 ">
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full h-auto   hidden lg:block lg:w-1/2 bg-cover rounded-l-lg mt-32 ml-9 ">
              <div className=" bg-pink-200 w-48 rounded-full align-middle justify-center shadow-2xl">
                <img className="ml-4 " src={freeza} alt="Freeza" />
              </div>
              <p className="mr-56 mt-8 text-green-500 text-5xl">FreeZa</p>
            </div>

            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    for="username"
                  >
                    Username
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p className="text-xs italic text-red-500">
                    Please choose a password.
                  </p>
                </div>
                <div className="mb-4">
                  <input
                    className="mr-2 leading-tight accent-pink-500 mx-1"
                    type="checkbox"
                    id="checkbox_id"
                    checked={checkbox}
                    defaultChecked={checkbox}
                    onChange={(e) => setCheckbox(e.target.checked)}
                  />
                  <label className="text-sm" for="checkbox_id ">
                    Remember Me
                  </label>
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-red-400 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleLogin}
                  >
                    sign in
                  </button>
                </div>
                <hr className="mb-6 border-t" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
