import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import NavLink from './NavLink';
import DropMenu from './DropMenu';

function App() {
  return (
    <div className="App">
    <Header text="Hello World"></Header>
    <NavBar>
      <NavLink></NavLink>
      <NavLink></NavLink>
      <NavLink></NavLink>
      <NavLink></NavLink>
      <DropMenu></DropMenu>
    </NavBar>
    </div>
  );
}

export default App;
