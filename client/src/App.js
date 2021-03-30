import './App.css';
import Login from './Login.js'
import Register from './Register.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Link to="/">Домой</Link>
      <Link to="/testAPI">Войти</Link>
      <Link to="/register">Регистрация</Link>
      <Switch>
        <Route path="/testAPI">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;