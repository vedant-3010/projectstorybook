// Toast.jsx
import React from "react";
import PropTypes from "prop-types";
import "./toast.css";
import { X, CheckCircle, WarningCircle, Warning } from "@phosphor-icons/react";

const Toast = ({ icon, message, divider,actionButton, onActionClick, onClose }) => {
  return (
    <div className="toast">
      <div className={`toast-icon ${icon}`} />
      <span className="toast-message">{message}</span>
      {divider && <div className="toast-divider" />}
      {actionButton && (
        <button className="toast-action-button" onClick={onActionClick}>
          Button
        </button>
      )}
      {onClose && (
        <button className="toast-close-button" onClick={onClose}>
          <X />
        </button>
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
