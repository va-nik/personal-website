import {
    ThemeIcon,
    Text,
    Title,
    Container,
    SimpleGrid,
    useMantineTheme,
} from '@mantine/core'
import { TablerIcon } from '@tabler/icons'

import { useStyles, MockData } from './helpers'
import React from 'react'

interface FeatureProps {
    icon: TablerIcon
    title: React.ReactNode
    description: React.ReactNode
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
    const theme = useMantineTheme()
    return (
        <div>
            <ThemeIcon variant='light' size={40} radius={40}>
                <Icon size={20} stroke={1.5} />
            </ThemeIcon>
            <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>
                {title}
            </Text>
            <Text size='sm' color='dimmed' style={{ lineHeight: 1.6 }}>
                {description}
            </Text>
        </div>
    )
}

interface FeaturesGridProps {
    title: React.ReactNode
    description: React.ReactNode
    data?: FeatureProps[]
}

export const Features = ({
    title,
    description,
    data = MockData,
}: FeaturesGridProps) => {
    const { classes, theme } = useStyles()
    const features = data.map((feature, index) => (
        <Feature {...feature} key={index} />
    ))

    return (
        <Container className={classes.wrapper}>
            <Title className={classes.title}>{title}</Title>

            <Container size={560} p={0}>
                <Text size='sm' className={classes.description}>
                    {description}
                </Text>
            </Container>

            <SimpleGrid
                mt={60}
                cols={3}
                spacing={theme.spacing.xl * 2}
                breakpoints={[
                    { maxWidth: 980, cols: 2, spacing: 'xl' },
                    { maxWidth: 755, cols: 1, spacing: 'xl' },
                ]}
            >
                {features}
            </SimpleGrid>
        </Container>
    )
}
