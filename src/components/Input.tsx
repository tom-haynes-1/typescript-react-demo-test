// adding an event prop to handleChange (onChange attribute) for input elements.
// handleChange can be defined as a prop within the interface, but an also be declared as a 'handler' function within the component function body.
// handleChange takes the event parameter, but onChange will just 'point' to the function name within the component body.

import React from 'react';

interface InputProps {
    value: string;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// example 1 - adding handleChange as a prop to be passed in the input element.

// const Input = ({
//     value,
//     handleChange
// }: InputProps) => {
//     return <input 
//                 type="text"
//                 value={value}
//                 onChange={handleChange}
//             />
// }

// example 2 - creating a 'handler' function within the component function body and pointing to the function name.

const Input = ({
    value
}: InputProps) => {

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
};

    return <input 
                type="text" 
                value={ value }
                onChange={ (event) => handleInputChange(event) }
            />
};

export default Input;