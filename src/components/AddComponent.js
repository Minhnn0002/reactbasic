import React from "react";

class AddComponent extends React.Component {
    state = {
        projectName: "Ngoc minh",
        detail: "TMA Solution"
    }
    projectNameHandle = (event) => {
        this.setState({
            projectName: event.target.value
        })
    }
    detailHandler = (event) => {
        this.setState({
            detail: event.target.value
        })
    }
    submitHandler = (event) => {
        event.preventDefault()
        if (!this.state.projectName || !this.state.detail) {
            alert('Missing require parameter')
            return;
        }
        this.props.AddNewProject({
            projectName: this.state.projectName,
            detail: this.state.projectName
        });
        this.setState({
            projectName: '',
            detail: ''
        })
    }
    render() {
        return (
            <>
                <div>
                    <form >
                        <label htmlFor="fname">project name : {this.state.projectName}</label><br />
                        <input type="text" id="fname" value={this.state.projectName} onChange={(event) => this.projectNameHandle(event)} /><br />
                        <label htmlFor="lname">detail : {this.state.detail}</label><br />
                        <input type="text" id="lname" value={this.state.detail} onChange={(event) => this.detailHandler(event)} /><br /><br />
                        <input type="submit" value="submit" onClick={(event) => this.submitHandler(event)} />
                    </form>
                </div>
            </>
        )
    }
}
export default AddComponent