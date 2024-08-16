import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './widget.css';
const Widget = ({ categoryId, widget, onRemove }) => {
  return (
    <div className="widget">
      <div>
        <h3>{widget.name}</h3>
        <p>{widget.text}</p>
      </div>
      <button onClick={() => onRemove(categoryId, widget.id)}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
};

export default Widget;
