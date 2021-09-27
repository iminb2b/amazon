import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/LogIn";
import Orders from "./components/Orders";
import SignUp from "./components/SignUp";
import HomeContainer from "./pages/Home";
import { useSelector } from "react-redux"
function App() {
  const user = useSelector(state => state.basket.user)
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomeContainer />
          </Route>
          <Route path="/signin">
            {user ?
              <HomeContainer /> : <Login />
            }
          </Route>
          <Route path="/signup">
            {user ?
              <HomeContainer /> : <SignUp />
            }
          </Route>
          <Route path="/checkout">
            {user ?
              <Checkout /> : <HomeContainer />
            }
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
