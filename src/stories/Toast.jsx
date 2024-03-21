// Toast.jsx
import React from "react";
import PropTypes from "prop-types";
import "./toast.css";
import {
  X,
  Trash,
  CheckCircle,
  WarningCircle,
  Warning,
  Info,
} from "@phosphor-icons/react";

const Toast = ({
  iconContainer,
  icon,
  message,
  divider,
  actionButton,
  onActionClick,
  onCloseAction,
  onClose,
}) => {
  return (
    <div className="toast">
      {iconContainer && (
        <div className={`toast-icon ${icon}`}>
          {icon === "information" && <Info fontSize={"24px"} weight="fill"/>}
          {icon === "warning" && <WarningCircle fontSize={"24px"} weight="fill"/>}
          {icon === "error" && <Warning fontSize={"24px"} weight="fill"/>}
          {icon === "success" && <CheckCircle fontSize={"24px"} weight="fill"/>}
        </div>
      )}
      <span className="toast-message">{message}</span>
      {divider && <div className="toast-divider" />}
      {actionButton && (
        <button className="toast-action-button" onClick={onActionClick}>
          Button
        </button>
      )}
      {onClose && (
        <div className="toast-close-button" onClick={onCloseAction}>
          <X fontSize={"24px"} />
        </div>
      )}
    </div>
  );
};

Toast.propTypes = {
  iconContainer: PropTypes.bool,
  icon: PropTypes.oneOf(["default", "information", "warning", "error", "success"])
    .isRequired,
  message: PropTypes.string.isRequired,
  divider: PropTypes.bool,
  actionButton: PropTypes.bool,
  onActionClick: PropTypes.func,
  onCloseAction: PropTypes.func,
  onClose: PropTypes.bool,
};

Toast.defaultProps = {
  onActionClick: () => {
    console.log("Action button clicked");
  },
  onCloseAction: () => {
    console.log("Close button clicked");
  },
};

export default Toast;
