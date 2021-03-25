import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Confirm from "./pages/Confirm";
import UserContext from "./context/userContext";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import ConfirmedAccount from "./pages/ConfirmedAccount";
import Footer from './components/Footer';
// import Player from './components/Music/Player';


function App() {
  const [userData, setUserData] = useState({
    user: undefined,
    token: undefined,
  });

  const checkLoggedIn = async () => {
    let token = localStorage.getItem("auth-token");

    if (token === null) {
      localStorage.setItem("auth-token", "");
    } else {
      try {
        const userRes = await axios.get("/user", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      } catch (err) {
        console.log("User must Log in");
      }
    }
  };

  const logOut = () => {
    setUserData({ user: undefined, token: undefined });
    localStorage.setItem("auth-token", "");
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <div className="App">

      <Router>
        <Navbar props={userData.user} logout={logOut} />

        <UserContext.Provider value={{ userData, setUserData }}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/confirm" component={Confirm} />
            <Route path="/confirm_token/:token" component={ConfirmedAccount} />
            <Route path="/" component={Home} />
            {/* <Route path="/Player" component={Player} /> */}
            <Route path="/Footer" component={Footer} />
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
