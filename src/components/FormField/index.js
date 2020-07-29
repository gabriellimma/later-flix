import React from "react";

function FormField({ value, onChange, name, type, label, tag }) {
    return (
        <div>
            <label>
                {label}
                <input as={tag}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                />
            </label>
        </div>
    )
}

export default FormField; 