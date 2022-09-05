import React from "react";

class BtnGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeButton: ""
        }
    }

    onClickHandler = ({target}) => {
        if (target.name === "right") this.setState({activeButton: "right"})
        else if (target.name === "left") this.setState({activeButton: "left"})
    }

    render() {
        return (
            <div className="btn-group" role="group">
                <button name="left" type="button"
                        className={this.state.activeButton === "left" ? "btn btn-primary left" : "btn btn-secondary left"}
                        id = "left" onClick={this.onClickHandler}>Left</button>
                <button name="right" type="button"
                        className={this.state.activeButton === "right" ? "btn btn-primary right" : "btn btn-secondary right"}
                        id = "right" onClick={this.onClickHandler}>Right</button>
            </div>
        )
    }
}


export default BtnGroup