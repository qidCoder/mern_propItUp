// Create a component called PersonCard that accepts the following props: 

// firstName
// lastName
// age
// hairColor


import React, { Component } from 'react';

class PersonCard extends Component{
    render(props){
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                
            </div>
        )
    }
}

export default PersonCard;