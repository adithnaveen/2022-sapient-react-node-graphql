import React, { Component } from 'react';



const SubComponent = ({ subTitle }) => (<h3>{subTitle}</h3>)

class App extends Component {
    state = {
        title: "ReactJs Application"
    }
    count = 0;

    componentDidMount() {
        let { title } = this.state;

        setInterval(() => {
            if (this.count % 5 === 0) {
                if (title === "ReactJs Application") {
                    title = "React JS With Virtual Dom";
                } else {
                    title = "ReactJs Application";
                }
            }
            this.setState({ title });
            console.log("Upating ", this.count++, " times")
        }, 1000);
    }

    render() {
        return (
            <div>
                <h1>{this.state.title} </h1>
                <SubComponent subTitle="This is Sub Title" />
            </div>
        );
    }
}

export default App;