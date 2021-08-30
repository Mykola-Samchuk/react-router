import './App.css';
import {BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";
import HomePage from './components/home/HomePage';
import Publication from './components/publication/Publication';
import Foto from './components/foto/Foto';
import Contacts from './components/contact/Contacts';



function App() {
  return (
    <div className="App">
     <Router>
        <nav className="link">
          <NavLink className="link-button" activeClassName={"selected"} exact to="/" >Home</NavLink>
          <NavLink className="link-button" activeClassName={"selected"} to="/about">Publication</NavLink>
          <NavLink className="link-button" activeClassName={"selected"} to="/users">Foto</NavLink>
          <NavLink className="link-button" activeClassName={"selected"} to="/contact">Contact</NavLink>
        </nav>

        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/about">
            <Publication 
             author={{
              name: "Anakin skywalker",
              nickname: "@dart_vader"}}
              content = "WTF? Who is Ray? Why she is Skywalker? Luke...?"
              date = {"26 февр."}
            />
          </Route>
          <Route path="/users" component={Foto}></Route>
          <Route path="/contact" component={Contacts}></Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
