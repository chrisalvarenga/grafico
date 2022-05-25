import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light " style={{ background: '#49b1c9' }}>
      <div class="container-fluid text">
        <a class="navbar-brand" href="#">Menu</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item px-2">
              <a class="nav-link active" aria-current="page" href="#">User Name</a>
            </li>
          </ul>
        </div>
        <ul class="navbar-nav">
          <li class="nav-item px-4">
            <a class="nav-link" href="#">Sales Report</a>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;