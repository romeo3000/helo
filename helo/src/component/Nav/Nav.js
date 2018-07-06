import React from "react";
import "./Nav.css"
import {Link} from "react-router-dom"

export default function Nav(props){
  console.log(props)
return(
    <div className="nav_wrapper">

<button>Home</button>
<button>New Post</button>
<Link to='/'><button>Logout</button></Link>
      
    </div>  
  )
}


