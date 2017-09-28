var React = require("react");
var ReactDOM = require("react-dom");
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class Main extends React.Component {
  render() {
    return React.createElement(
      "a", {
        href: "#",
        onTouchTap: this.handleTouchTap,
        onClick: this.handleClick
      },
      "Tap Me"
    );
  }

  handleClick(e) {
    console.log("click", e);
  }

  handleTouchTap(e) {
    console.log("touchTap", e);
  }
}

ReactDOM.render(React.createElement(Main), document.getElementById("container"));
