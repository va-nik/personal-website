import React from 'react'
import { Container, Group, Anchor } from '@mantine/core'
import { MantineLogo } from '@mantine/ds'
import { footerStyles } from './helpers'

interface Link {
    link: string
    label: string
}

interface FooterProps {
    links: Link[]
}

export const Footer: React.FC<FooterProps> = ({ links }) => {
    const { classes } = footerStyles()
    const items = links.map((link) => (
        <Anchor<'a'>
            color='dimmed'
            key={link.label}
            href={link.link}
            onClick={(event) => event.preventDefault()}
            size='sm'
        >
            {link.label}
        </Anchor>
    ))

    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <MantineLogo size={28} />
                <Group className={classes.links}>{items}</Group>
            </Container>
        </div>
    )
}
