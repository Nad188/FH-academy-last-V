import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages";
import signIn from './Components/SignIn&SigbUp/SignIn/index'
import signUp from './Components/SignIn&SigbUp/singup/index'
import AdminPage from "./pages/AdminPage";







function App() {

 
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={signIn} />
        <Route exact path="/signup" component={signUp} />
        <Route exact path="/adminPage" component={AdminPage} />
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
