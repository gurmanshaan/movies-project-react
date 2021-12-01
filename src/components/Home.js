import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="header">
        <div className="tab">
          <div className="firsttab">
            <Link to="/tabOne">
              <button className="tabBtn">Tab One</button>
            </Link>
          </div>
          <div className="secondtab">
            <Link to="/tabTwo">
              <button className="tabBtn">Tab Two</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
