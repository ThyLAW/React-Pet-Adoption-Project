import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("pink");

  return (
    //everything inside of this is wrapped in aprovider and now everything can access this context. All of the components imported above can see what the theme is at the moment.
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>Adopt me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
        ;
      </div>
    </ThemeContext.Provider>
  );
};

// create an instance of your element

// old way
// ReactDOM.render(React.createElement(App), document.getElementById("root"));

// new way
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
