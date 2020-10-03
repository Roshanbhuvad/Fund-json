import React, {Component, Fragment } from 'react';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";


class App extends Component {
  render() {
  return (
    <Fragment>
    <Header />
    <Main />
      <Footer />
    </Fragment>
   
  );
}

}

export default App;
