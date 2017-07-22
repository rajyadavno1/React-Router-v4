import React from "react";
import { context } from 'react-router';
import PropTypes from 'react-router';

 export class User extends React.Component {

   constructor(props)
   {
     super(props);
     console.log(props);
     var props = props;
    // this.props.history = 'undefined';


   }

   onNavigationHome()
   {
    // const { router } = this.props;

  //  router.push("/home");
    this.props.history.push("/home");
    //this.context.router.history.push
    // <Redirect push to="/user"/>


   }

  render() {



    return(
      <div>
        <h3>The User Page</h3>
        <p>User Id :{this.props.match.params.id}</p>
        <button  onClick={this.onNavigationHome.bind(this)} className="btn btn-primary">Go Home</button>
      </div>
    );
  }


}


//const WrappedUsercomponent = withRouter(User);
