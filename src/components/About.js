import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

export default class About extends Component{
  constructor(props) {
    super(props);
    
    console.log("Parent Constructor Called");
  }

  componentDidMount(){
    console.log("Parent componentDidMount Called");
  }

  render(){
    console.log("Parent Render Called");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web series</h2>
        {/* <User name={"Karim (function)"}/> */}
        {/* UserClass is same implementation of User but in class based approach */}
        <UserClass name={"First"} location={"kadiri class"}/>
        {/* <UserClass name={"Second"} location={"US class"}/> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Web series</h2>
//       <User name={"Karim (function)"}/>
//       {/* UserClass is same implementation of User but in class based approach */}
//       <UserClass name={"Karim (class)"} location={"kadiri class"}/>
//     </div>
//   );
// };

// export default About;


/**
 * Parent Constructor
 * Parent Render
 * 
 *  - First Child Constructor
 *  - First Child Render
 * 
 *  - Second Child Constructor
 *  - Second Child Render
 * 
 *  (DOM UPDATED - IN SINGLE BATCH)
 *  - First Child componentDidMount
 *  - Second Child componentDidMount
 * 
 * Parent componentDidMount.
 */


/**
 * React executes in 2 phase
 * 
 *  - Render Phase. - fast
 *  - Commit Phase. - Operation is costiler, and slow (DOM Manipulaton begins).
 */