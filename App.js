

import React,{Component} from 'react';
import './App.css';

import Web from './components/Web.js';
import Help from './components/Help.js'
class App extends Component
{
 
  
  render()
  {
    const ch3={

      color:"white",
      fontSize:"30px"
    }
    return(
      <div style={ch3} className="App"><h1 >COVID19 TRACKER</h1>
      
      <Web/>
      <Help/>
    </div>


);
}
}
export default App;
