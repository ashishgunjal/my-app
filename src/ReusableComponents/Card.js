import React from "react";

const Card = React.memo((props) => {
  return (
    <div
      class="card"
      style={{
        width: "50%",
        paddingTop: 6,
        paddingBottom: 6,
        justifyContent: "center",
        paddingLeft: 12,
        paddingRight: 12,
      }}
    >
      {/* <img src="..." class="card-img-top" alt="..." /> */}
      <div style={{ paddingTop: 12, paddingBottom: 12 }}>
        <h5 class="card-title">{props.projectName}</h5>
        <p class="card-text">{props.info}</p>
        <div
          onClick={() => {
            alert("WIP");
          }}
          style={{
            cursor: "pointer",
            position: "absolute",
            bottom: 6,
          }}
        >
          <text style={{ color: "skyblue" }}>More</text>
        </div>
      </div>
    </div>
  );
});

export default Card;
