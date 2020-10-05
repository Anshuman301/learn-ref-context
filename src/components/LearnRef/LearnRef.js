import React from 'react';
import InputWrapper from './InputWrapper';
import Input from './Input';

class LearnRef extends React.Component{
  constructor(props){
    super(props);
    this.focusInput = React.createRef()
  }
  componentDidMount(){
    this.focusInput.current.handleClick()
  }
  render(){
    return(
      <div>
      <Input ref={this.focusInput}/>
      <InputWrapper/>
      </div>
    )
  }
}
export default LearnRef;