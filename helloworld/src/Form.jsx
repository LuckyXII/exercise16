import React, { Component } from 'react';


class Form extends Component{

    render(){
        return(
            <section>
                <form action="#">
                    <input type="text"
                        name="email"
                    />
                    <input type="text"
                           name="name"
                    />
                </form>
            </section>
        );
    }
}

export default Form;