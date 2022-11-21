import React from 'react'

export const Content: React.FC<{ children?: React.ReactNode }> = ({
    children,
}) => {
    return <article>{children}</article>
}
