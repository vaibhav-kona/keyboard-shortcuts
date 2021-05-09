import { PureComponent } from "react";
import styled from "styled-components";
import KeyboardShortcuts from "../common/keyboardShortcuts/KeyboardShortcuts";

interface StyledContainerProps {
  isBiggerText: boolean;
  otherBackground: boolean;
}

const StyledContainer = styled.div<StyledContainerProps>`
  height: 200px;
  font-size: ${(props) => (props.isBiggerText ? "48px" : "16px")};
  background-color: ;
  background-color: ${(props) =>
    props.otherBackground ? "lightgreen" : "lightblue"};
`;

interface State {
  isBiggerText: boolean;
  otherBackground: boolean;
}

class Home extends PureComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isBiggerText: false,
      otherBackground: false,
    };
  }

  toggleBiggerText = () => {
    this.setState((prevState: State) => {
      return { isBiggerText: !prevState.isBiggerText };
    });
  };

  toggleBackgroundColor = () => {
    this.setState((prevState: State) => {
      return { otherBackground: !prevState.otherBackground };
    });
  };

  render() {
    const { isBiggerText, otherBackground } = this.state;

    return (
      <>
        <StyledContainer
          otherBackground={otherBackground}
          isBiggerText={isBiggerText}
        >
          Home!
        </StyledContainer>

        <KeyboardShortcuts
          combo="shift+c"
          callback={this.toggleBiggerText}
          description="Toggle bigger text"
        />

        <KeyboardShortcuts
          combo="shift+b"
          callback={this.toggleBackgroundColor}
          description="Toggle background color"
        />
      </>
    );
  }
}

export default Home;
