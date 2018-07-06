import React, {Component} from "react";
//import {getLoginData} from "./../../ducks/reducer";
import axios from "axios"
import "./Auth.css"

export default class Auth extends Component{
  constructor(){
    super()

    this.state = {
      usernameInput: "",
      passwordInput: "",
      //error = "",
    }

  }
  ///setting up login on 
  login() {
    const {usernameInput, passwordInput} = this.state
    if(usernameInput && passwordInput) {
      axios.post('/api/login', {username: usernameInput, password: passwordInput}).then(res => {
        console.log(res.data)
        if (res.data.length !== 0) {
          const {id, username, password, profile_pic} = res.data[0];
          this.props.getLoginData(id, username, password, profile_pic);
          this.props.history.push("/dashboard")
				} 
      })
    } else {
      this.setState({error: 'Wait Up You for something '})
    }
  }

/// register a user
register() {
  const {usernameInput, passwordInput} = this.state
  if (usernameInput && passwordInput){
    axios.post('/api/register', {username: usernameInput, password: passwordInput}).then(res=> {
      console.log(res.data)
      if (res.data.length !== 0){
        const {id, username, password, profile_pic } = res.data[0];
        this.props.getLoginData(id, username, password, profile_pic );
        this.props.history.push("/dashboard")
      }
    })
  }else{
    this.setState({error:'Wait up something went wrong! '})
  }

}



  render(){
    
    return(
      <div>
        <h1> HELO</h1>
        <div className="">
              <p>username</p>
              <input onChange={ (e) => this.setState({usernameInput: (e.target.value)})}/>
        </div>
        <div className="">
              <p>password</p>
              <input onChange={ e => this.setState({passwordInput: (e.target.value)})}/>
        </div>
        <div className="">
              <button onClick={ () => this.login()}>LOGIN</button>
              <button onClick={ () => this.register()}>REGISTER</button>
            </div> 
       {/* <h1> this is my old auth header H1 page Auth</h1> */}
     </div>  
       
    )
  }
}




          
            
           




