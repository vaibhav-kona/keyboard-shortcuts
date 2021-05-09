import { PureComponent } from "react";
import styled from "styled-components";
import KeyboardShortcuts from "./KeyboardShortcuts";

interface StyledContainerProps {
  isBiggerText: boolean;
}

const StyledContainer = styled.div<StyledContainerProps>`
  height: 200px;
  font-size: ${(props) => (props.isBiggerText ? "48px" : "16px")};
`;

interface State {
  isBiggerText: boolean;
}

class Home extends PureComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isBiggerText: false,
    };
  }

  toggleBiggerText = () => {
    this.setState((prevState: State) => {
      return { isBiggerText: !prevState.isBiggerText };
    });
  };

  render() {
    const { isBiggerText } = this.state;

    return (
      <>
        <StyledContainer isBiggerText={isBiggerText}>Home!</StyledContainer>

        <KeyboardShortcuts
          combo="shift+c"
          callback={this.toggleBiggerText}
          description="Toggle bigger text"
        />

        {/* <button type="button" onClick={this.toggleBiggerText}>
          {isBiggerText ? "Normal" : "Bigger"}
        </button> */}
        <div>
          {isBiggerText
            ? "Bigger text is displayed"
            : "Normal text is displayed"}
        </div>
      </>
    );
  }
}

export default Home;
