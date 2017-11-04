// @flow
import { FormattedMessage as T } from "react-intl";
import { invalidRPCVersion } from "connectors";
import { TabbedHeader } from "shared";
import "style/Layout.less";


const InvalidRPCVersion = ({ requiredWalletRPCVersion, walletRPCVersion }) => (
  <div className="page-view">
    <TabbedHeader noDesc/>
    <div className="page-content">
      <div className="invalid-rpc-info">
        <T
          id="invalidRPCVersion.info"
          m={`The API of the currently running wallet ({walletRPCVersion}) is not compatible with Decrediton (required version {requiredWalletRPCVersion}).

          Please update the daemon (dcrd) and wallet (dcrwallet) to the latest version, then try again.

          See the "Help ⮕ About" menu for the current version of the executables.`}
          values={{ walletRPCVersion, requiredWalletRPCVersion }}
        />
      </div>
    </div>
  </div>
);

InvalidRPCVersion.propTypes = {
  requiredWalletRPCVersion: PropTypes.string.isRequired,
  walletRPCVersion: PropTypes.string.isRequired
};

export default invalidRPCVersion(InvalidRPCVersion);
