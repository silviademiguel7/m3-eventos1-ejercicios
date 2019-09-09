import React from 'react';
import OnionHater from './OnionHater'
import './index.css';




class App extends React.Component {
  
  constructor(props){
    super(props);
    this.isHating = false;
    this.handleCebolla = this.handleCebolla.bind(this);
  }

handleCebolla(event){
  const value = event.currentTarget.value;
  if(value.includes("cebolla")){
    this.isHating = true;
  }else{
    this.isHating = false;
  }
  this.forceUpdate();
}
  render() {


    return (
      <div className="App">
        <OnionHater isHating = {this.isHating} handleCebolla = {this.handleCebolla}></OnionHater>
      </div>
    );
  }
}

export default App;
