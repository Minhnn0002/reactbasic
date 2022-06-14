import React from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {

    state = {
        project: [
            { id: 1, projectName: "nokia", detail: "java backend" },
            { id: 2, projectName: "sphera", detail: "react js" },
            { id: 3, projectName: "Icon", detail: "Csharp backend" }
        ]
    }

    AddNewProject = (project) => {
        this.setState({
            project: [...this.state.project, project]
        })
    }

    DeleteProject = (project) => {
        let tempProjects = this.state.project.filter(item => item.id !== project.id)
        this.setState({
            project: tempProjects
        })
    }

    render() {
        return (
            <>
                <ChildComponent project={this.state.project} DeleteProject={this.DeleteProject} />
                <br />
                <AddComponent AddNewProject={this.AddNewProject} />
            </>
        )
    }
}
export default MyComponent;