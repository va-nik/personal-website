import React from 'react'
import { Content, Header } from './components'

export const Layout: React.FC<{ children?: React.ReactNode }> = ({
    children,
}) => {
    return (
        <>
            <Header links={[{ link: 'test', label: 'test' }]} />
            <Content>{children}</Content>
        </>
    )
}
