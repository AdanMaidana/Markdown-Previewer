import React, { useState } from "react";
import "../hojas-de-estilo/editor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandAlt, faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons";

export function Editor({ value, onChange, onMaximizeClick, isMaximized }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpandIcon = () => {
    setIsExpanded(!isExpanded);
    onMaximizeClick(); 
  };

  const editorContainerClasses = isMaximized
    ? "editor-container maximized"
    : "editor-container";

  return (
    <div className={editorContainerClasses} id="editor-container">
      <div
        id="editor-titulo"
        className="d-flex align-items-center justify-content-between"
      >
        Editor
        <FontAwesomeIcon
          icon={isExpanded ? faDownLeftAndUpRightToCenter : faExpandAlt}
          className="maximize-icon editor-icon"
          onClick={toggleExpandIcon}
        />
      </div>
      <textarea id="editor" value={value} onChange={onChange} />
    </div>
  );
}
