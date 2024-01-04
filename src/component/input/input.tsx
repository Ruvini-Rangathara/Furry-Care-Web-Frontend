import React from "react";

interface Props {
    type: string //type of input
    name: string  //id of input
    placeholder ?: string //placeholder of input ? -> optional
    label: string //label of input
    optional : boolean //optional or not

}

class Input extends React.Component<Props,any> {
  render() {
    return (
        <div>
            <label htmlFor={this.props.name} className={'block mb-1 mt-1'}>{this.props.label}
                {!this.props.optional ? <span className={'text-red-600'}>*</span> : null}
            </label>
            <input type={this.props.type} id={this.props.name} placeholder={this.props.placeholder}
                   className={'block border border-gray-300 outline-none focus:border-gray-400 w-full p-1 rounded-md'}/>
        </div>
    );
  }
}

export default Input;