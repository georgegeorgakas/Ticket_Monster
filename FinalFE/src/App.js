import React, { Component } from 'react';
import EventPage from './containers/EventPage/EventPage';
import higherOrderMenu from './hoc/HighOrderMenu/HighOrderMenu';
import UserMenu from './hoc/UserMenu/UserMenu';
import AdminMenu from './hoc/AdminMenu/AdminMenu';
import LandingPage from './containers/LandingPage/LandingPage';
import SignIn from './containers/SignIn/SignIn';
import SignUp from './containers/SignUp/SignUp';
import { Route, Redirect, Switch } from 'react-router-dom';
import ToCart from './containers/ToCart/ToCart';
import Checkout from './containers/Checkout/Checkout';
import MyTickets from './containers/MyTickets/MyTickets';
import AdminsPage from './containers/AdminsPage/AdminsPage';
import AdminsUsers from './containers/AdminsPage/AdminsUsers/AdminsUsers';
import AddEvents from './containers/AdminsPage/AddEvents/AddEvents';
import logout from './components/Logout/Logout';
import ErrorPage from './containers/ErrorPage/ErrorPage';


class App extends Component {

  
  render() {
    const LandingPageFinal = higherOrderMenu(LandingPage);
    const EventPageFinal = UserMenu(EventPage);
    const SignInFinal = higherOrderMenu(SignIn);
    const SignUpFinal = higherOrderMenu(SignUp);
    const ToCartFinal = UserMenu(ToCart);
    const CheckoutFinal = UserMenu(Checkout);
    const MyTicketsFinal = UserMenu(MyTickets);
    const AdminsPageFinal = AdminMenu(AdminsPage);
    const AdminsUsersFinal = AdminMenu(AdminsUsers);
    const AddEventsFinal = AdminMenu(AddEvents);

    return (
      <div className="Routes">

      <Switch>
        <Route path='/' exact component={LandingPageFinal} />
        <Route path='/events' exact component={EventPageFinal} />
        <Route path='/signin' exact component={SignInFinal} />
        <Route path='/signup' exact component={SignUpFinal} />
        <Route path='/logout' exact component={logout}/>
        <Route path='/mytickets' exact component={MyTicketsFinal} />
        <Route path='/admins' exact component={AdminsPageFinal}/>
        <Route path='/addevents' exact component={AddEventsFinal}/>
        <Route path='/users' exact component={AdminsUsersFinal}/>
        <Route path='/tocart' exact component={ToCartFinal} />
        <Route path='/tocart/checkout' exact component={CheckoutFinal} />
        <Route path='/error' exact component={ErrorPage} />
        <Redirect from="*" to="/" />
      </Switch>
            {/* Guards */}
            {sessionStorage.getItem('userRole')==='true' ? (
              <Switch>
                          <Redirect from='/events' to='/admins'/>
                          <Redirect from='/tocart' to='/admins'/>
                          <Redirect from='/mytickets' to='/admins'/> 
             </Switch>) : null }
             {sessionStorage.getItem('userRole')==='false' ? (
              <Switch>
                          <Redirect from='/admins' to='/events'/>
                          <Redirect from='/users' to='/events'/>
             </Switch>) : null }
        
      </div>
    );
  }
}

export default App;
