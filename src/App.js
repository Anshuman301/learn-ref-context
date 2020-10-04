import React from "react";
import Input from "./components/Input";
import InputWrapper from "./components/InputWrapper";
import "./styles.css";

class App extends React.Component{
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
export default App;
