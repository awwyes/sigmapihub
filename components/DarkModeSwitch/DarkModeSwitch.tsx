import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useColorMode, Box, IconButton, useColorModeValue, Tooltip } from '@chakra-ui/react'

export default function DarkModeSwitch() {
    const {colorMode, toggleColorMode} = useColorMode()
    return (
        <Box textAlign="right" py={4} ml={5} mr={3}>
            <Tooltip label="Dark/Light Mode" aria-label='Click Here to enable Light or Dark Mode'>
                <IconButton 
                    aria-label="Toggle Dark Switch"
                    icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon /> }
                    color={useColorModeValue("black", "yellow.500")}
                    onClick={toggleColorMode}
                    variant="ghost"
                    _hover={{
                        bg: "none"
                    }}
                    _active={{
                        bg: "none"
                    }}
                />
            </Tooltip>
        </Box>
    )
}