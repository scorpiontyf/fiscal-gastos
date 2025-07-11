import React from 'react'

type TextProps = {
    as: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties; 
}

function Text({ as, children, className, style }: TextProps) {
    return (
        React.createElement(as,
            {
                className: className,
                style: style
            }, children)
    )
}

export default Text
