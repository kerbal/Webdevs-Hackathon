import React from 'react';
import AuthenticationService from '../services/AuthService';
// import { AuthService } from '../services/AuthService';

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
      this.state = { 
        logged: AuthenticationService.logged  
      }
      this.unsubscribe = AuthenticationService.$auth.subscribe(logged => {
        this.setState({ logged });
      });
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    render() {
      return (
        <Component {...this.props} logged={this.state.logged}></Component>
      )
    }
  }
}