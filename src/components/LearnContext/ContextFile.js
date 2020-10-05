import React from 'react';
export const ThemeContext = React.createContext({ 
  theme : null,
  toggleTheme: () =>{}
})

ThemeContext.displayName = 'Theme'
export const UserContext = React.createContext('John Doe')
UserContext.displayName = 'User'
