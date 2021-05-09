import { PureComponent } from "react";
import styled from "styled-components";
import KeyboardShortcuts from "../common/keyboardShortcuts/KeyboardShortcuts";

interface StyledContainerProps {
  isDarkBackground: boolean;
}

const StyledContainer = styled.div<StyledContainerProps>`
  height: 200px;
  background-color: ${(props) =>
    props.isDarkBackground ? "#073642" : "#fdf6e3"};

  color: ${(props) => (props.isDarkBackground ? "#fdf6e3" : "#073642")};
`;

interface State {
  isDarkBackground: boolean;
}

class About extends PureComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isDarkBackground: false,
    };
  }

  toggleDarkBackground = () => {
    this.setState((prevState: State) => {
      return { isDarkBackground: !prevState.isDarkBackground };
    });
  };

  render() {
    const { isDarkBackground } = this.state;

    return (
      <>
        <StyledContainer isDarkBackground={isDarkBackground}>
          Welcome!
        </StyledContainer>
        <KeyboardShortcuts
          combo="shift+c"
          callback={this.toggleDarkBackground}
          description="Toggle background color"
        />
      </>
    );
  }
}

export default About;
