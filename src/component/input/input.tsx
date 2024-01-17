import React, { useState, ChangeEvent, KeyboardEvent } from "react";

interface Props {
    value?: string;
    type: string;
    name: string;
    placeholder?: string;
    label: string;
    optional: boolean;
    onChange?: (value: string) => void;
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({
                                    value,
                                    type,
                                    name,
                                    placeholder,
                                    label,
                                    optional,
                                    onChange,
                                    onKeyDown,
                                }) => {
    const [inputValue, setInputValue] = useState<string>(value || '');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue);

        // Call the provided onChange handler, if available
        if (onChange) {
            onChange(newValue);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // Call the provided onKeyDown handler, if available
        if (onKeyDown) {
            onKeyDown(e);
        }
    };

    return (
        <div>
            <label htmlFor={name} className={'block mb-1 mt-3 text-[18px]'}>
                {label}
                {!optional && <span className={'text-red-600'}>*</span>}
            </label>
            <input
                type={type}
                id={name}
                placeholder={placeholder}
                className={'text-[18px] block border border-gray-300 outline-none focus:border-gray-400 p-1 rounded-md'}
                onChange={(e) => handleChange(e)}
                onKeyDown={(e) => handleKeyDown(e)}
                value={inputValue}
                required={!optional}
            />
        </div>
    );
};

export default Input;
