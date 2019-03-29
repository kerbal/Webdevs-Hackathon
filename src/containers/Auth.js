import React from 'react';
import { AuthService } from '../services/AuthService';

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
        <Component {...this.props} logged={this.state.logged}></Component>
      )
    }
  }
}