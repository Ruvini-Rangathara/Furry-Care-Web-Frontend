import React from "react";

interface SelectProps {
    name: string;       // id of select
    label: string;      // label of select
    options: string[];  // array of options for the select
    optional?: boolean; // optional or not
    id?: string;        // id of select
}

class Select extends React.Component<SelectProps, any> {
    render() {
        const { name, label, optional, options } = this.props;

        return (
            <div className="w-full">
                <label htmlFor={name} className="block mb-1 mt-3">
                    {label}
                    {!optional ? <span className="text-red-600">*</span> : null}
                </label>
                <select
                    id={name}
                    className="block border border-gray-300 outline-none focus:border-gray-400 w-full p-1 rounded-md"
                >
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}

export default Select;
