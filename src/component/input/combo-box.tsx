import React from "react";

interface SelectProps {
    name: string;       // id of select
    label: string;      // label of select
    options: string[];  // array of options for the select
    optional?: boolean; // optional or not
}

class Select extends React.Component<SelectProps, any> {
    render() {
        return (
            <div className={'w-full'}>
                <label htmlFor={this.props.name} className={'block mb-1 mt-1'}>{this.props.label}
                    {!this.props.optional ? <span className={'text-red-600'}>*</span> : null}
                </label>
                <select id={this.props.name} className={'block border border-gray-300 outline-none focus:border-gray-400 w-full p-1 rounded-md'}>
                    {this.props.options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        );
    }
}

export default Select;
