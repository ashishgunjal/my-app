import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* <text className="textWelcome">Welcome</text> */}
      <div className="divPersonal">
        <div className="img-circular"></div>
        <p className="textFullName">Ashish Gunjal</p>
        <p className="textDesignation">Software Engineer </p>
        {/* <div style={{ flexDirection: "row", display: "flex" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <ion-icon name="globe-outline" size="large"></ion-icon>
            <text style={{ fontSize: 20, marginLeft: 12 }}>LinkedIn</text>
          </div>
          <div
            style={{ cursor: "progress" }}
            onClick={() => {
              alert("test");
            }}
            style={{ display: "flex", marginLeft: 12, alignItems: "center" }}
          >
            <ion-icon name="globe-outline" size="large"></ion-icon>
            <text style={{ fontSize: 20, marginLeft: 12 }}>GitHub</text>
          </div>
        </div> */}
      </div>
      <div className="imagBackgrouns" />
    </div>
  );
};

export default Dashboard;
