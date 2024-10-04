import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <header>
        <div className="container">
          <Link>Workout Buddy</Link>
        </div>
      </header>
    </div>
  );
}
