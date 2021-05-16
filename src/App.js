import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div>
      <Header />
      <div className="homeHeight">
        <Dashboard />
        {/* <div className="divPosition">
          <a href="/Feedback" type="button"  style={{}} class="btn btn-primary">
            Explore More
          </a>

        </div> */}
        <Home />

        <Skills />

        {/* <div style={{ marginRight: 12, marginLeft: 12 }}>
          <text>Blogs</text>
          <div
            style={{
              paddingTop: 12,
              paddingBottom: 12,
              flexDirection: "column",
              display: "flex",
            }}
          >
            <text>Link1</text>
            <text>React Native</text>
            <text>React JS</text>
          </div>
        </div>

        <div style={{ marginRight: 12, marginLeft: 12 }}>
          <text>Contact</text>
          <div
            style={{
              paddingTop: 12,
              paddingBottom: 12,
              flexDirection: "column",
              display: "flex",
            }}
          >
            <text>Mobile</text>
            <text>Email</text>
            <text>Github</text>
          </div>
        </div> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
