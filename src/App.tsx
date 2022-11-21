import React, { useState } from 'react'
import {
    MantineProvider,
    ColorSchemeProvider,
    ColorScheme,
} from '@mantine/core'
import { Layout } from './layouts'
import { AppContainer } from './containers'

export const App: React.FC = () => {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

    return (
        <>
            <ColorSchemeProvider
                colorScheme={colorScheme}
                toggleColorScheme={toggleColorScheme}
            >
                <MantineProvider
                    theme={{ colorScheme }}
                    withGlobalStyles
                    withNormalizeCSS
                >
                    <Layout>
                        <AppContainer />
                    </Layout>
                </MantineProvider>
            </ColorSchemeProvider>
        </>
    )
}
