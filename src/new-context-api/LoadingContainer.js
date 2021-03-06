import React, { Children, Component } from "react";
import PropTypes from "prop-types";

/*
 * Create component.
 */

class LoadingContainer extends Component {
  render() {
    const { drizzleState } = this.props;
    const initialized = drizzleState
      ? drizzleState.drizzleStatus.initialized
      : false;
    if (!initialized) {
      if (this.props.initializingComp) {
        return this.props.initializingComp;
      }
      return (
        <main className="container loading-screen">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1>⚙️ Initializing... </h1>
              Please make sure you have the Chrome/FireFox extension MetaMask,
              or are using a dedicated Ethereum browser such as Mist or Parity
              and that your browser is pointed at the correct network.
            </div>
          </div>
        </main>
      );
    }

    if (initialized && Object.keys(drizzleState.accountBalances).length === 0) {
      if (this.props.accessDeniedComp) {
        return this.props.accessDeniedComp;
      }
      return (
        <main className="container loading-screen">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1>🦊</h1>
              <p>
                <strong>{"We can't find any Ethereum accounts!"}</strong> Please
                make sure your account is unlocked.
              </p>
            </div>
          </div>
        </main>
      );
    }
    if (initialized) {
      return Children.only(this.props.children);
    }
  }
}

LoadingContainer.propTypes = {
  children: PropTypes.node,
  drizzle: PropTypes.object.isRequired,
  drizzleState: PropTypes.object,
  initializingComp: PropTypes.node,
  accessDeniedComp: PropTypes.node,
};

export default LoadingContainer;
