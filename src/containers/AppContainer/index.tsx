import React from 'react'
import { AppCards, AppTitle, ContactUs } from './containers'

export const AppContainer: React.FC = () => {
    return (
        <>
            <AppTitle />
            <AppCards />
            <ContactUs />
        </>
    )
}
