import React from 'react';

class Input extends React.Component{
  constructor(props){
    super(props);
    this.inputRef = React.createRef();
  }
  handleClick = () => this.inputRef.current.focus()
  handleClick2 = () => console.log(this.inputRef.current.value)
  render(){
    return(
      <div>
      <input ref={this.inputRef}/>
      <button onClick={this.handleClick2}>Click Me!!!</button>
    </div>
    )
  }
}
export default Input;