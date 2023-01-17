import React from 'react'
import {
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
    Group,
    ActionIcon,
} from '@mantine/core'
import {
    IconBrandTwitter,
    IconBrandYoutube,
    IconBrandInstagram,
} from '@tabler/icons'
import { useStyles } from './helpers'
//   import { ContactIconsList } from '../ContactIcons/ContactIcons';

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram]

export const ContactUs: React.FC = () => {
    const { classes } = useStyles()

    const icons = social.map((Icon, index) => (
        <ActionIcon
            key={index}
            size={28}
            className={classes.social}
            variant='transparent'
        >
            <Icon size={22} stroke={1.5} />
        </ActionIcon>
    ))

    return (
        <div className={classes.wrapper}>
            <SimpleGrid
                cols={2}
                spacing={50}
                breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
            >
                <div>
                    <Title className={classes.title}>Contact us</Title>
                    <Text className={classes.description} mt='sm' mb={30}>
                        Leave your email and we will get back to you within 24
                        hours
                    </Text>

                    {/* <ContactIconsList variant="white" /> */}

                    <Group mt='xl'>{icons}</Group>
                </div>
                <div className={classes.form}>
                    <TextInput
                        label='Email'
                        placeholder='your@email.com'
                        required
                        classNames={{
                            input: classes.input,
                            label: classes.inputLabel,
                        }}
                    />
                    <TextInput
                        label='Name'
                        placeholder='John Doe'
                        mt='md'
                        classNames={{
                            input: classes.input,
                            label: classes.inputLabel,
                        }}
                    />
                    <Textarea
                        required
                        label='Your message'
                        placeholder='I want to order your goods'
                        minRows={4}
                        mt='md'
                        classNames={{
                            input: classes.input,
                            label: classes.inputLabel,
                        }}
                    />

                    <Group position='right' mt='md'>
                        <Button className={classes.control}>
                            Send message
                        </Button>
                    </Group>
                </div>
            </SimpleGrid>
        </div>
    )
}
