// Toast.jsx
import React from "react";
import PropTypes from "prop-types";
import "./toast.css";
import { X, Trash, CheckCircle, WarningCircle, Warning, InformationCircle } from "@phosphor-icons/react";

const Toast = ({
  icon,
  message,
  divider,
  actionButton,
  onActionClick,
  onClose,
}) => {
  return (
    <div className="toast">
      {icon && (
        <div className="toast-icon">
          <Trash size={24} />
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
        <div className="toast-close-button" onClick={onClose}>
          <X fontSize={"24px"} />
        </div>
      )}
    </div>
  );
};

Toast.propTypes = {
  icon: PropTypes.oneOf(["information", "warning", "error", "success"])
    .isRequired,
  message: PropTypes.string.isRequired,
  divider: PropTypes.bool,
  actionButton: PropTypes.bool,
  onActionClick: PropTypes.func,
  onClose: PropTypes.bool,
};

Toast.defaultProps = {
  onActionClick: () => {},
};

export default Toast;
