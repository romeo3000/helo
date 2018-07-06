module.exports ={

    // this is for the login user
    login: (req, res) =>{
        const db = req.app.get("db")
        const {username, password} = req.body
        db.find_user([username, password])
        .then(user => res.status(200).send(user))
        .catch(()=>res.status(500).send())
      },
   
// setting up the registered user
      register: (req, res) =>{
        const db = req.app.get("db")
        const {username, password} = req.body
        db.create_user([username, password, `https://robohash.org/e + ${username}`])
        .then(user => res.status(200).send(user))
        .catch(()=>res.status(500).send())
      },

    //  getting the Post 
    getPosts: (req, res) =>{
      const db = req.app.get("db")
      db.get_posts()
      .then(posts => {console.log(posts); res.status(200).send(posts)})
      .catch(()=>res.status(500).send())
    },

  // adding post to the data base
    
    addPost: (req, res) =>{
      const db = req.app.get("db")
      const {title, img, content, authorid} = req.body
      console.log("Hey we just addPost")
      db.add_post([title, img, content, authorid])
      .then(posts => res.status(200).send(posts))
      .catch(()=>res.status(500).send())
    }


  
  }