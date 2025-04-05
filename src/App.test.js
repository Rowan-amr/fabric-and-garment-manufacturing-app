import { render, screen } from "@testing-library/react";
import App from "./header/header";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

// Import components for different pages
import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";
import Services from "./services/services";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/services">services</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Switch>
            <Route path="/contact" component={ContactPage} />
            <Route path="/services" component={Services} />
            <Route path="/" exact component={HomePage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
s;
