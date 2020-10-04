import React from 'react';
import Input from './Input';
import Input2 from './Input2';

const InputWrapper = () =>{
  const inputRef = React.useRef(null)
  React.useEffect(() =>{
    inputRef.current.focus();
  },[])
  return (
    <div style={{position:'relative',top:"20px"}}>
      <Input/>
      <Input2 ref={inputRef} />
    </div>
  )
}

export default InputWrapper;