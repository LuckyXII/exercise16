import React, { Component } from 'react';
import './App.css';
import Form from "./Form";
import Button from "./Button";


class App extends Component {

    constructor(props){
        super(props);

        this.state={email:"",name:""};
       this.updateEmail = this.updateEmail.bind(this);
        this.updateName = this.updateName.bind(this);
        this.clear= this.clear.bind(this);
    }

    updateEmail(e){
        this.setState({email:e.target.value});
        console.log(this.state.email);
    }

    updateName(e){
        this.setState({name:e.target.value});

    }

    clear(){
       this.setState({email:"",name:""});
        console.log(this.state.name);
    }

  render() {
    return (
      <div className="App">
       <Form
           email={this.state.email}
           name={this.state.name}
           updateEmail={this.updateEmail}
           updateName={this.updateName}
       />
        <Button clear={this.clear}/>
      </div>
    );
  }
}

export default App;
