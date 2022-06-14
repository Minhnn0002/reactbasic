import React, { useLayoutEffect } from "react";
import AddComponent from "./AddComponent";

class ChildComponent extends React.Component {

    state = {
        show: false
    }
    showHandler = () => {
        this.setState({
            show: !this.state.show
        });
        console.log(this.state.show)
    }
    onClickDelete = (project) => {
        this.props.DeleteProject(project);
    }

    render() {
        let project = this.props.project;
        let { show } = this.state;
        let check = show;
        return (
            <>
                {show === false ? <div>
                    <button onClick={() => this.showHandler()}>Show</button>
                </div>
                    : <div>
                        <button onClick={() => this.showHandler()}>hide</button>
                        {project.map((item) => {
                            return (<>
                                <div key={item.id}>
                                    {item.projectName}-{item.detail} <></> <span onClick={() => this.onClickDelete(item)}>x</span>
                                </div>
                            </>)
                        })}
                    </div>}
            </>

        )
    }
}
export default ChildComponent;