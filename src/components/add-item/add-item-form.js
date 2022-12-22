import React, { Component } from "react";

import "./add-item-form.css"


export default class AddItemForm extends Component {

    state = {
        label: ''
    }

    handleInputChange = (e) => {
       this.setState({
            label: e.target.value
       })
    }

    onSubmit = (e) =>  {
        e.preventDefault() // Чтобы не было перезагрузки страницы после отправки формы
        this.props.onAdded(this.state.label)
    }

    render() {
        return (
            <form className="add-item-form d-flex"
                  onSubmit={this.onSubmit}
            >
                <input
                    type="text"
                    className="form-control"
                    onChange={this.handleInputChange}
                    placeholder="What needs to be done"
                />
                <button className="btn btn-outline-secondary">
                    Add Item
                </button>
            </form>
        )
    }
}