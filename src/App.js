import React, { useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./components/Header"; 
import Home from "./components/Home";
import Checkout from "./components/Checkout"
import Login from "./components/Login";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";

function App() {
   const [{}, dispatch] = useStateValue();

   useEffect( () =>{

  // will only run once when the app component loads
  auth.onAuthStateChanged(authUser =>{
     console.log("User is >>>", authUser);

     if(authUser){
        //the user just loggedin / the user was logged in
        dispatch({
           type: "SET_USER",
           user: authUser
        })
     } else {
        // the user is  logged out
        dispatch({
           type:'SET_USER',
           user: null // if user logges out, than set user to null
        })
     }
  }   )
   }, [])

  return (
    <Router>
       <div className="App"> 
         
          <Switch>

              <Route path="/login">
                 <Login />
              </Route>

              <Route path="/checkout">
                 <Header />
                 <Checkout />
              </Route>

              <Route path="/">
              <Header />
                  <Home />
              </Route>

          </Switch>
       </div>
    </Router>
  );
}

export default App;
