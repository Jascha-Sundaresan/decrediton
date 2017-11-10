import { messageBanner } from "connectors";
import { FormattedMessage as T } from "react-intl";
import Message from "./Message";

const MessageBanner = ({
  synced,
  getNextAccountSuccess,
  getNextAccountError,
  renameAccountSuccess,
  renameAccountError,
  onClearNewAccountSuccess,
  onClearNewAccountError,
  onClearRenameAccountSuccess,
  onClearRenameAccountError,
  changePassphraseError,
  changePassphraseSuccess,
  onClearChangePassphraseSuccess,
  onClearChangePassphraseError,
}) => {
  const message = (
    getNextAccountSuccess   ||
    renameAccountSuccess    ||
    changePassphraseSuccess ||
    getNextAccountError     ||
    renameAccountError      ||
    changePassphraseError
  );
  const error = !!renameAccountError || !!getNextAccountError || changePassphraseError;
  const onClick = () => {
    onClearNewAccountSuccess();
    onClearRenameAccountSuccess();
    onClearNewAccountError();
    onClearRenameAccountError();
    onClearChangePassphraseSuccess();
    onClearChangePassphraseError();
  };
  return (
    !synced ?
    <div className="notification not-synced">
      <T id="home.notSyncedInfo" m="The wallet is not fully synced yet. Note: Balances will not be accurate until syncing is complete." />
    </div> :
    <Message {...{ error, onClick }}>
      { message }
    </Message>
  );
};

export default messageBanner(MessageBanner);