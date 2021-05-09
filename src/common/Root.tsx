import { connect, ConnectedProps } from "react-redux";
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

const PageContainer = styled.div`
  padding: 10px 20px 10px;
`;

const ComboContainer = styled.div`
  display: flex;
`;

const ShortcutCombo = styled.div`
  font-weight: 600;
  margin-right: 20px;
`;

const Root = ({ keyboardShortcutsReducer }: PropsFromRedux) => {
  const { keyboardShortcuts } = keyboardShortcutsReducer;
  const location = window.location.pathname;
  const keyboardShortcutsForLocation = keyboardShortcuts[location] || {};

  return (
    <Router>
      <PageContainer>
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

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <h3>Shortcuts for the page</h3>
        <div>
          {Object.keys(keyboardShortcutsForLocation).map((key) => {
            return (
              <ComboContainer key={key}>
                <ShortcutCombo>{key}</ShortcutCombo>
                <div>{keyboardShortcutsForLocation[key].description}</div>
              </ComboContainer>
            );
          })}
        </div>
      </PageContainer>
    </Router>
  );
};

const mapStateToProps = (state: any) => {
  return {
    keyboardShortcutsReducer: state.keyboardShortcutsReducer,
  };
};

const mapDispatchToProps = () => {
  return {};
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Root);
