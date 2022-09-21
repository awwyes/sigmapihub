import { Box, HStack, Input, Stack, Text, Button, Checkbox, Container, Divider, FormControl, FormLabel, Heading, useBreakpointValue, useColorModeValue, Flex } from '@chakra-ui/react'
import * as React from 'react'
import NextLink from 'next/link'
import { Logo } from './Logo'
import OAuthButtonGroup from './OAuthButtonGroup'
import { PasswordField } from './PasswordField'
  
  export default function Login() {
    return (
        <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
        <Stack spacing="8">
            <Stack spacing="6">
            <Logo />
            <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })}>
                Log in to your account
                </Heading>
                <HStack spacing="1" justify="center">
                <Text color='muted'>{"Don't have an account?"}</Text>
                <NextLink passHref href="/signup">
                    <Button variant="link" colorScheme="blue">
                        Sign up
                    </Button>
                </NextLink>
                
                </HStack>
            </Stack>
            </Stack>
            <Box
            py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
            boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
            borderRadius={{ base: 'none', sm: 'xl' }}
            >
            <Stack spacing="6">
                <Stack spacing="5">
                <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input id="email" type="email" />
                </FormControl>
                <PasswordField />
                </Stack>
                <HStack justify="space-between">
                <Checkbox defaultChecked>Remember me</Checkbox>
                <Button variant="link" colorScheme="blue" size="sm">
                    Forgot password?
                </Button>
                </HStack>
                <Stack spacing="6">
                <OAuthButtonGroup />                
                </Stack>
            </Stack>
            </Box>
        </Stack>
        </Container>
    )
  }