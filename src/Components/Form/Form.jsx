import React from "react";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
const Form = () => {
  const [login, setLogIn] = useState(true);
  const [form, setform] = useState({ email: "", password: "" });

  const handlingSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setform({ email: "", password: "" });
  };
  const handlingChange = (e) => {
    const { value, name } = e.target;
    setform((prevform) => {
      return { ...prevform, [name]: value };
    });
  };
  return (
    <div className="main-form-11">
      {login ? (
        <div className="form-11">
          <div className="top-form-11">
            <h2 className="type-11">Log In</h2>
            <div className="icon-11">
              <h3>
                <BsFacebook className="facebook" />
              </h3>
              <h3>
                <BsTwitter className="twitter" />
              </h3>
              <h3>
                <FcGoogle />
              </h3>
            </div>
          </div>

          <div className="dawn-form-11">
            <form onSubmit={handlingSubmit}>
              <div className="f-form-11">
                <input
                  type="email"
                  placeholder="Your email"
                  name="email"
                  value={form.email}
                  onChange={handlingChange}
                />
                <hr />

                <input
                  type="password"
                  placeholder="Your password"
                  name="password"
                  value={form.password}
                  onChange={handlingChange}
                />
                <hr />
              </div>

              <div className="m-form-11">
                <h3>
                  Forgot <span>Password?</span>{" "}
                </h3>
              </div>

              <div className="L-form-11">
                <div className="log-in-11">
                  <button type="submit">Log In</button>
                </div>
                <h2>
                  Not have an Account ?{" "}
                  <button
                    onClick={() => {
                      setLogIn(!login);
                    }}
                  >
                    Sign Up
                  </button>
                </h2>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="form-11">
          <div className="second-form-11">
            <h2 className="type-11">Sign Up</h2>
            <div className="icon-11">
              <h3>
                <BsFacebook className="facebook" />
              </h3>
              <h3>
                <BsTwitter className="twitter" />
              </h3>
              <h3>
                <FcGoogle />
              </h3>
            </div>
          </div>

          <div className="dawn-form-11">
            <form onSubmit={handlingSubmit}>
              <div className="f-form-11">
                <input
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={form.email}
                  onChange={handlingChange}
                />
                <hr />

                <input
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={form.password}
                  onChange={handlingChange}
                />
                <hr />
              </div>

              <div className="m-form-11">
                <h3>
                  Enter <span>Password?</span>{" "}
                </h3>
              </div>

              <div className="L-form-11">
                <div className="log-in-11">
                  <button type="submit">Sign Up</button>
                </div>

                <h2>
                  Already have Account ?{" "}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setLogIn(!login);
                    }}
                  >
                    Log In
                  </button>
                </h2>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
