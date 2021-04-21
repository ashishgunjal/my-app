import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Footer from "./Components/Footer";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />

    //   </header>
    // </div>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Portfolio
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>

              {/* <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li> */}
            </ul>
            <text style={{ paddingRight: 12 }}>Call</text>
            <text style={{ paddingRight: 12 }}>Email</text>
            <text style={{ paddingRight: 12 }}>GitHub</text>
            <text style={{ paddingRight: 12 }}>LinkedIn</text>
            {/* <form class="d-flex">
              <input  
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
      <div className="homeHeight">
        <Dashboard></Dashboard>
        <div className="divPosition">
          <button type="button" style={{}} class="btn btn-primary">
            Explore More
          </button>

          {/* <button>Explore more</button> */}
        </div>
        <Home />
        <div style={{ marginRight: 12, marginLeft: 12 }}>
          <text>Skills</text>
          <div
            style={{
              paddingTop: 12,
              paddingBottom: 12,
              flexDirection: "column",
              display: "flex",
            }}
          >
            <text>Javascript</text>
            <text>React Native</text>
            <text>React JS</text>
          </div>
        </div>

        <div style={{ marginRight: 12, marginLeft: 12 }}>
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
        </div>


      </div>
    </div>
  );
}

export default App;
