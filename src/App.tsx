import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContainerCount from './containers/ContainerCount';
import TodoContainer from './containers/TodoContainer';

function App() {
  return (
    <div className="App">
      <ContainerCount/>
      <TodoContainer/>
    </div>
  );
}

export default App;
