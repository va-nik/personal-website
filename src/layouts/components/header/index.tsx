import React, { useState } from 'react'
import {
    Header as MainHeader,
    Group,
    ActionIcon,
    Container,
    Burger,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
    IconBrandTwitter,
    IconBrandYoutube,
    IconBrandInstagram,
} from '@tabler/icons'
import { MantineLogo } from '@mantine/ds'
import { SwitchToggle } from '../switchToggle'
import { headerStyles } from './helpres'

interface HeaderProps {
    links: { link: string; label: string }[]
}

export const Header: React.FC<HeaderProps> = ({ links }) => {
    const [opened, { toggle }] = useDisclosure(false)
    const [active, setActive] = useState(links[0].link)
    const { classes, cx } = headerStyles()

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={cx(classes.link, {
                [classes.linkActive]: active === link.link,
            })}
            onClick={(event) => {
                event.preventDefault()
                setActive(link.link)
            }}
        >
            {link.label}
        </a>
    ))

    return (
        <MainHeader height={56}>
            <Container className={classes.inner}>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    size='sm'
                    className={classes.burger}
                />
                <Group className={classes.links} spacing={5}>
                    {items}
                </Group>
                <MantineLogo size={28} />
                <Group
                    spacing={0}
                    className={classes.social}
                    position='right'
                    noWrap
                >
                    <ActionIcon size='lg'>
                        <IconBrandTwitter size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size='lg'>
                        <IconBrandYoutube size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size='lg'>
                        <IconBrandInstagram size={18} stroke={1.5} />
                    </ActionIcon>
                </Group>
                <Group spacing={5} position='right' mb={20}>
                    <SwitchToggle />
                </Group>
            </Container>
        </MainHeader>
    )
}
