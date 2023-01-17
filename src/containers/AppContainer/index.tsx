import React from 'react'
import { AppCards, AppTitle, ContactUs, Features } from './containers'

export const AppContainer: React.FC = () => {
    return (
        <>
            <AppTitle />
            <AppCards />
            <Features title='title' description='description' />
            <ContactUs />
        </>
    )
}
