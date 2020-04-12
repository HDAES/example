import React,{ useState} from 'react';
import { setName } from './store/action'
import { connect } from 'react-redux'
import './app.css'
function App({name,age,dispatch}) {
  const [inputName,setInputName] = useState()
  return (
    <div className="App">
      <div className="name">
        <span>名字：</span>
        {name}
      </div>
      <div className="age">
        <span>年龄：</span>
        {age}
      </div> 

      <div className="name-input">
        <span>名字输入框：</span>
        <input onChange={(e)=>setInputName(e.target.value)}/>
        <div style={{marginLeft:20}} onClick={ ()=>dispatch(setName(inputName))} >确定修改</div>
      </div>
        
    </div>
  );
}

const mapStateToProps = state =>{
  return {
    name:state.name,
    age:state.age
  }
}

export default connect(mapStateToProps)(App);
