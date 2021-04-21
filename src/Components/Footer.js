import React from "react";

const Footer = React.memo((props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <text>@AshishGunjal 2021</text>
    </div>
  );
});

export default Footer;
