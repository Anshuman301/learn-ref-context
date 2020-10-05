import React from "react";
import { ThemeContext, UserContext } from "./ContextFile";
// export default function Button2() {
//   return (
//     <ThemeContext.Consumer>
//       {({ theme, toggleTheme }) => (
//         <button style={theme} onClick={toggleTheme}>
//           click Me!!!
//         </button>
//       )}
//     </ThemeContext.Consumer>
//   );
// }

// export default function Button2() {
//   return (
//     <ThemeContext.Consumer>
//       {({ theme, toggleTheme }) => (
//           <UserContext.Consumer>
//             {
//               user => (
//                 <>
//                 <span>{user}</span>
//                 <button style={theme} onClick={toggleTheme}>
//                   click Me!!!
//                 </button>
//               </>
//               )
//             }
//           </UserContext.Consumer>
          
//       )}
//     </ThemeContext.Consumer>
//   );
// }

export default function Button2() {
  const user  = React.useContext(UserContext);
  const {theme,toggleTheme} = React.useContext(ThemeContext)
  return (
    <>
        <span>{user}</span>
        <button style={theme} onClick={toggleTheme}>
          click Me!!!
        </button>
    </>
  );
}