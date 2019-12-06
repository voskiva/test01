import React, { Component } from 'react'

export default class SearchBar extends Component {

    state = {
        counter: 0
    }

    incrementCounter = () => {
       this.setState({ counter: this.state.counter + 1});
    }

    decrementCounter = () => {
        this.setState({ counter: this.state.counter - 1 })

        if(this.state.counter <= 0) {
            this.setState({ counter: 0 });
        }
    }

    resetCounter = () =>  {
        this.setState({ counter: 0 })
    }

    render() {
        
        container = {
            'width': '80%',
            'height': '80%',
            
        }

        return (
            <div>
               <h1>{this.state.counter}</h1>

               <button onClick={this.incrementCounter}>+</button>
               <button onClick={this.resetCounter}>reset</button>
               <button onClick={this.decrementCounter}>-</button>
             
            </div>
        );
    }
}
