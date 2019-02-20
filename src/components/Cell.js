import React from 'react';


const Cell = (props) => {
const {index, value} = props;
return (
      <span 
        className="Cell" 
        data-index={index}
      >
        {value}
      </span>
      );
}
export default Cell;