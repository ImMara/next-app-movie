import * as React from "react";
import {Component} from "react/cjs/react.production.min";

// functional component - arrow function
// WHEN TO USE :
//  1.for smaller components
//  2.reusable component
//  3.presentational components , partially right , we can use hooks and specify state

// const About = () => {
//
//     const message = "Hello World"
//
//     return(
//     <h1> Hello About Page - { message } </h1>
//     )
// }

//
// const About = () => {
//
//     const message = "Hello World"
//     return React.createElement('h1',null ,'Generate Create Element')
// }

// unctional compoenent - normal function
// function About() {
//    return(
//        <h1>Hello About Page</h1>
//    )
// }

class About extends Component {

    render(){
        return (
            <h1>Hello I am class component</h1>
        )
    }
}

export default About;