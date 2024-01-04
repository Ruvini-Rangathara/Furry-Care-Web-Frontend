import React from "react";

interface ButtonProps {
    borderColor: string;
    bgColor: string;
    hoverColor: string;
    textColor: string;
    textHoverColor: string;
    text: string;
}

class CustomButton extends React.Component<ButtonProps, any> {
    render() {
        const { borderColor, bgColor, hoverColor, textColor, textHoverColor, text } = this.props;

        const buttonStyle = {
            border: `1px solid ${borderColor}`,
            backgroundColor: bgColor,
            color: textColor,
            padding: '1px 15px',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, color 0.3s ease',
        };

        // const hoverStyle = {
        //     backgroundColor: hoverColor,
        //     color: textHoverColor,
        // };

        return (
            <button
                style={buttonStyle}
                onMouseOver={(e) => {e.currentTarget.style.backgroundColor = hoverColor, e.currentTarget.style.color = textHoverColor}}
                onMouseOut={(e) => {e.currentTarget.style.backgroundColor = bgColor, e.currentTarget.style.color = textColor}}
            >
                {text}
            </button>
        );
    }
}

export default CustomButton;
