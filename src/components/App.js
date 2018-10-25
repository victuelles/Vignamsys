import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'
import LandingPage from './Landing'
/*import SignUpPage from './SignUp'
import SignInPage from './SignIn'
import PasswordForgetPage from './PasswordForget'
import HomePage from './Home'
import AccountPage from './Account'
import JoinTokeSalePage from './JoinTokeSale'
import UserInfoPage from './UserInfo'
import StripeStore from './StripeStore'*/
import * as routes from '../constants/routes'
import './App.css';
const App = () => 
  <Router>
    <div id="page-top">
        <Navigation />

        <Route 
          exact path={routes.LANDING} component={()=><LandingPage/>} 
        />
       
         <Footer/>
      </div>
     
  </Router>

 
export default App
