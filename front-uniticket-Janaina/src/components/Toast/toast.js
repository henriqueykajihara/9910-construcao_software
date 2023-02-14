import React from "react";
import { FaInfoCircle } from "react-icons/fa";

export default function Toast({ message }) {
  return (
    <div
      className="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-delay="6000"
      style={{ position: "absolute", bottom: "0", right: "0" }}
    >
      <div className="toast-header">
        <FaInfoCircle style={{ paddingRight: "3px" }} />
        <strong className="mr-auto">Informação</strong>
        <button
          type="button"
          className="ml-2 mb-1 close"
          data-dismiss="toast"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="toast-body">{message}</div>
    </div>
  );
}
