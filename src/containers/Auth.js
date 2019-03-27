import React, { useState } from 'react';
import { AuthService } from '../services/AuthService';
import { withRouter } from 'react-router-dom';

// export function Auth({ children }) {
//   const [logged, setLogged] = useState(AuthService.logged);
//   AuthService.$auth.subscribe(logged => {
//     setLogged(logged)
//   });
//   return (
//     <>
//       {children(logged)}
//     </>
//   )
// }

export function withAuth(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      state = { 
        logged: AuthService.logged  
      }
      this.unsubscribe = AuthService.$auth.subscribe(logged => {
        this.setState({ logged });
      });
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    render() {
      return (
        <Component {...this.props, this.state.logged}></Component>
      )
    }
  }
}