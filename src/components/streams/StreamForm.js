import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {


    renderInput = (formProps) => {
        return (
            <div className="field">
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off" />
                {this.renderError(formProps.meta)}
            </div> // Syntax to get all the props provided by .input
        )
    }

    renderError = (meta) => {
        return (
            meta.touched && meta.error ?
                <div className="ui error message">
                    <div className="header">{meta.error}</div>
                </div>
                : null
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }
    render() {
        //this.props contains useful methods like handleSubmit created by reduxForm
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = "You must enter a title."
    }
    if (!formValues.description) {
        errors.description = "You must enter a description."
    }
    return errors;
}


// We wire up the validate function that we created to the reduxForm
export default reduxForm({
    form: 'streamForm',
    validate: validate
})(StreamForm);
