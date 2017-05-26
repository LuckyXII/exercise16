import React, { Component } from 'react';



class Button extends Component{

    render(){
        return(
            <section className="buttonClass">
               <input type="button"
                    onClick={this.props.clear}
                    value="Clear"
                />
            </section>
        );
    }
}

export default Button;