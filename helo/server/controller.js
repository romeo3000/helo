module.exports ={

    // this is for the login user
    login: (req, res) =>{
        const db = req.app.get("db")
        const {username, password} = req.body
        db.find_user([username, password])
        .then(user => res.status(200).send(user))
        .catch(()=>res.status(500).send())
      },
   

      register: (req, res) =>{
        const db = req.app.get("db")
        const {username, password} = req.body
        db.create_user([username, password, `https://robohash.org/e + ${username}`])
        .then(user => res.status(200).send(user))
        .catch(()=>res.status(500).send())
      },

    //   getPosts:(req,res) =>{

    //     // for getting the post
    //   }



    //   addPost: (req, res) =>{

    //     //for adding the post 
    //   }



  
  }