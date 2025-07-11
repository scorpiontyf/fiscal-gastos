import React from 'react'

type TextProps = {
    as: string;
    children: React.ReactNode;
    className?: string;
}

function Text({ as, children, className }: TextProps) {
    return (
        React.createElement(as,
            {
                className: className,
            }, children)
    )
}

export default Text
