import React, { Component } from "react";

const array = [
  { id: 1, name: "What's new in React Native 0.64" },
  { id: 2, name: "Error Boundries in React" },
  { id: 3, name: "Animations in React Native" },
  { id: 4, name: "Bottom Lightweight Popup in Rect Native" },
];

const Skills = () => {
  return (
    <div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          // backgroundColor: "red",
          marginLeft: 12,
          marginTop: 12,
        }}
      >
        <text style={{ fontSize: 28, fontFamily: "sans-serif" }}>#Blogs</text>
      </div>
      {array.map((item, i) => {
        return (
          <div
            class="card"
            style={{
              cursor: "pointer",
              marginLeft: 12,
              marginRight: 12,
              marginTop: 12,
              //   maxWidth: "860px",
              marginBottom: 12,
            }}
            onClick={() => {
              alert(item.name + " is WIP");
            }}
          >
            <div class="card-header">#Blog {item.id}</div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>{item.name}</p>
                <footer class="blockquote-footer">
                  click here to explore more about this blog
                  {/* <cite title="Source Title">Source Title</cite> */}
                </footer>
              </blockquote>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
