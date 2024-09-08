import React from "react";
import { Link } from "react-router-dom";

const OldWebsite: React.FC = () => {
  return (
    <div className="old-website">
      {/* Use iframe to include the old HTML */}
      <iframe
        src="/oldWebsite/oldWebsite.html"
        title="Old Website"
        frameBorder="0"
        style={{ width: "100%", height: "100vh" }}
      ></iframe>
      {/* <button>
        <Link to="/">Back to new website</Link>
      </button> */}
    </div>
  );
};

export default OldWebsite;
