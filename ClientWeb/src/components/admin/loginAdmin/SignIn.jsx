import React from 'react'
import { useState } from 'react';
import freeza from "../../assets/freeza.png"

const SignIn = () => {
    const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [Loginview, setLoginView] = useState(false);
  const [users, setUsers] = useState([]);
  const [checkbox, setCheckbox] = useState(false);

  const fetchUsers = () => {
    axios.get("http://localhost:3000/api/admin/users").then((response) => {
      setUsers(response.data);
      setLoginView(returnBoolean);
    });
  };

  function returnBoolean() {
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].username === userName &&
        users[i].password === password &&
        users[i].admin === 1
      ) {
        return true;
      }
    }
    return false;
  }
  return (
    <div className="font-mono bg-gray-400">
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
            <img
              src="https://source.unsplash.com/K4mSJ7kc0As/600x800"
              alt=""
            />
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
                  className="mr-2 leading-tight"
                  type="checkbox"
                  id="checkbox_id"
                  defaultChecked = {checkbox}
                  onChange={(e) => setCheckbox(e.target.checked)}
                />
                <label className="text-sm" for="checkbox_id ">
                  Remember Me
                </label>
              </div>
              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={fetchUsers}
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
  )
}

export default SignIn