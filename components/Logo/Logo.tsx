import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, useColorMode } from '@chakra-ui/react'

export default function Logo(props) {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box {...props}>
            <Text ml={{base: 0}} fontSize='lg' fontWeight='bold'>
                <NextLink href="/">
                { colorMode === 'light' ? <Image width={'100vw'} height={'100vh'} src={'/logo.svg'} /> : <Image width={'100vw'} height={'100vh'} src={'/logo-white.svg'} />}
                </NextLink>
            </Text>
        </Box>
    )
}