import React, { Component } from 'react';

import Menu from './Pages/Menu/Menu'
import Productos from './Pages/Productos/Productos';
import Gas from './Pages/Gas/Gas';
import EnergiaSolar from './Pages/EnergiaSolar/EnergiaSolar';
import FormPage from './Pages/Form/FormPage';
import Header from './Pages/Header/Header'
import AboutUs from './Pages/Aboutus/AboutUs';
import Colabora from './Pages/Colabora/Colabora';
import Footer from './Pages/Footer/Footer';

import './App.css';


class App extends Component {
  render() {

    return (
      <div className="App">
        <Menu />
        <Header />
        <Productos />
        <Gas />
        <EnergiaSolar />
        <AboutUs />
        <Colabora />
        <FormPage />
        <Footer />
      </div>
    );
  }
}
export default App;
