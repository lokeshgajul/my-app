import React from "react";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <a class="navbar-brand" href="#">
          TextUtils
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              {/* <Link class="nav-link" to="/"> */}
              {/* Home <span class="sr-only">(current)</span> */}
              {/* Home */}
              {/* </Link> */}
              <a class="nav-link" href="#">
                {/* Home <span class="sr-only">(current)</span> */}
                Home
              </a>
            </li>
            <li class="nav-item">
              {/* <Link class="nav-link" to="/about">
                About
              </Link> */}
              {/* <a class="nav-link" href="/about">
                About
              </a> */}
            </li>
          </ul>
          <div
            class={`form-check form-switch text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
          >
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
              onClick={props.toggleMode}
            />
            <label class="form-check-label" for="flexSwitchCheckChecked">
              {props.mode} Mode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}
