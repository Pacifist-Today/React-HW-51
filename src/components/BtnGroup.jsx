import React from "react";

class BtnGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            secondary: "btn btn-secondary",
            primary: "btn btn-primary"
        }
    }

    onClickHandler = (e) => {
        const leftButton = "Left"
        const rightButton = "Right"
        const secondaryClass = "btn btn-secondary"
        const primaryClass = "btn btn-primary"
        const event = e.target

        if (event.textContent === leftButton) {
            event.className = primaryClass + " left"
            document.querySelector('.right')
                .className = secondaryClass + " right"
        }
        if (event.textContent === rightButton) {
            event.className = primaryClass + " right"
            document.querySelector('.left')
                .className = secondaryClass + " left"
        }
    }

    render() {
        return (
            <div className="btn-group" role="group">
                <button type="button" className={this.state.secondary + " left"} onClick={this.onClickHandler}>Left</button>
                <button type="button" className={this.state.secondary + " right"} onClick={this.onClickHandler}>Right</button>
            </div>
        )
    }
}


export default BtnGroup