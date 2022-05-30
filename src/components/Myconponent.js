import React from "react";
class MyComponent extends React.Component {

    state = {
        FullName: "Ngoc minh",
        Company: "TMA Solution"
    }
    handleOnChangeName = (event) => {
        this.setState({
            FullName: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input value={this.state.FullName} type="text"
                    onChange={(event) => this.handleOnChangeName(event)}></input>
                {this.state.FullName}
                {this.state.Company}
            </div>
        )
    }
}
export default MyComponent;