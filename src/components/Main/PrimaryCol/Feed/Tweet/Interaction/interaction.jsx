import React from 'react';

import './stylesInteraction.css';

const Interaction = (props) => {                  {/* ${props.selected && 'selected'} */}
  return (
      <div className={`interaction-container interaction ${props.selected ? 'selected' : ''}`} onClick={() => props.selectedFn(props.index)}>
        <div>{props.source}</div>
        <p>{props.interaction > 1000 ? (props.interaction/1000).toFixed(1) + "mil" : props.interaction}</p>
      </div>
  )
}

export default Interaction;
