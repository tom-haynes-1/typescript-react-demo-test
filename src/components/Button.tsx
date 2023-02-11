// adding an event prop (like onClick) to a Button component.
// using React.MouseEvent on the event parameter as its type. Using angle brackets will make the event more specific. The parameter just has to be passed into the component's prop handleClick.

import React from "react";

interface ButtonProps {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
    handleClick
}: ButtonProps) => {
    
    return <button 
                onClick={ handleClick }
            >
                Click me
            </button>
};

export default Button;