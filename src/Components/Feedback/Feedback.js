import React from "react";
import "./Feedback.css";
import { useHistory } from "react-router-dom";
const Feedback = () => {
  var history = useHistory();
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>#Feedback</h2>
      <text
        style={{
          display: "flex",
          width: "60%",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 22,
          fontSize: 22,
          alignSelf: "center",
        }}
      >
        Your valueable inputs are important...!!!
      </text>

      <input className="classInput" type="text" placeholder="Name" />

      <input
        className="classInput"
        type="text"
        style={{ marginTop: 22 }}
        placeholder="Address"
      />

      <textarea
        className="classInput"
        type="text"
        style={{ marginTop: 22 }}
        placeholder="Describe my work"
      />

      <button className="bttn-csss" style={{ marginTop: 23 }} href="/about">
        Submit
      </button>

      <div
        onClick={() => history.goBack()}
        style={{
          cursor: "pointer",
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: 12,
          left: 13,
          zIndex: 12,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          class="bi bi-arrow-left-short"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
          />
        </svg>
        <text style={{ fontSize: 17, marginLeft: 4 }}> Back</text>
      </div>
    </div>
  );
};

export default Feedback;
