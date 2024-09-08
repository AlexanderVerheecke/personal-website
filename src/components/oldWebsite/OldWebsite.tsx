import React from "react";

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
    </div>
  );
};

export default OldWebsite;
