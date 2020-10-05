import React from 'react';

const Input2 = React.forwardRef((props,ref) =>{
    return(
      <div style={{position:"relative",top:"20px"}}>
      <input ref={ref}/>
      <button>Click Me!!!</button>
    </div>
    )
})
export default Input2;