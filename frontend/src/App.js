import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import "./App.css";
// import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import History from "./pages/History";
import Home from "./pages/Home";
import { authActions } from "./Store/auth-slice";

function App() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();
  let routes;
  if (isLogin) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/history">
          <History />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  const validateToken = async () => {
    let response;
    try {
      response = await fetch("http://localhost:5000/api/validateToken", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
    } catch (error) {}
    if (response.ok) {
      const data = await response.json();
      dispatch(
        authActions.login({
          token: localStorage.getItem("token"),
          user: data.data.user
        })
      );
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      validateToken();
    }
  }, []);
  return (
    <Router>
      <main>{routes}</main>
    </Router>
  );
}

export default App;
