import './App.css';
import { useState } from 'react';
import { Editor } from './componentes/editor';
import { Preview } from './componentes/preview';
import { marked } from 'marked';
import { editorDefaultText } from './js/editor-default-text';

function App() {
  const [texto, setTexto] = useState(editorDefaultText);
  const [mostrarPreview, setMostrarPreview] = useState(true); // Estado para controlar la visibilidad del componente Preview
  const [mostrarEditor, setMostrarEditor] = useState(true); // Estado para controlar la visibilidad del componente Editor
  const [editorMaximized, setEditorMaximized] = useState(false); // Estado para controlar la maximización del Editor

  // Configura Marked.js con la opción "breaks" para interpretar los saltos de línea
  marked.setOptions({
    breaks: true,
  });

  const handleChange = (event) => {
    setTexto(event.target.value);
  };

  const editorHandleMaximizeClick = () => {
    setEditorMaximized(!editorMaximized); // Cambiar el estado de maximización del Editor
    setMostrarPreview(!mostrarPreview); // Ocultar o mostrar el Preview
  };

  const previewHandleMaximizeClick = () => {
    setMostrarEditor(!mostrarEditor);
  };

  const convertedHtml = marked(texto, { mangle: false, headerIds: false });

  return (
    <div className="App container">
      {mostrarEditor && (
        <Editor
          value={texto}
          onChange={handleChange}
          onMaximizeClick={editorHandleMaximizeClick}
          isMaximized={editorMaximized} // Pasar el estado de maximización del Editor al componente Editor
        />
      )}
      {mostrarPreview && <Preview convertedHtml={convertedHtml} onMaximizeClick={previewHandleMaximizeClick} />}
    </div>
  );
}

export default App;
