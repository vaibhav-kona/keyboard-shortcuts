import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import About from "../components/About";
import Home from "../components/Home";

const StyledMenu = styled.ul`
  list-style: none;
  display: flex;
`;

const StyledMenuItme = styled.li`
  margin-right: 8px;
`;

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          <StyledMenu>
            <StyledMenuItme>
              <Link to="/">Home</Link>
            </StyledMenuItme>
            <StyledMenuItme>
              <Link to="/about">About</Link>
            </StyledMenuItme>
          </StyledMenu>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Root;
