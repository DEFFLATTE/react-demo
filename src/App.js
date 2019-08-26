import React, { Component }from 'react';
import logo from './assets/images/logo.svg';
// import './assets/css/App.css';
import Home from './components/Home';
import News from './components/News';
import List from './components/List';
import TodoList from './components/TodoList';
import ReactForm from './components/ReactForm'
class App extends Component {
  //render--模板    jsx语法
  render(){
      return (
          <div className="App">
            {/*<Home />*/}
            <News/>
              {/*<List/>*/}
              {/*<br/>*/}
              {/*<TodoList/>*/}
              {/*<ReactForm />*/}
          </div>
      );
  }

}

export default App;
