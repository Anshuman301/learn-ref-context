import React from 'react';
import { ThemeContext } from './ContextFile';

export default class Button extends React.Component{
  static contextType = ThemeContext
  render(){
    const {theme,toggleTheme} = this.context
    return(
      <button style={theme} onClick={toggleTheme}>Click Me!!!</button>
    )
  }
}