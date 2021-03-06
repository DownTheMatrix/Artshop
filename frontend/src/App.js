import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import PageNotFound from "./screens/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <main>
        <Container>
          <Switch>
            <Route path="/login" component={LoginScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" component={HomeScreen} exact />
            <Route component={PageNotFound} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
