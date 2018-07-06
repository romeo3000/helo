import React from "react";
import "./Nav.css"
import {Link} from "react-router-dom"
import { connect } from "react-redux";
 
 function Nav(props){
  console.log(props)
return(
    <div className="nav_wrapper">

<button>Home</button>
<button>New Post</button>
<Link to='/'><button>Logout</button></Link>
      
    </div>  
  )
}

function mapStateToProps(state){
  console.log(state)
  return{
    prof_img: state.prof_pic,
    username: state.username
  }
}
export default connect(mapStateToProps)(Nav)


