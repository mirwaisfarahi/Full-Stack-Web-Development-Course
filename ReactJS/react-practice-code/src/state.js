import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.number = 1;
        this.state = {date: new Date(),
                      num: this.number}; // same like prop, it is an object
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
        this.nextNumber = setInterval(() => this.increment(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
        clearInterval(this.nextNumber);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    increment() {
        this.setState({
            num: Math.random()
        });
    }

    render() {
        return(
            <div>
                <p>{this.state.date.toLocaleTimeString()}</p>
                <p>Random Number: {this.state.num}</p>
            </div>
        );
    }
}

export default Clock;

/**
 1. When <Clock /> is passed to root.render(), React calls the constructor of the Clock component. 
 2. Since Clock needs to display the current time, it initializes this.state with an object including the current time. We will later update this state.
 3. React then calls the Clock component’s render() method. This is how React learns what should be displayed on the screen. 
 4. React then updates the DOM to match the Clock’s render output.
 5. When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle method. Inside it, 
 the Clock component asks the browser to set up a timer to call the component’s tick() method once a second.
 6. Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update by calling setState() with an object containing the current time. 
 Thanks to the setState() call, React knows the state has changed, and calls the render() method again to learn what should be on the screen. This time, this.state.date in the render() method will be different, and so the render output will include the updated time. React updates the DOM accordingly.
 7. If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle method so the timer is stopped.
 */