import React, { Component } from 'react';
import './App.css';
import Form from "./Form";
import Button from "./Button";


class App extends Component {

    constructor(props){
        super(props);

        this.state={email:"",name:""};
        this.update = this.update.bind(this);
        this.clear= this.clear.bind(this);
    }
/*
    update(e){
        let elm = e.target;
        if(elm.name === "email"){
            this.setState({email:elm.value});
        }
        else if(elm.name === "name"){
            this.setState({name:elm.value});
        }
    }

    clear(){
        this.setState({email:"",name:""});
    }*/

  render() {
    return (
      <div className="App">
       {/* <Form email={this.state.email} name={this.state.name} update={this.update}/>
        <Button clear={this.clear}/>*/}
      </div>
    );
  }
}

export default App;
