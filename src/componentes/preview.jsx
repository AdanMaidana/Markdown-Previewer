import React, {useState} from "react";
import "../hojas-de-estilo/preview.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpandAlt,
  faDownLeftAndUpRightToCenter,
} from "@fortawesome/free-solid-svg-icons";

export function Preview({ convertedHtml, onMaximizeClick }) {
  // Función para centrar el texto de los párrafos que son padres directos de una imagen
  const centerTextInParentParagraphs = () => {
    const paragraphs = document.querySelectorAll("#preview-cuerpo p");

    paragraphs.forEach((paragraph) => {
      if (paragraph.querySelector("img")) {
        paragraph.classList.add("text-center");
      }
    });
  };

  // Centrar el texto de los párrafos al cargar el componente
  React.useEffect(() => {
    centerTextInParentParagraphs();
  }, []);

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpandIcon = () => {
    setIsExpanded(!isExpanded);
    onMaximizeClick();
  };

  return (
    <div id="preview-container">
      <div
        id="preview-titulo"
        className="d-flex align-items-center justify-content-between"
      >
        Previewer{" "}
        <FontAwesomeIcon
          icon={isExpanded ? faDownLeftAndUpRightToCenter : faExpandAlt}
          className="maximize-icon editor-icon"
          onClick={toggleExpandIcon}
        />
      </div>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: convertedHtml }}
      />
    </div>
  );
}

  