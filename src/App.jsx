
// import {useState} from 'react';
import './App.scss';
import TodoList from './Components/TodoList/TodoList';


function App(){
  return (
    <div className="App">
      <TodoList/>

      <button>Open Modal</button>
    </div>
  );
  }

  function Modal () {
    return <div className='modal'>
      <div className='modal__content'>Modal content</div>
    </div>
  }
export default App;
