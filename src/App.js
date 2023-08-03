import React from 'react'
import Home from './components/Home';
import Register from './components/Register';
import Login from './Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
     <Routes>
    <Route exact path='/' Component={Home}></Route>]]
    <Route exact path='/register' Component={Register}></Route>
    <Route exact path='/login' Component={Login}></Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
