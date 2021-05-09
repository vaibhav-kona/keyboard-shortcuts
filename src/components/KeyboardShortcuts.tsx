import { PureComponent } from "react";
import hotkeys from "hotkeys-js";

interface Props {
  combo: string;
  description: string;
  callback(): void;
}

interface State {
  listener: any;
}

class KeyboardShortcuts extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      listener: null,
    };
  }

  componentDidMount() {
    const { combo, callback } = this.props;
    hotkeys(combo, callback);
  }

  componentWillUnmount() {
    hotkeys.unbind();
  }

  render() {
    return <></>;
  }
}

export default KeyboardShortcuts;
