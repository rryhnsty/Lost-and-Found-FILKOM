import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export default function Button ({ children, className = " ", ...props}: ButtonProps){
    return(
        <button
        className = {`px-5 py-2 rounded-full text-sm font-medium transition-all shadow-sm ${className}`} 
        {...props}
        >
            {children}
        </button>
    )
}