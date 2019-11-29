import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import AuthenticationForm from "./pages/signIn-SignUp/signIn-SignUp";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/shop/hats" component={HatsPage} />
        <Route path="/signin" component={AuthenticationForm} />
      </Switch>
    </div>
  );
}

export default App;
