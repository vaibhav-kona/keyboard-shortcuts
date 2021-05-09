import { PureComponent } from "react";
import hotkeys from "hotkeys-js";
import { Dispatch } from "redux";
import { connect, ConnectedProps } from "react-redux";
import keyboardShortcutsActions from "./actions";

interface Props extends PropsFromRedux {
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
    const { combo, description, callback, addKeyboardShortcut } = this.props;

    hotkeys(combo, callback);

    addKeyboardShortcut(combo, description);
  }

  componentWillUnmount() {
    hotkeys.unbind();
  }

  render() {
    return <></>;
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addKeyboardShortcut: (keyCombo: string, description: string) =>
      dispatch(
        keyboardShortcutsActions.addKeyboardShortcut(keyCombo, description)
      ),

    deleteKeyboardShortcut: (keyCombo: string) =>
      dispatch(keyboardShortcutsActions.deleteKeyboardShortcut(keyCombo)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(KeyboardShortcuts);
