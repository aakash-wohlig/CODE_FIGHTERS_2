import logo from './logo.svg';
import React,{ useEffect } from "react";
import './App.css';
import SignIn from './pages/signin/signin';
import SignUp from './pages/signup/signup';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link
} from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import Navbar from './components/navbar/navbar';
import {Provider, useDispatch, useSelector} from 'react-redux';
import store from './store'
import { login } from './actions/userActions';
import Orders from './pages/orders/Orders';
import Product from './pages/orders/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
const PagesRoutes=()=>{
  const dispatch = useDispatch();
  const userInfo=localStorage.getItem('userInfo')
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;
  // useEffect(() => {
  //   dispatch(login(userInfo.email,userInfo.password))
  // }, [userInfo])
  // useEffect(async () => {
  //   checkLoggedIn()
  //   // dispatch(globalContentInitialize())
  // }, [])
  // const checkLoggedIn = async () => {
  //   if(localStorage.getItem('userInfo')){
  //     const email=localStorage.getItem('userInfo').email
  //     const password=localStorage.getItem('userInfo').password
  //     if (email) {
  //       dispatch(login(email,password))
  //     }
  //   }
  // }
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/orders/:id" component={Product} />
          {/* <Route path="/orders" component={Orders} /> */}
          <Route path="/signin" component={SignIn} />
          {
            userInfo?(<Route path="/dashboard" component={Dashboard} />):
            (<Route path="/signup" component={SignUp} />)
          }
          {
            userInfo?(<Route path="/orders" component={Orders} />):
            (<Route path="/signin" component={SignIn} />)
          }
          
          {/* <Route path="/dashboard" component={Dashboard} /> */}
        </Switch>
        {/* <Routes>
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes> */}
      </div>
    </Router>
  )
}
function App() {
  return (
    <Provider store={store}>
      <PagesRoutes />
    </Provider>
  );
}

export default App;
