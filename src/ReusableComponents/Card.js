import React from "react";

const Card = React.memo((props) => {
  return (
    <div
      class="card"
      style={{
        width: "50%",
        paddingTop: 12,
        paddingBottom: 12,
        justifyContent: "center",
        paddingLeft: 12,
        paddingRight: 12,
        
      }}
    >
      {/* <img src="..." class="card-img-top" alt="..." /> */}
      <div class="">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
});

export default Card;
