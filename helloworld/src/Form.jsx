import React, { Component } from 'react';


class Form extends Component{

    render(){
        return(
            <section>
                <form action="#">
                    <input type="text"
                           name="email"
                           onChange={this.props.updateEmail}
                           value={this.props.email}

                    />
                    <input type="text"
                           name="name"
                           onChange={this.props.updateName}
                           value={this.props.name}
                    />
                </form>
            </section>
        );
    }
}

export default Form;