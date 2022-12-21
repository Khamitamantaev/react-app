import React, { Component } from "react";

import "./add-item-form.css"


export default class AddItemForm extends Component {
    

    render() {
        return (
            <div className="add-item-form">
                <button className="btn btn-outline-secondary" onClick={() => this.props.onAdded('dasd')}>
                    Add Item
                </button>
            </div>
        )
    }
}